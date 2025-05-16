import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@common/Icon'
import { delay, getLabel, isValidPropertyValue } from '../utils'
import { prop } from 'ramda'
import { CHECKITEM_ACTIONS } from '../constants'

import {
  CheckLabelSpan,
  CheckControlEnd,
  CheckControl,
  CheckItemContainer,
  ButtonContainer,
} from './CheckItem.styled'

const getClassNames = (active, activeVisibleId, defaultClassName) => (id) => {
  let className = defaultClassName
  if (activeVisibleId === id) {
    className += ' visible'
  }
  if (active) {
    className += ' active'
  }
  return className
}

const getCopyableLabel = ({ props, labelKey }) => {
  if (!!isValidPropertyValue(props, labelKey)) {
    const result = props[labelKey]
    return result
  }
  const result = getLabel({ props, labelKeys: [labelKey] })
  return result
}

const CheckItem = ({
  callback,
  activeVisibleId,
  dragProps,
  isEditMode,
  isHoldingShift,
  isDragging,
  config,
  ...props
}) => {
  const {
    isCopyEnabled,
    isRemoveEnabled,
    isDragEnabled,
    isMultiSelectEnabled,
    isTasklistEnabled,
    defaultMaxWidth,
    isLink,
    labelKey,
    copyKey,
  } = config

  const id = prop('id')(props)
  const active = prop('active')(props)

  const textAreaRef = useRef()
  const [isLocalCopied, setLocalCopied] = useState(false)

  const onLocalRemove = (e, id) => {
    e.stopPropagation()
    callback({ action: CHECKITEM_ACTIONS.SET_REMOVE_ITEM, value: id })
  }

  const onParentSelect = (e, id) => {
    // e.stopPropagation()

    if (!isLink && !!isEditMode) {
      callback({ action: CHECKITEM_ACTIONS.SET_SELECT_ITEM, value: id })
      return
    }
    if (!isLink && !isEditMode && !!isCopyEnabled) {
      callback({ action: CHECKITEM_ACTIONS.SET_ITEM, value: id })
      return
    }
    if (!!isLink && !!isEditMode) {
      callback({ action: CHECKITEM_ACTIONS.SET_SELECT_ITEM, value: id })
      return
    }
    if (!!isLink && !isEditMode && !isCopyEnabled) {
      // if it is a link and editMode is off
      callback({ action: CHECKITEM_ACTIONS.SET_OPEN_ITEM, value: id })
      return
    }
  }

  const onViewItem = (e, id) => {
    e.stopPropagation()
    if (!isEditMode) return
    callback({ action: CHECKITEM_ACTIONS.SET_VIEW_ITEM, value: id })
  }

  const onSelectItem = (e, id) => {
    e.stopPropagation()
    callback({ action: CHECKITEM_ACTIONS.SET_SELECT_ITEM, value: id })
  }

  const onLocalCopy = (e) => {
    e.stopPropagation()
    if (!!isCopyEnabled && !!textAreaRef.current) {
      textAreaRef.current.select()
      document.execCommand('copy')
      setLocalCopied(true)
    }
  }

  useEffect(() => {
    if (!isLocalCopied) return
    delay(3000).then(() => {
      setLocalCopied(false)
    })
  }, [isLocalCopied])

  const copyableValue = getCopyableLabel({ props, labelKey: copyKey })
  const label = getCopyableLabel({ props, labelKey })

  return (
    <CheckItemContainer
      id={id}
      onClick={(e) => onParentSelect(e, id)}
      isDragging={isDragging}
      isActive={isLocalCopied}
      isSelected={activeVisibleId === id}
      bgColor="#1f242a"
      isCompleted={isTasklistEnabled && !!active}
    >
      <CheckControl className="check-control">
        <ButtonContainer
          className={getClassNames(active, activeVisibleId, 'IconCheck')(id)}
          onClick={(e) => onSelectItem(e, id)}
        >
          <Icon name={active ? 'CHECKBOX_FILLED' : 'CHECKBOX'} size={20} />
        </ButtonContainer>

        <ButtonContainer
          className={
            isDragEnabled && !!isEditMode
              ? getClassNames(active, activeVisibleId, 'IconDrag')(id)
              : `IconDrag hidden`
          }
          {...dragProps}
        >
          <Icon name="DRAG" size={20} />
        </ButtonContainer>
      </CheckControl>

      <CheckLabelSpan
        className="label"
        isActive={!isRemoveEnabled}
        defaultMaxWidth={defaultMaxWidth}
      >
        {label}
      </CheckLabelSpan>

      <textarea
        className="Checklist__Textarea"
        ref={textAreaRef}
        value={copyableValue}
        readOnly
      />
      <CheckControlEnd className="Controls">
        {!!isRemoveEnabled && !!isEditMode && (
          <ButtonContainer
            className={getClassNames(active, activeVisibleId, 'IconDelete')(id)}
            onClick={(e) => onLocalRemove(e, id)}
          >
            <Icon name="TRASH" size={20} />
          </ButtonContainer>
        )}
        {!!isCopyEnabled && !isTasklistEnabled && (
          <ButtonContainer
            className={getClassNames(
              isLocalCopied,
              activeVisibleId,
              'IconCopy',
            )(id)}
            onClick={(e) => onLocalCopy(e)}
          >
            <Icon name="COPY" stroke="white" size={20} />
          </ButtonContainer>
        )}
        {!!isEditMode && !isCopyEnabled && !isTasklistEnabled && (
          <ButtonContainer
            onClick={(e) => onViewItem(e, id)}
            className={getClassNames(active, activeVisibleId, 'IconArrow')(id)}
          >
            <Icon name="ARROW_RIGHT" stroke="white" size={20} />
          </ButtonContainer>
        )}
      </CheckControlEnd>
    </CheckItemContainer>
  )
}

CheckItem.defaultProps = {
  callback: () => {},
  dragProps: {},
}

CheckItem.propTypes = {
  config: PropTypes.shape({
    isDragging: PropTypes.bool,
    isCopyEnabled: PropTypes.bool,
    isRemoveEnabled: PropTypes.bool,
    isDragEnabled: PropTypes.bool,
    isMultiSelectEnabled: PropTypes.bool,
    isLink: PropTypes.bool,
    labelKey: PropTypes.string,
    isTasklistEnabled: PropTypes.bool,
    defaultMaxWidth: PropTypes.string,
    copyKey: PropTypes.string,
  }),
  callback: PropTypes.func,
  activeVisibleId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.any,
  ]),
  dragProps: PropTypes.object,
}

export { CheckItem }
