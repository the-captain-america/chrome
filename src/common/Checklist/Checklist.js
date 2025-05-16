// callback function that will pass back an array of items containing a structure like so:
import React, { useState, useRef, createRef, useCallback } from 'react'
import { usePrevious } from '@hooks/usePrevious'
import PropTypes from 'prop-types'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Button } from '@common/Button'
import { prop, length, propEq, find, call } from 'ramda'

import useHoldingShift from './hooks/useHoldingShift'
import {
  IndicatorContainer,
  Container,
  HeaderControl,
  CheckGroup,
  CheckHeader,
  CheckItemWrapper,
  CheckCodeContainer,
  HeaderControlGroup,
} from './Checklist.styled'

import { StateView } from '@common/StateView'
import { Toggle } from '@common/Toggle'
import { Icon } from '@common/Icon'
import { colors } from '@common/Theme'
import { useEscape } from '@hooks/useEscape'

import { CheckItem } from './CheckItem'
import { ChecklistForm } from './ChecklistForm'
import { ChecklistMenu } from './ChecklistMenu'

import {
  CHECKLIST_ACTIONS,
  CHECKITEM_ACTIONS,
  FORM_ACTIONS,
  CHECKITEM_MENU_ACTIONS,
} from './constants'

import useAutoClearActiveId from './hooks/useAutoClearActiveId'
import {
  getItemStyle,
  getItemById,
  alter,
  reorder,
  applyIndexByMap,
  getActiveLength,
  getGroupStyle,
  getName,
  openList,
  generateKey,
  deactivateAllObjects,
} from './utils'
import useOptions from './hooks/useOptions'

const getHeight = ({
  defaultMaxHeight,
  isGlobalCodeEnabled,
  isMenuEnabled,
  height,
}) => {
  if (!!defaultMaxHeight) {
    return `${defaultMaxHeight}px`
  }
  const result =
    !!isGlobalCodeEnabled || !!isMenuEnabled ? `auto` : `${height}px`
  return result
}

const getActiveItemsLength = (items) => {
  if (!items || !items.length) return 0
  return items.filter((el) => !!el.active).length
}

const Checklist = ({
  options = [],
  name: rawName = '',
  callback,
  title,
  mb,
  mt,
  config,
}) => {
  const {
    isDebugMode,
    isLocal,
    isLink,
    isToggleCodeEnabled,
    isRefreshEnabled,
    isCreateEnabled,
    isCodeModeEnabled,
    isOpenLinkEnabled,
    isEditEnabled,
    isMultiSelectEnabled,
    isRemoveEnabled,
    extendGroupStyles,
    defaultMaxHeight,
    defaultMaxWidth,
    isCopyEnabled,
    isDragEnabled,
    labelKey,
    isEditModeEnabled,
    isTasklistEnabled,
    copyKey,
    isContainerEnabled,
    draggingColor,
    containerOffsetTop,
    formDefaultKey,
  } = config

  const [items, setItems] = useState([])
  const [activeId, setActiveId] = useState(null)
  const [activeVisibleId, setActiveVisibleId] = useState(null)
  const name = getName(rawName, options)
  const prevItems = usePrevious(options)
  const [, setIsDragging] = useState(false)
  const [isCreateMode, setCreateMode] = useState(false)
  const [, setCurrentHeight] = useState(100)
  const isHoldingShift = useHoldingShift(false)
  const checkItemRefs = useRef([])
  const [isEditMode, setEditMode] = useState(
    isEditModeEnabled || isTasklistEnabled,
  )
  const [isGlobalCodeEnabled, setCodeMode] = useState(
    isCodeModeEnabled || false,
  )
  // Use the custom hook to automatically clear activeId after 10 seconds (10000 milliseconds)
  useAutoClearActiveId(activeVisibleId, setActiveVisibleId, 100000)
  useOptions(options, prevItems, setItems)

  checkItemRefs.current =
    !!options &&
    options.length &&
    options.map((_, index) =>
      checkItemRefs.current[index] ? checkItemRefs.current[index] : createRef(),
    )

  useEscape(() => {
    handleClose()
    if (isTasklistEnabled) return
    setEditMode(false)
  })

  const handleClose = () => setActiveId(null)
  const handleCreate = () => setCreateMode((state) => !state)
  const onDragStart = () => setIsDragging(true)
  const onToggleCodeDisplay = ({ value }) => setCodeMode(value)

  const onDragEnd = (result) => {
    // Item has been dropped outside the available list
    if (!result.destination) {
      return
    }
    const sourceIndex = result.source.index
    const destIndex = result.destination.index

    if (result.type === name) {
      const contrivedItems = reorder(items, sourceIndex, destIndex)
      const reorderedItems = applyIndexByMap('index')(contrivedItems)
      setItems(reorderedItems)
      callback({
        name,
        action: CHECKLIST_ACTIONS.REORDER,
        value: reorderedItems,
      })
    }
    setIsDragging(false)
  }

  const handleMenuCallback = ({ action }) => {
    if (action === CHECKITEM_MENU_ACTIONS.SET_VIEW_CLOSE) {
      setActiveId(null)
    }
  }

  const handleFormCallback = ({ action, value }) => {
    if (action === FORM_ACTIONS.CREATE) {
      const unIndexedItems = [
        ...items,
        { ...value, id: `id-${Date.now()}`, active: false },
      ]

      const indexedItems = applyIndexByMap('index')(unIndexedItems)
      const sequencedItems = applyIndexByMap('sequence')(indexedItems)
      const orderedItems = sequencedItems.sort(
        (a, b) => a.sequence - b.sequence,
      )
      if (isLocal) {
        setItems(orderedItems)
        return
      }
      callback({ name, action: CHECKLIST_ACTIONS.CREATE, value: value })
    }
  }

  const handleCallback = ({ action, value }) => {
    if (action === CHECKITEM_MENU_ACTIONS.SET_VIEW_CLOSE) {
      setActiveId(null)
      return
    }
    if (action === CHECKITEM_ACTIONS.SET_VIEW_ITEM) {
      setActiveId(value)
      setActiveVisibleId(value)
      return
    }
    if (action === CHECKITEM_ACTIONS.SET_OPEN_ITEM) {
      callback({
        name,
        action: 'EXTERNAL',
        value: options.find((item) => item.id === value),
      })
      handleOpenSingleItem(value)

      return
    }
    if (action === CHECKITEM_ACTIONS.SET_REMOVE_ITEM) {
      const payload = items.filter((item) => item.id !== value)
      callback({
        name,
        action: CHECKLIST_ACTIONS.REMOVE_ITEM,
        value: isLocal ? payload : value,
      })
      return
    }
    if (action === CHECKITEM_ACTIONS.SET_ITEM) {
      const foundItem = getItemById(value)(items)
      if (!foundItem) return
      callback({
        name,
        action: CHECKLIST_ACTIONS.SET,
        value: !!foundItem ? foundItem : {},
      })
      return
    }
    if (action === CHECKITEM_ACTIONS.SET_SELECT_ITEM) {
      const activeState = prop('active')(find(propEq('id', value))(items))
      const updatedActiveItems = alter(value, !activeState, items)
      setItems(updatedActiveItems)
      callback({
        name,
        action: CHECKLIST_ACTIONS.SELECT,
        value: updatedActiveItems,
      })
      return
    }

    if (action === CHECKITEM_ACTIONS.SET_EDIT_ITEM) {
      callback({ name, action: CHECKLIST_ACTIONS.EDIT, value })
      return
    }
    if (action === CHECKLIST_ACTIONS.CANCEL) {
      setCreateMode(false)
      return
    }
  }

  const onToggleEditMode = () => {
    setEditMode((state) => !state)
    const deactivatedItems = deactivateAllObjects(items)
    setItems(deactivatedItems)
    if (isEditMode) {
      callback({
        name,
        action: CHECKLIST_ACTIONS.TOGGLE_EDIT_MODE,
        value: deactivatedItems,
      })
    }
    setActiveId(null)
  }

  const localOpen = (link) => {
    if (!link || !link.length) return
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  const onGroupDelete = () => {
    if (isLocal) {
      const contrivedItems = items.filter((k) => !k.active)
      callback({
        name,
        action: CHECKLIST_ACTIONS.REMOVE_MULTIPLE_ITEMS,
        value: contrivedItems,
      })
    } else {
      const activeItems = items.filter((k) => !!k.active)
      const filterActiveItems = activeItems.map((item) => item.id)

      callback({
        name,
        action: CHECKLIST_ACTIONS.API_REMOVE_MULTIPLE_ITEMS,
        value: filterActiveItems,
      })
    }
  }

  const handleOpenMultipleItems = () => {
    const activeItems = items.filter((k) => !!k.active)
    const multipleItemIds = activeItems.map((item) => item.value)
    openList(multipleItemIds)
    callback({
      name,
      action: CHECKLIST_ACTIONS.OPEN_ALL,
      value: multipleItemIds,
    })
  }

  const handleOpenSingleItem = (id) => {
    const foundItem = getItemById(id)(items)
    setActiveId(id)
    setActiveVisibleId(id)
    if (!foundItem) return
    localOpen(foundItem.value)
  }

  const simpleLength = length(items)
  const activelength = getActiveLength(items)
  const parentPaddingTop = 20
  const parentPaddingBottom = 20
  const paddingTop = 5
  const paddingBottom = 5
  const elementHeight = 44

  const elementWithPadding = elementHeight + paddingTop + paddingBottom
  const defaultHeight = elementHeight + parentPaddingTop + parentPaddingBottom

  const height =
    simpleLength > 1
      ? simpleLength * elementWithPadding +
        parentPaddingTop +
        parentPaddingBottom
      : defaultHeight

  const renderItems = (checkItems) => {
    if (!checkItems || !checkItems.length) return null
    return checkItems.map((item, index) => (
      <Draggable
        key={generateKey(item, index)}
        draggableId={generateKey(item, index)}
        index={index}
      >
        {(provided, snapshot) => (
          <>
            <CheckItemWrapper
              {...provided.draggableProps}
              ref={provided.innerRef}
              className="checklist-item"
              style={getItemStyle(
                snapshot.isDragging,
                provided.draggableProps.style,
              )}
            >
              <CheckItem
                {...item}
                activeVisibleId={activeVisibleId}
                callback={handleCallback}
                isEditMode={isEditMode}
                isHoldingShift={isHoldingShift}
                style={getItemStyle(snapshot.isDragging)}
                dragProps={provided.dragHandleProps}
                isDragging={snapshot.isDragging}
                config={{
                  isCopyEnabled,
                  isRemoveEnabled,
                  isDragEnabled,
                  isMultiSelectEnabled,
                  isTasklistEnabled,
                  defaultMaxWidth,
                  isLink,
                  labelKey,
                  copyKey,
                }}
              />
            </CheckItemWrapper>
            {provided.placeholder}
          </>
        )}
      </Draggable>
    ))
  }

  const renderDefaultIndicator = (activeLength) => (
    <IndicatorContainer maxHeight={activeLength > 0}>
      <Button variant="red" onClick={onGroupDelete}>
        <span>
          Delete {activeLength > 0 ? activeLength : 0}{' '}
          {activeLength === 1 ? `item` : `items`}
        </span>
        <Icon ml={4} name="TRASH" size={20} />
      </Button>
      {!!isLink && !!isOpenLinkEnabled && (
        <Button variant="green" onClick={handleOpenMultipleItems}>
          <span>
            Open {activeLength > 0 ? activeLength : 0}{' '}
            {activeLength === 1 ? `item` : `items`}
          </span>
          <Icon ml={4} name="OPEN_IN" stroke={colors.green} size={20} />
        </Button>
      )}
    </IndicatorContainer>
  )

  const renderIndicator = renderDefaultIndicator(activelength)

  const div = useCallback(
    (node) => {
      if (!isContainerEnabled) return
      if (node) {
        setCurrentHeight(node.getBoundingClientRect().height)
      }
      // eslint-disable-next-line
    },
    [isContainerEnabled],
  )

  const isMenuEnabled = !!activeId && !!isEditMode

  const handleRefresh = () => {
    callback({ name, action: CHECKLIST_ACTIONS.REFRESH })
  }

  const contrivedHeight = getHeight({
    defaultMaxHeight,
    isGlobalCodeEnabled,
    isMenuEnabled,
    height,
  })

  const completed = getActiveItemsLength(items)
  const total = items.length

  return (
    <>
      {isDebugMode && (
        <StateView
          state={{
            isGlobalCodeEnabled: isGlobalCodeEnabled,
          }}
        />
      )}
      <CheckHeader mt={mt}>
        {title && <h2 className="checklist-title">{title}</h2>}
        <HeaderControl>
          {!!isTasklistEnabled && (
            <Button variant="text">
              <span className="label">
                Tasks ({completed}/{total})
              </span>
              <Icon
                ml={5}
                name="CHECKBOX_FILLED"
                fill={colors.sharkGray}
                size={12}
              />
            </Button>
          )}
          <HeaderControlGroup>
            {!!isToggleCodeEnabled && !isMenuEnabled && (
              <Toggle
                className="view-mode"
                label="Code Display"
                isActive={isGlobalCodeEnabled}
                onChange={onToggleCodeDisplay}
                name={'isGlobalCodeEnabled'}
              />
            )}
            {!!isRefreshEnabled && (
              <Button variant="text" onClick={handleRefresh}>
                <span className="label">Refresh</span>
                <Icon ml={5} name="REFRESH" size={12} />
              </Button>
            )}
            {!!isCreateEnabled && (
              <Button maxWidth={90} variant="text" onClick={handleCreate}>
                {!!isCreateMode ? (
                  <>
                    <span className="label">Cancel</span>
                    <Icon ml={4} name="CANCEL" size={16} />
                  </>
                ) : (
                  <>
                    <span className="label">Add</span>
                    <Icon ml={4} name="ADD" size={16} />
                  </>
                )}
              </Button>
            )}
            {!!isEditEnabled && !isTasklistEnabled && (
              <Button
                maxWidth={90}
                width={90}
                disabled={isGlobalCodeEnabled}
                variant="text"
                onClick={onToggleEditMode}
              >
                {!!isEditMode ? (
                  <>
                    <span className="label">Done</span>
                    <Icon ml={4} name="CHECK" size={12} />
                  </>
                ) : (
                  <>
                    <span className="label">Edit</span>
                    <Icon ml={4} name="EDIT" viewBox="0 0 24 24" size={16} />
                  </>
                )}
              </Button>
            )}
          </HeaderControlGroup>
        </HeaderControl>
      </CheckHeader>
      {!isMenuEnabled && (
        <Container
          ref={div}
          maxHeight={contrivedHeight}
          isActive={isContainerEnabled}
          mb={mb}
          containerOffsetTop={containerOffsetTop}
        >
          <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
            <Droppable droppableId={`droppable_${name}`} type={name}>
              {(provided, snapshot) => (
                <>
                  <CheckGroup
                    extend={extendGroupStyles}
                    ref={provided.innerRef}
                    isOverflow={!!defaultMaxHeight}
                    style={getGroupStyle(
                      snapshot.isDraggingOver,
                      contrivedHeight,
                      draggingColor,
                    )}
                    className={snapshot.isDraggingOver ? 'is-drag' : 'not-drag'}
                  >
                    {renderItems(items)}
                  </CheckGroup>
                  {provided.placeholder}
                </>
              )}
            </Droppable>
          </DragDropContext>
        </Container>
      )}

      {!isMenuEnabled && !!isGlobalCodeEnabled && (
        <CheckCodeContainer>
          <StateView state={items} />
        </CheckCodeContainer>
      )}

      {!!isMenuEnabled && (
        <ChecklistMenu
          data={getItemById(activeId)(items)}
          callback={handleMenuCallback}
        />
      )}

      {config.isActionIndicatorEnabled && activelength > 0 && renderIndicator}

      {!isMenuEnabled && !!isCreateMode && (
        <ChecklistForm
          callback={handleFormCallback}
          config={{ formDefaultKey: !!formDefaultKey ? formDefaultKey : '' }}
        />
      )}
    </>
  )
}

Checklist.defaultProps = {
  callback: () => {},
  data: [],
  config: {
    isActionIndicatorEnabled: true,
    isRemoveEnabled: false,
    maxHeight: 800,
    isLink: false,
    isMultiSelectEnabled: false,
    isDragEnabled: true,
    isToggleCodeEnabled: false,
    isEditEnabled: true,
    isRefreshEnabled: false,
    isCreateEnabled: false,
    isCopyEnabled: false,
    isLocal: false,
    extendGroupStyles: null,
    isGlobalCodeEnabled: false,
    isDebugMode: false,
    containerOffsetTop: 0,
    copyKey: 'label',
    labelKey: 'label',
    draggingColor: '',
    isContainerEnabled: true,
    isTasklistEnabled: false,
  },
}

Checklist.propTypes = {
  name: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
      index: PropTypes.number,
      sequence: PropTypes.number,
      active: PropTypes.bool,
    }),
  ),
  config: PropTypes.shape({
    isRemoveEnabled: PropTypes.bool,
    isActionIndicatorEnabled: PropTypes.bool,
    maxHeight: PropTypes.number,
    isLink: PropTypes.bool,
    isMultiSelectEnabled: PropTypes.bool,
    isDragEnabled: PropTypes.bool,
    isLocal: PropTypes.bool,
    isRefreshEnabled: PropTypes.bool,
    defaultMaxWidth: PropTypes.string,
    defaultMaxHeight: PropTypes.number,
    isCreateEnabled: PropTypes.bool,
    isCopyEnabled: PropTypes.bool,
    isDebugMode: PropTypes.bool,
    isTasklistEnabled: PropTypes.bool,
    copyKey: PropTypes.string,
    labelKey: PropTypes.string,
    isToggleCodeEnabled: PropTypes.bool,
  }),
}

export { Checklist }
