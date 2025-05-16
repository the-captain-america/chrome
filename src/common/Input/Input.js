import React, { forwardRef, useRef } from 'react'
import PropTypes from 'prop-types'
import { FieldGroup } from '@common/FieldGroup'
import { Icon } from '@common/Icon'
import { Primary as InputField } from './Primary'
import { Label, InputClose, InputContainer } from './Input.styled'

const Input = forwardRef((props, ref) => {
  const {
    variant = 'secondary',
    label = '',
    mb,
    mt,
    config = {},
    hasClear = false,
    extend,
    value,
    name,
    placeholder,
    type,
    onClear = () => {},
    onChange = () => {},
    ...rest
  } = props

  const localRef = useRef(null)
  // Use the external ref if provided, otherwise the local one.
  const inputRef = ref || localRef

  const { inputStyles } = config || {}

  const localOnChange = (e) => {
    e.preventDefault()
    onChange(e)
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      onClear({ name, action: 'ESCAPE' })
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }
  }

  const handleClear = (e) => {
    if (hasClear) {
      e.preventDefault()
      onClear({ name, action: 'CLEAR' })
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }
  }

  const renderIcon = () => {
    if (!hasClear || !value || !value.length) return null
    return (
      <InputClose
        tabIndex={0}
        type="button"
        onClick={handleClear}
        className="input-close"
      >
        <Icon
          name="CLOSE_SMALL"
          stroke="#A9AEB9"
          viewBox={`-1 -1 20 20`}
          size={20}
        />
      </InputClose>
    )
  }

  return (
    <FieldGroup
      className={`FieldGroup ${variant}`}
      variant={'ELEMENT'}
      mb={mb}
      mt={mt}
      extend={extend}
    >
      {label && <Label className="label">{label}</Label>}
      <InputContainer type={type}>
        <InputField
          style={inputStyles}
          ref={inputRef}
          type={type}
          tabIndex={0}
          value={value}
          variant={variant}
          placeholder={placeholder}
          onChange={localOnChange}
          isDate={type === 'date'}
          onKeyDown={handleKeyDown}
          name={name}
          {...rest}
        />
        {renderIcon()}
      </InputContainer>
    </FieldGroup>
  )
})

Input.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string,
  config: PropTypes.object,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  hasClear: PropTypes.bool,
}

export { Input }
