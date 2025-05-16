import React, { createRef, useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Switch, SwitchGroup, Label, SwitchLabel } from './ToggleSwitch.styled'
import { FieldGroup } from '@common/FieldGroup'
import { usePrevious } from '@hooks/usePrevious'

const convertOptions = (options) =>
  options.map((option, index) => {
    return {
      id: `${option.id}-${index}`,
      label: option,
    }
  })

const validateOptions = (options, defaultOptions) => {
  if (!options || !options.length) return defaultOptions
  if (!options[0].id || !options[0].label) {
    return convertOptions(options)
  }
  return defaultOptions
}

const defaultOptions = [
  { id: '1', label: 'Yes' },
  { id: '2', label: 'No' },
]

const ToggleSwitch = ({
  onChange,
  label,
  name,
  value,
  options: items,
  mt,
  mb,
}) => {
  const options = validateOptions(items, defaultOptions)
  const [active, setActive] = useState(!!value)
  const prevValue = usePrevious(value)

  const checkItemRefs = useRef([])
  checkItemRefs.current =
    !!options &&
    options.length &&
    options.map((_, index) =>
      checkItemRefs.current[index] ? checkItemRefs.current[index] : createRef(),
    )

  const getRef = (index) => {
    if (checkItemRefs && checkItemRefs.current[index]) {
      const result =
        checkItemRefs.current[index].current &&
        checkItemRefs.current[index].current.clientWidth
      return result
    }

    return false
  }

  const onSelect = () => {
    const value = !!active
    onChange({ name, value: !value })
  }

  useEffect(() => {
    if (value !== undefined) {
      setActive(value)
    }
  }, [value])

  const renderItems = () => {
    if (!options || !options.length) return null
    const result = options.map((item, index) => (
      <Switch
        key={`${item.id}-${index}`}
        className="switch-button"
        onClick={onSelect}
        ref={checkItemRefs.current[index]}
      >
        {item.label && (
          <SwitchLabel className="label">{item.label || 'Item'}</SwitchLabel>
        )}
      </Switch>
    ))
    return (
      <SwitchGroup width={getRef(1)} isActive={!active}>
        {result}
      </SwitchGroup>
    )
  }

  return (
    <FieldGroup variant="ELEMENT" mb={mb} mt={mt}>
      {label && <Label className="label">{label}</Label>}
      {renderItems()}
    </FieldGroup>
  )
}

ToggleSwitch.defaultProps = {
  options: [],
  mt: 0,
  callback: () => {},
  label: 'Options',
}

ToggleSwitch.propTypes = {
  options: PropTypes.array,
  mt: PropTypes.number,
  callback: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
}

export { ToggleSwitch }
