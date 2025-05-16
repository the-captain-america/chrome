import React from 'react'
import PropTypes from 'prop-types'
import {
  ToggleWrapper,
  ToggleLabel,
  ToggleTitle,
  ToggleContent,
  ToggleCheckbox,
} from './Toggle.styled'

const Toggle = ({
  isActive = false,
  id = '',
  className = '',
  label = '',
  onChange = () => {},
  disabled,
  name,
  ml,
  mr,
  extend,
  ...props
}) => {
  const handleChange = (e) => {
    const value = e.target.checked
    onChange({ name, value })
  }
  return (
    <ToggleWrapper
      className={className}
      id={id}
      $ml={ml}
      $mr={mr}
      extend={extend}
      {...props}
    >
      {label && (
        <ToggleTitle className={disabled ? 'label is-disabled' : 'label'}>
          {label}
        </ToggleTitle>
      )}
      <ToggleContent>
        <ToggleCheckbox
          checked={isActive}
          onChange={(e) => handleChange(e)}
          type="checkbox"
        />
        <ToggleLabel className="ToggleLabel" htmlFor="checkbox" />
      </ToggleContent>
    </ToggleWrapper>
  )
}

Toggle.propTypes = {
  isActive: PropTypes.bool,
  className: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export { Toggle }
