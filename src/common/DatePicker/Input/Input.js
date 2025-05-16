import React, { forwardRef, useEffect } from 'react'
import { InputElement } from './Input.styled'
import useSelectedDate from '../useSelectedDate'
import { SET_INPUT_VALUE, SET_MODAL_CLOSE, SET_PREVIEW_DATE, SET_SELECTED_DATE } from '../Provider/DateTypes'
import { INVALID, UPDATE } from '../Provider/DateActions'
import { parse, isValid } from 'date-fns'

const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/

const removeTrailingSpaces = (str) => str.replaceAll(' ', '')

const Input = forwardRef(({ name, callback }, ref) => {
  const {
    state: { error, id, config, inputValue },
    dispatch,
  } = useSelectedDate()

  const closeModal = () => {
    dispatch({ type: SET_MODAL_CLOSE })
  }

  const setInputValue = (value) => {
    dispatch({ type: SET_INPUT_VALUE, payload: value })
  }

  const handleInputChange = (e) => {
    const contrivedValue = removeTrailingSpaces(e.target.value)
    setInputValue(contrivedValue)

    if (!contrivedValue) {
      dispatch({ type: SET_SELECTED_DATE, payload: null })
      dispatch({ type: SET_PREVIEW_DATE, payload: new Date() })
      callback({ action: UPDATE, value: null })
      return
    }
    if (!dateRegex.test(contrivedValue)) {
      dispatch({ type: SET_SELECTED_DATE, payload: null })
      dispatch({ type: SET_PREVIEW_DATE, payload: new Date() })
      callback({ action: INVALID, value: null })
      return
    }

    const parsedDate = parse(contrivedValue, config?.format, new Date())

    if (parsedDate && isValid(parsedDate)) {
      dispatch({ type: SET_SELECTED_DATE, payload: parsedDate })
      dispatch({ type: SET_PREVIEW_DATE, payload: parsedDate })
      callback({ action: UPDATE, value: parsedDate })
    } else {
      dispatch({ type: SET_SELECTED_DATE, payload: null })
      dispatch({ type: SET_PREVIEW_DATE, payload: new Date() })
      callback({ action: INVALID, value: null })
    }
  }

  return (
    <InputElement
      ref={ref}
      type="text"
      role="textbox"
      name={name}
      value={inputValue}
      onChange={handleInputChange}
      placeholder={config?.placeholder}
      onClick={closeModal}
      className="datepicker-input"
      aria-labelledby={`${id}-label`}
      id={`${id}-input`}
      aria-describedby={`${id}-description`}
      error={error}
    />
  )
})

export default Input
