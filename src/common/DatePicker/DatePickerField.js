import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Error } from '@common/Error'
import DatePicker from './DatePicker'
import { INVALID, UPDATE } from './Provider/DateActions'
import { isNil, complement, path } from 'ramda'

const getIn = (original, fieldName) => path(fieldName.split('.'), original)
const isPresent = complement(isNil)

const DatePickerField = ({
  id,
  field,
  form,
  label,
  shouldFocus,
  enableTopError,
  firstErrorKey,
  setShouldFocus = () => {},
  config = {},
}) => {
  const { errors, touched, submitCount, setFieldValue } = form

  const fieldError = getIn(errors, field.name)
  const fieldTouched = getIn(touched, field.name)
  const fieldId = id || field.name
  const errorId = `${id || field.name}-error`

  const fieldSubmitted = submitCount > 0
  const hasError = fieldTouched && fieldSubmitted && isPresent(fieldError)
  const isTopError = !!firstErrorKey && firstErrorKey === field.name

  const inputRef = useRef()

  useEffect(() => {
    if (isTopError && shouldFocus && inputRef && inputRef.current) {
      inputRef.current.focus()
      setShouldFocus(false)
    }
  }, [shouldFocus, isTopError])

  const handleCallback = ({ action, value }) => {
    if (action === UPDATE) setFieldValue(field.name, value)
    if (action === INVALID) setFieldValue(field.name, INVALID)
  }

  return (
    <>
      <DatePicker
        ref={inputRef}
        name={field.name}
        label={label}
        callback={handleCallback}
        initialState={{
          value: field.value,
          error: hasError,
          id: fieldId,
          config: config,
        }}
      />
      {fieldError && fieldSubmitted && (
        <Error
          variant="warning"
          icon="WARNING"
          isTopError={enableTopError}
          mt={16}
          errorId={errorId}
        >
          {fieldError}
        </Error>
      )}
    </>
  )
}

DatePickerField.propTypes = {
  enableTopError: PropTypes.bool,
  mb: PropTypes.any,
  mt: PropTypes.any,
  id: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    value: PropTypes.any,
  }).isRequired,
  form: PropTypes.shape({
    errors: PropTypes.object,
    touched: PropTypes.object,
    submitCount: PropTypes.number,
  }).isRequired,
  placeholder: PropTypes.string,
  config: PropTypes.object,
}

export default DatePickerField
