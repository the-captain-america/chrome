import React, { useState, useRef, createRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Group,
  IconContainer,
  CustomButton,
  Label,
  SelectedItemContainer,
} from './MultiSelect.styled'
import { Checkmark } from '@common/Checkmark'
import { Icon } from '@common/Icon'
import { curry, map, assoc, prop, is } from 'ramda'
import { alter } from '@utils/ramda'
import { StateView } from '@common/StateView'

const alterAll = curry((state, items) => map(assoc('active', state), items))

const getPriority =
  (key) =>
  (list = []) =>
    list.sort((a, b) => (prop(key)(a) > prop(key)(b) ? 1 : -1))

const isEmpty = (data) => {
  if (!!data.isArray) return !data || !data.length
  if (typeof data === 'object') return !data || !Object.keys(data).length
}

const SelectedItem = ({
  item,
  onSelect = () => {},
  trimCount,
  showCheckbox,
  isCopied,
  labelKey,
  children,
  ...props
}) => {
  const mightTrim = (count) => (str) =>
    str && str.length > count ? str.slice(0, count) : str
  const isActive = item.active
  const appendedClassName = isActive ? 'active' : 'in-active'

  const label =
    !labelKey || labelKey.length <= 0
      ? prop('label')(item)
      : prop(labelKey)(item)

  const renderIcon = () => {
    if (!showCheckbox) return null
    return isActive ? (
      <IconContainer
        className={`IconContainer ${appendedClassName}`}
        color="blue"
      >
        <Icon name="CHECKBOX_FILLED" size={20} />
      </IconContainer>
    ) : (
      <IconContainer className={`IconContainer ${appendedClassName}`}>
        <Icon name="CHECKBOX_OUTLINE" viewBox="-1 -1 20 20" size={20} />
      </IconContainer>
    )
  }

  return (
    <SelectedItemContainer
      onClick={() => onSelect(item)}
      showCheckbox={showCheckbox}
      isCopied={isCopied}
      className={`SelectedItemContainer ${appendedClassName}`}
      isActive={isActive}
      {...props}
    >
      <span className={`SelectedItemLabel ${appendedClassName}`}>
        {(trimCount && trimCount > 0 && mightTrim(trimCount)(label)) ||
          label ||
          'Empty'}
      </span>
      {renderIcon()}
      {children}
    </SelectedItemContainer>
  )
}

SelectedItem.defaultProps = {
  trimCount: 50,
}

const MultiSelect = ({
  options: rawOptions = [],
  callback = () => {},
  label,
  name,
  config,
  extend,
  ...props
}) => {
  const {
    showToggle,
    initialiseAll,
    labelKey,
    showCheckbox,
    isCopyVariant,
    isSingleSelect,
  } = config

  const [toggle, setToggle] = useState(initialiseAll)
  const [copiedIndex, setCopiedIndex] = useState(null)
  const options = rawOptions

  const textAreaRefs = useRef([])

  textAreaRefs.current = options.map((_, index) =>
    textAreaRefs.current[index] ? textAreaRefs.current[index] : createRef(),
  )

  const activeState = () => {
    if (!toggle) return false
    const foundNegative = options.filter((f) => !f.active)
    if (foundNegative.length > 0) {
      return false
    }

    return true
  }

  const toggleSelectAll = () => {
    if (activeState()) {
      setToggle(false)
      const disableAllItems = alterAll(false, options)
      callback({ name, value: disableAllItems })
      return
    }
    setToggle(true)
    const enableAllItems = alterAll(true, options)
    callback({ name, value: enableAllItems })
  }

  const handleSinglSelect = (item) => {
    const disableAllItems = alterAll(false, options)
    const newData = alter(true, item.id, disableAllItems)
    callback({ name, value: newData })
  }

  useEffect(() => {
    if (isCopyVariant && !!copiedIndex) {
      setTimeout(() => {
        setCopiedIndex(null)
      }, 800)
    }
  }, [copiedIndex])

  const onLocalSelect = (item, index) => {
    // Handle the isCopyVariant case
    if (isCopyVariant && textAreaRefs && textAreaRefs?.current[index]) {
      textAreaRefs.current[index]?.current.select()
      document.execCommand('copy')
      setCopiedIndex(index)
      return // Exit early
    }

    // Handle the isSingleSelect case
    if (Boolean(isSingleSelect)) {
      handleSinglSelect(item, index)
      return // Exit early
    }

    // Toggle the active state for the item
    const newData = options.map((option) => {
      if (option.id === item.id) {
        // Toggle the active state
        return { ...option, active: !option.active }
      }
      return option // Return unchanged items
    })

    // Send the updated options to the callback function
    callback({ name, value: newData })
  }

  const renderItems = options.map((item, index) => (
    <SelectedItem
      key={index}
      item={item}
      trimCount={200}
      labelKey={labelKey}
      isActive={item.active}
      isDisabled={item.disabled}
      isCopied={copiedIndex === index}
      onSelect={(cb) => onLocalSelect(cb, index)}
      showCheckbox={showCheckbox}
    >
      {isCopyVariant && (
        <textarea
          readOnly
          ref={textAreaRefs.current[index]}
          value={item.label}
        />
      )}
    </SelectedItem>
  ))

  return (
    <Container className="MultiSelect__Container" extend={extend} {...props}>
      {label && <Label>{label}</Label>}
      {!!showToggle && !Boolean(isSingleSelect) && options.length > 1 && (
        <CustomButton
          classname="MultiSelect__Toggle"
          config={config}
          onClick={toggleSelectAll}
        >
          <Checkmark isActive={activeState()}>{`Select all`}</Checkmark>
        </CustomButton>
      )}
      {options && options.length > 0 && (
        <Group className="MultiSelect__Group">{renderItems}</Group>
      )}
    </Container>
  )
}

/**
 * Returns an array after accepting an object and converting it to an array
 *
 * @param options The array of items in which to select from
 * @returns {function} The callback incuding all selected items with an udpated object
 */

MultiSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  callback: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.any,
      active: PropTypes.bool,
      sequence: PropTypes.number,
    }),
  ),
  callback: PropTypes.func,
  config: PropTypes.shape({
    labelKey: PropTypes.string,
    showToggle: PropTypes.bool,
    initialiseAll: PropTypes.bool,
    showCheckbox: PropTypes.bool,
    isCopyVariant: PropTypes.bool,
  }),
}

export { MultiSelect }
