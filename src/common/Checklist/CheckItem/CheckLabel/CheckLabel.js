import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { useOnClickOutside } from '@hooks/useOnClickOutside'
import PropTypes from 'prop-types'
import { useEscape } from '@hooks/useEscape'
import {
  EditInputGroup,
  EditInputField,
  EditContainer,
  EditHeading,
} from './CheckLabel.styled'

const InputField = forwardRef(
  ({ onChange, value, size, focus, id, width, ...props }, ref) => (
    <EditInputGroup className="EditInputGroup">
      <EditInputField
        className="EditInputField"
        type="text"
        ref={ref}
        id={id}
        onChange={onChange}
        value={value}
        focus={focus}
        width={width}
        size={size}
        {...props}
      />
    </EditInputGroup>
  ),
)

const keyCodes = {
  ENTER: 'Enter',
}

const CHECKITEM_LABEL_ACTIONS = {
  CHANGE_VALUE: 'CHANGE_VALUE',
  CHANGE_MODE: 'CHANGE_MODE',
}

const CheckLabel = ({
  label = '',
  callback = () => {},
  defaultValue = '',
  isActive,
  id,
  config = {},
}) => {
  const refClickOutside = useRef()
  const ref = useRef()
  const [isEditMode, setEditMode] = useState(false)
  const [state, setState] = useState({ value: '' })
  const inputId = `Input_${id}`
  const handleValue = (value) => {
    if (!id) return
    callback({ action: CHECKITEM_LABEL_ACTIONS.CHANGE_VALUE, id, value: value })
  }

  const handleValidation = (arg) => {
    if (!arg || arg.length <= 0) {
      handleValue(defaultValue)
      return
    }
    handleValue(arg)
  }

  const onChange = (e) => {
    const { value } = e.target
    setState((state) => ({ ...state, value }))
  }

  const onFocus = () => {
    if (ref.current) {
    }
  }

  const handleFocus = () => {
    setEditMode(true)
    onFocus()
  }

  useEffect(() => {
    if (!isActive) {
      setEditMode(false)
      return
    }
    handleFocus()
  }, [isActive])

  const onKeyPress = (e) => {
    const key = e.keyCode || e.charCode
    if (key === keyCodes.ENTER || key === 13) {
      setEditMode(false)
      handleValidation(state.value)
      callback({
        action: CHECKITEM_LABEL_ACTIONS.CHANGE_MODE,
        id,
        value: false,
      })
    }
  }

  useOnClickOutside(refClickOutside, () => {
    if (!isEditMode) return
    setEditMode(false)
    callback({ action: CHECKITEM_LABEL_ACTIONS.CHANGE_MODE, id, value: false })
    handleValidation(state.value)
  })

  // This edit mode is triggered by the user pressing the ESC key (but  will only work if the user is in edit mode >> not sure)
  useEscape(() => {
    if (!isEditMode) return
    callback({ action: CHECKITEM_LABEL_ACTIONS.CHANGE_MODE, id, value: false })
    setEditMode(false)
  })

  useEffect(() => {
    onFocus()
    if (label !== state.value) {
      setState((state) => ({ ...state, value: label }))
    }
    // eslint-disable-next-line
  }, [label])

  return (
    <EditContainer tabindex={1} ref={refClickOutside}>
      {isEditMode ? (
        <InputField
          value={state.value}
          onChange={onChange}
          maxLength={config.maxLength || 90}
          onFocus={onFocus}
          onKeyPress={onKeyPress}
          focus={isEditMode}
          size={config.size}
          color={config.color}
          id={inputId}
          ref={ref}
          lineHeight={config.lineHeight}
          width={config.width}
        />
      ) : (
        <EditHeading
          size={config.size}
          lineHeight={config.lineHeight}
          width={config.width}
          color={config.color}
          className="EditHeading"
        >
          {state.value}
        </EditHeading>
      )}
    </EditContainer>
  )
}

CheckLabel.defaultProps = {
  isActive: false,
  config: { size: 16, color: 'white', lineHeight: 20 },
}

CheckLabel.propTypes = {
  label: PropTypes.string,
  isActive: PropTypes.bool,
  id: PropTypes.string.isRequired,
}

export { CheckLabel }
