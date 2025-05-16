import React, { useState, createRef, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@common/Icon'
import { StateView } from '@common/StateView'
import { Row, Col } from '@common/Grid'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { map, pipe, prop, toUpper, isEmpty } from 'ramda'
import { usePrevious } from '@hooks/usePrevious'
import { CodeWriterForm } from './CodeWriterForm'
import {
  StateWrapper,
  CodeItem,
  CodeGroup,
  CodeWrapper,
  CodeContainer,
  CodeCheckStyle,
  IconContainer,
  CodeControls,
  CodeRemove,
  CodeCopy,
  CodeFormElement,
  Label,
  CodePlaceholder,
} from './CodeWriter.styled'
import { parseISO, isValid, format } from 'date-fns'
import { format as formatFp } from 'date-fns/fp'
import { uuid } from '@utils/uuid'
import { Text } from '@common/Text'

const getReadableDate = (utcDate) => {
  if (!utcDate) return 'Invalid Date'
  const parsed = parseISO(utcDate)
  if (isValid(parsed)) return format(parsed, 'PPP')
  return 'Invalid Date'
}

const cbActions = {
  REORDER: 'REORDER',
  SUBMIT: 'SUBMIT',
  COPY: 'COPY',
  SELECT: 'SELECT',
  DELETE: 'DELETE',
  EDIT: 'EDIT',
  UPDATE: 'UPDATE',
  CREATE: 'CREATE',
}

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  display: 'flex',
  border: isDragging && '1px solid darkgray',
  borderRadius: isDragging && '6px',
  ...draggableStyle,
})

const getGroupStyle = (isDraggingOver) => ({
  transition: 'all .3s ease-in-out',
  background: isDraggingOver ? '#1f2428' : '#282e32',
})

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

const applyIndexByMap = (items = []) => items.map((m, i) => ({ ...m, index: i }))

const getName = (name, options) => {
  if (!options || !options.length) return ''
  if (!name) return map(pipe(prop('label'), toUpper))(options.slice(0, 2)).join('_')
  return name
}

const getPrefix =
  ({ prefix, suffix }) =>
  (value) => {
    if (!value) return ''
    return `${prefix} '${value}' ${suffix}`
  }

export const CodeWriter = ({ callback, label, data, config }) => {
  const [localItems, setLocalItems] = useState([])
  const [copiedValue, setCopiedValue] = useState('')
  const {
    showState = false,
    showForm = false,
    labelKey = '',
    maxHeight,
    enableDrag = true, // new config flag
    enableDateView = true,
  } = config

  const previousItems = usePrevious(data)
  const [placeholderProps, setPlaceholderProps] = useState({})
  const name = getName(label, data)
  const queryAttr = `data-rbd-drag-handle-draggable-id__${name}`
  const [selectedItem, setSelectedItem] = useState(null)
  const textAreaRefs = useRef([])

  textAreaRefs.current = (localItems || []).map((_, idx) => textAreaRefs.current[idx] || createRef())

  useEffect(() => {
    if (data !== previousItems) {
      setLocalItems(data)
    }
  }, [data, previousItems])

  const handleUpdate = (itemData) => {
    const newItem = { ...itemData, id: uuid() }
    const updated = applyIndexByMap([...localItems, newItem])
    setLocalItems(updated)
    callback({ action: cbActions.CREATE, data: newItem })
  }

  const handleRemove = (id) => {
    const filtered = localItems.filter((itm) => itm.id !== id)
    setLocalItems(filtered)
    callback({ action: cbActions.DELETE, data: { id } })
  }

  const handleDragStart = (event) => {
    if (!enableDrag) return
    const dom = document.querySelector(`[${queryAttr}='${event.draggableId}']`)
    if (!dom) return
    const { clientHeight, clientWidth } = dom
    const sourceIndex = event.source.index
    const parent = dom.parentNode
    const clientY =
      parseFloat(window.getComputedStyle(parent).paddingTop) +
      Array.from(parent.children)
        .slice(0, sourceIndex)
        .reduce((sum, child) => {
          const style = window.getComputedStyle(child)
          return sum + child.clientHeight + parseFloat(style.marginBottom)
        }, 0)

    setPlaceholderProps({
      clientHeight,
      clientWidth,
      clientY,
      clientX: parseFloat(window.getComputedStyle(parent).paddingLeft),
    })
  }

  const handleDragEnd = (result) => {
    setPlaceholderProps({})
    if (!enableDrag || !result.destination) return

    const reordered = reorder(localItems, result.source.index, result.destination.index)
    const indexed = applyIndexByMap(reordered)
    setLocalItems(indexed)
    callback({ action: cbActions.REORDER, data: { items: indexed } })
  }

  const onCopy = ({ value, index }) => {
    const ref = textAreaRefs.current[index]
    if (ref?.current) {
      ref.current.select()
      document.execCommand('copy')
    }
    const message = getPrefix({
      prefix: '',
      suffix: '',
    })(value)
    setCopiedValue(value)
    callback({ action: cbActions.COPY, data: { value: message } })
  }

  const onSelect = ({ data: item }) => {
    setSelectedItem(item.id)
    callback({ action: cbActions.SELECT, data: { value: item } })
  }

  const renderItem = (item, index, provided, snapshot) => (
    <CodeCheckStyle
      {...(enableDrag ? provided.draggableProps : {})}
      ref={enableDrag ? provided.innerRef : null}
      style={enableDrag ? getItemStyle(snapshot.isDragging, provided.draggableProps.style) : {}}
      data-rbd-drag-handle-draggable-id__={item.id} // maintain queryAttr
    >
      {enableDrag && (
        <IconContainer className="IconDrag" {...provided.dragHandleProps}>
          <Icon name="DRAG" size={20} />
        </IconContainer>
      )}
      <CodeItem className={selectedItem === item.id ? 'active' : ''}>
        <span className="index">{!!labelKey && item[labelKey] ? item[labelKey] : item.value}</span>
        {enableDateView && (
          <span className="date">
            Created:{' '}
            {getReadableDate(item.timestamp) === 'Invalid Date'
              ? ''
              : formatFp('yyyy-MM-dd | hh:mm')(item.timestamp)}
          </span>
        )}
        <CodeFormElement>
          <textarea
            readOnly
            ref={textAreaRefs.current[index]}
            value={getPrefix({
              prefix: '',
              suffix: '',
            })(item.value)}
          />
        </CodeFormElement>
        <CodeControls>
          <CodeCopy onClick={() => onCopy({ value: item.value, index })}>
            <Icon name="COPY" stroke="#A9AEB9" size={20} />
          </CodeCopy>
          <CodeRemove onClick={() => handleRemove(item.id)}>
            <Icon name="CLOSE" size={20} stroke="rgb(238, 58, 58)" />
          </CodeRemove>
        </CodeControls>
      </CodeItem>
    </CodeCheckStyle>
  )

  const renderContent = () => {
    if (!localItems.length) return null

    const items = localItems.map((item, idx) => {
      if (enableDrag) {
        return (
          <Draggable key={item.id} draggableId={item.id} index={idx}>
            {(provided, snapshot) => renderItem(item, idx, provided, snapshot)}
          </Draggable>
        )
      } else {
        // wrap in a simple div to satisfy layout
        return (
          <div key={item.id} style={{ marginBottom: '8px' }}>
            {renderItem(item, idx, { draggableProps: {}, dragHandleProps: {} }, {})}
          </div>
        )
      }
    })

    if (enableDrag) {
      return (
        <CodeWrapper maxHeight={maxHeight}>
          <DragDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
            <Droppable droppableId={`droppable_${name}`} type={name}>
              {(provided, snapshot) => (
                <React.Fragment>
                  <CodeGroup ref={provided.innerRef} style={getGroupStyle(snapshot.isDraggingOver)}>
                    {items}
                  </CodeGroup>
                  {provided.placeholder}
                  {!isEmpty(placeholderProps) && snapshot.isDraggingOver && (
                    <div
                      className="placeholder"
                      style={{
                        top: placeholderProps.clientY,
                        left: placeholderProps.clientX,
                        height: placeholderProps.clientHeight,
                        width: placeholderProps.clientWidth,
                      }}
                    />
                  )}
                </React.Fragment>
              )}
            </Droppable>
          </DragDropContext>
        </CodeWrapper>
      )
    }

    return (
      <CodeWrapper maxHeight={maxHeight}>
        <CodeGroup>{items}</CodeGroup>
      </CodeWrapper>
    )
  }

  const renderPlaceholder = () => {
    if (localItems.length) return null
    return (
      <CodeGroup>
        <CodePlaceholder>
          <Text color="white" size={14}>
            No items
          </Text>
        </CodePlaceholder>
      </CodeGroup>
    )
  }

  return (
    <CodeContainer>
      <Label>{label}</Label>
      <Row>
        <Col {...(showState ? { xs: 7, sm: 7, md: 7 } : { xs: 12, sm: 12, md: 12 })}>
          {renderContent()}
          {renderPlaceholder()}
        </Col>
        {showState && (
          <Col xs={5} sm={5}>
            <StateWrapper maxHeight={maxHeight && `${maxHeight}px`}>
              <StateView state={localItems} />
            </StateWrapper>
          </Col>
        )}
      </Row>
      {showForm && (
        <Row>
          <Col>
            <CodeWriterForm onSubmit={handleUpdate} name="code-writer-form" value={copiedValue} />
          </Col>
        </Row>
      )}
    </CodeContainer>
  )
}

CodeWriter.defaultProps = {
  callback: () => {},
  label: '',
  data: [],
  config: {
    showState: false,
    enableDrag: true,
  },
}

CodeWriter.propTypes = {
  callback: PropTypes.func,
  label: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string,
      timestamp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  config: PropTypes.shape({
    showState: PropTypes.bool,
    showForm: PropTypes.bool,
    labelKey: PropTypes.string,
    maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    enableDrag: PropTypes.bool,
  }),
}

export default CodeWriter
