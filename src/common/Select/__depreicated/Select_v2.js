import React, { useRef, useState, useCallback, useEffect } from 'react'

import { Icon } from '@common/Icon'
import { prop, propEq, find } from 'ramda'
import PropTypes from 'prop-types'
import { FieldGroup } from '@common/FieldGroup'
import ClickOutside from '@hooks/useClickOutside'
import {
  SelectContainerGroup,
  SelectStyle,
  SelectOption,
  Chevron,
  SelectedItem,
  SelectIcon,
  SelectOuter,
  SelectOuterContainer,
  SelectContainer,
  SelectControl,
  SelectLabel,
  Button,
} from '../Select.styled'
import { Checklist } from '@common/Checklist'
import { isEitherEmpty } from '@utils/ramda'
import { StateView } from '@common/StateView'
import { Col, Row } from '@common/Grid'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 16px;
`

const defaultOption = { label: 'Select', value: '---', index: -1 }

/** getDefault was made with the intention to solve the need of the `<Select />`
 * component when a `defaultValue` is provided.
 * Concerns
 * - 1. Question: Why can we not use the `value` property instead and use this to default the value?
 * - 1. Answer: The `<Select />` field will want to be provded a lsit of options to render, if none is provided then
 * we run into a problem where it cannot show something like `None` etc. Also, what will the parent component recieve on the callback of this value?
 */

const getDefault =
  (defaultValue = '') =>
  (options = []) => {
    const foundOption = find(propEq('value', defaultValue))(options)
    const hasMatch = Boolean(foundOption)
    if (!hasMatch) return defaultOption
    return foundOption
  }

/* Select useEffect 
  defaultValue: Lookup value within provided options array.  If option is present via the value then we default select that option.
**/

const Select = ({
  callback,
  options,
  disabled,
  defaultValue,
  placeholder,
  label,
  mt,
  name,
  mb,
  config,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [state, setState] = useState([
    {
      label: 'Select',
      value: '---',
      index: -1,
      sequence: -1,
    },
  ])
  const [focus, setFocus] = useState(false)
  const [disabledState, setDisabled] = useState(false)
  const [localOptions, setLocalOptions] = useState(options)

  const { layout: layoutStyle } = prop('config')(props) || {}

  const selectRef = useRef(null)

  const handleOpen = () => {
    if (disabledState) return
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
    setFocus(false)
  }

  const handleSelected = (item) => {
    const selectedOption = getDefault(item.value)(options)
    setState(selectedOption)
    callback(selectedOption)
    setIsOpen(false)
  }

  useEffect(() => {
    if (isEitherEmpty(options)) return
    setLocalOptions(options)
  }, [options])

  useEffect(() => {
    if (defaultValue === state.value) {
      // console.warn('State value is the same as defaultValue');
      return
    }
    const option = getDefault(defaultValue)(options)
    setState(option)
    callback({ data: option, options: localOptions, name })

    // eslint-disable-next-line
  }, [defaultValue])

  const onEnter = useCallback((event) => {
    if (event.keyCode === 13) {
      handleOpen()
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (!focus) return
    document.addEventListener('keydown', onEnter, false)
    return () => {
      document.removeEventListener('keydown', onEnter, false)
    }
    // eslint-disable-next-line
  }, [focus])

  useEffect(() => {
    if (Boolean(disabled)) {
      setDisabled(disabled)
      return
    }
    return () => {
      setDisabled(false)
    }
  }, [disabled])

  const renderItems = (items = []) => {
    if (isEitherEmpty(items)) {
      return (
        <SelectOption isActive onClick={() => handleSelected(defaultOption)}>
          <span className="text">None</span>
          <SelectIcon>
            <Icon name="CHECKMARK" size={20} />
          </SelectIcon>
        </SelectOption>
      )
    }
    return items.map((item) => (
      <SelectOption
        key={item.label}
        tabIndex={1}
        isActive={item.value === state.value}
        onClick={() => handleSelected(item)}
      >
        <span className="text">{item.label}</span>

        {item.value === state.value && (
          <SelectIcon>
            <Icon name="CHECKMARK" size={20} />
          </SelectIcon>
        )}
      </SelectOption>
    ))
  }

  return (
    <FieldGroup
      variant={label && label.length ? 'ELEMENT' : 'FRAGMENT'}
      mb={mb}
      mt={mt}
    >
      {label && <SelectLabel>{label}</SelectLabel>}
      <SelectStyle style={layoutStyle} isActive={isOpen} {...props}>
        <ClickOutside callback={handleClose}>
          <SelectContainer isActive={isOpen}>
            <SelectedItem
              ref={selectRef}
              isDisabled={disabledState}
              isActive={state.value !== ''}
              className={state.value !== '' ? 'is-active' : ''}
              tabIndex={(isOpen && -1) || disabledState ? -1 : 0}
              name="selected-item"
              onClick={handleOpen}
            >
              {state.label && <span className="text">{state.label}</span>}
              <Chevron className="icon">
                <Icon rotate={isOpen ? 0 : 180} name="CHEVRON" size={20} />
              </Chevron>
            </SelectedItem>
            {isOpen && (
              <SelectOuterContainer>
                <SelectOuter>
                  <SelectContainerGroup>
                    {renderItems(localOptions)}
                  </SelectContainerGroup>
                </SelectOuter>
              </SelectOuterContainer>
            )}
          </SelectContainer>
        </ClickOutside>
      </SelectStyle>
    </FieldGroup>
  )
}

Select.defaultProps = {
  config: {
    menu: true,
  },
  disabled: false,
  label: '',
  placeholder: '',
  options: [],
  defaultValue: '',
  config: {},
}

Select.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
      index: PropTypes.number,
      sequence: PropTypes.number,
    }),
  ),
  callback: PropTypes.func.isRequired,
  label: PropTypes.string,
  config: PropTypes.shape({
    menu: PropTypes.bool,
  }),
}

export { Select }
