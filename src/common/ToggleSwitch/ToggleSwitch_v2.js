import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Switch, SwitchGroup, Label } from './ToggleSwitch.styled'
import { FieldGroup } from '@common/FieldGroup'
import { usePrevious } from '@hooks/usePrevious'

const updateItems = (id, items = []) =>
  items.map((item) => {
    if (item.id === id) {
      return { ...item, active: true }
    }
    return { ...item, active: false }
  })

const initialiseOptions = (items = []) =>
  items.map((item, index) => {
    if (index === 0) {
      return { ...item, active: true }
    }
    return { ...item, active: false }
  })

const convertOptions = (options) =>
  options.map((option, index) => {
    return {
      id: `${option.id}-${index}`,
      label: option,
      active: false,
    }
  })

const validateOptions = (options, defaultOptions) => {
  if (!!options || !options.length) return defaultOptions
  if (!options[0].id || !options[0].label) {
    return convertOptions(options)
  }
  return defaultOptions
}

const defaultOptions = [
  { id: '1', label: 'Yes', active: true },
  { id: '2', label: 'No', active: false },
]

const getActiveById = (id, options) => {
  if (!options || !options.length) return null
  const result = options.find((item) => item.id === id)
  if (!result) return null
}

const ToggleSwitch = ({ onChange, label, name, active, options, mt, mb }) => {
  const data = initialiseOptions(validateOptions(options, defaultOptions))
  const [state, setState] = useState(data)

  const prevOptions = usePrevious(options)
  const prevActive = usePrevious(active)

  const onSelect = (item) => {
    const value = item.id
    onChange({ name, value })
    setState(updateItems(item.id, state))
  }

  useEffect(() => {
    if (options !== prevOptions || active !== prevActive) {
      if (
        !active ||
        typeof active !== 'string' ||
        getActiveById(active, options) === null
      ) {
        setState(validateOptions(options, defaultOptions))
        return
      }
      setState(updateItems(active, options))
      return
    }
  }, [active])

  const renderItems = () => {
    if (!state || !state.length) return null
    const result = state.map((item, index) => (
      <Switch
        key={`${item.id}-${index}`}
        isActive={item.active}
        className="switch-button"
        onClick={() => onSelect(item)}
      >
        {item.label && <span className="label">{item.label || 'Item'}</span>}
      </Switch>
    ))
    return <SwitchGroup>{result}</SwitchGroup>
  }

  return (
    <FieldGroup variant="ELEMENT" mb={mb} mt={mt}>
      {label && <Label>{label}</Label>}
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
