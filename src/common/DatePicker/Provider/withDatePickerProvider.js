import React, { forwardRef } from 'react'
import DateProvider from './DateProvider'

const withDatePickerProvider = (Component) => {
  const WrappedComponent = (props, ref) => {
    const { initialState, ...rest } = props
    return (
      <DateProvider initialState={initialState}>
        <Component {...rest} ref={ref} />
      </DateProvider>
    )
  }
  return forwardRef(WrappedComponent)
}

export default withDatePickerProvider
