import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@common/Icon'
import { Option, Group, Container, Label } from './SelectButton.styled'
import { useDimensions } from '@hooks/useDimensions'
import { FieldGroup } from '@common/FieldGroup'

const sortOptions = (options) => {
  if (!options || !options.length) return []
  return options.sort((a, b) => a.value - b.value)
}

const getSelected = (value, options) => {
  if (!value) return null
  const result = options.find((option) => option.value === value)
  return result?.value || null
}

const SelectButton = ({
  callback = () => {},
  name = '',
  active,
  label,
  options,
  disabled,
  config,
}) => {
  const { mb, mt, enableIcon = false, enableSort } = config || {}
  const sortedOptions = !!enableSort ? sortOptions(options) : options

  const selectedItem = !!getSelected(active, sortedOptions)
    ? getSelected(active, sortedOptions)
    : options[0].value

  const onSelect = (value) => {
    callback({ name: name || 'select', value: value })
  }

  const elemRef = useRef()
  const { width } = useDimensions(elemRef)

  useEffect(() => {
    if (!active) return
    callback({ name: name || 'select', value: selectedItem })
  }, [])

  const renderOptions = (items) => {
    if (!items.length || items.length <= 0) return null
    const result = items.map((option) => {
      return (
        <Option
          key={option.id}
          disabled={disabled}
          isActive={option.value === selectedItem}
          onClick={() => onSelect(option.value)}
        >
          {option.label && <span className="label">{option.label}</span>}
          {!!enableIcon && (
            <Icon
              ml={5}
              name="TARGET"
              stroke={option.value === selectedItem ? 'black' : 'white'}
              size={20}
            />
          )}
        </Option>
      )
    })
    return (
      <FieldGroup variant="ELEMENT" mb={mb} mt={mt}>
        {label && <Label>{label}</Label>}
        <Group ref={elemRef} isActive={width <= 400}>
          {result}
        </Group>
      </FieldGroup>
    )
  }

  if (!options || !options.length) return null

  return <Container>{renderOptions(sortedOptions)}</Container>
}

SelectButton.defaultProps = {
  active: null,
  options: [],
}

SelectButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  callback: PropTypes.func,
  active: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
    }),
  ),
}

export { SelectButton }
