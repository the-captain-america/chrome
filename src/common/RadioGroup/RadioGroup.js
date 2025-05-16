import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Container, RadioInput, Label } from './RadioGroup.styled'

const Radio = ({
  id,
  label,
  children,
  checked,
  tabIndex,
  value,
  name,
  onChange,
  className,
  ...props
}) => {
  return (
    <RadioInput
      {...props}
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      tabIndex={tabIndex}
    />
  )
}

Radio.defaultProps = {
  checked: false,
  disabled: false,
  content: null,
}

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  className: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  content: PropTypes.any,
}

const RadioGroup = ({
  name,
  options,
  value,
  onChange,
  id,
  disabled,
  config,
  ...props
}) => {
  const { maxWidth } = config || {}
  return (
    <Container disabled={disabled} maxWidth={maxWidth} {...props}>
      {options.map((item) => (
        <Label
          htmlFor={id || name}
          key={item.value}
          isChecked={value === item.value}
        >
          <span className="label">{item.label}</span>
          <RadioInput
            name={id || name}
            type="radio"
            value={item.value}
            id={name}
            checked={value === item.value}
            onChange={(e) => onChange({ name, value: e.target.value })}
          />
        </Label>
      ))}
    </Container>
  )
}

RadioGroup.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
}

RadioGroup.defaultProps = {
  options: [],
  onChange: () => {},
}

export { RadioGroup }
