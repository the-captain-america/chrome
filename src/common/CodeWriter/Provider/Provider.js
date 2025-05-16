import React, { useReducer, useMemo } from 'react'
import Reducer, { initialState } from './Reducer'
import Context from './Context'

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  const context = useMemo(() => [state, dispatch], [state, dispatch])

  return <Context.Provider value={context}>{children}</Context.Provider>
}

export default Provider
