import React from 'react'
import PropTypes from 'prop-types'
import { keys } from 'ramda'
import { ToggleSwitchContainer, Label } from './ToggleButton.styled'
import { FieldGroup } from '@common/FieldGroup'

const getOptionType = (options) => {
  if (options.isArray || options.length) return options
  return keys(options)
}

const ToggleButton = ({
  onChange,
  active,
  label,
  name,
  options: rawOptions = [],
  mt,
  mb,
  ...props
}) => {
  const options = getOptionType(rawOptions)
  if (!options || !options.length) return null

  const [primaryOption, secondaryOption] = options.reverse()

  const handleChange = (e) => {
    const isChecked = e.target.checked
    onChange({ name, value: isChecked })
  }

  return (
    <FieldGroup variant="ELEMENT" mb={mb} mt={mt}>
      {label && <Label>{label}</Label>}
      <ToggleSwitchContainer
        isActive={active}
        text={secondaryOption}
        {...props}
      >
        <div className="switch-button">
          <input
            checked={active}
            tabIndex={0}
            onChange={handleChange}
            className="switch-button-checkbox"
            type="checkbox"
          />
          <label className="switch-button-label">
            <span className="switch-button-label-span">{primaryOption}</span>
          </label>
        </div>
      </ToggleSwitchContainer>
    </FieldGroup>
  )
}

ToggleButton.defaultProps = {
  options: [],
  mt: 0,
  callback: () => {},
  label: 'Options',
}

ToggleButton.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  mt: PropTypes.number,
  callback: PropTypes.func,
  label: PropTypes.string,
}

export { ToggleButton }
