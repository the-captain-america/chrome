import React, { useMemo, createContext, useReducer } from 'react'
import selectedDateReducer from './selectedDateReducer'

export const DateContext = createContext()

const DateProvider = ({ children, initialState = {} }) => {
  const initialReducerState = useMemo(
    () => ({
      selectedDate: null,
      focusedDate: new Date(),
      error: false,
      id: null,
      modal: false,
      inputValue: '',
      config: {},
      value: null,
      ...initialState,
    }),
    [initialState],
  )

  const [state, dispatch] = useReducer(selectedDateReducer, initialReducerState)

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return (
    <DateContext.Provider value={contextValue}>{children}</DateContext.Provider>
  )
}

export default DateProvider
