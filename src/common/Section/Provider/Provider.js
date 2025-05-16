import React, { useReducer, useMemo } from 'react'

import reducer, { InitialState } from './Reducer'

import Context from './Context'

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState)

  const context = useMemo(() => [state, dispatch], [state, dispatch])

  return <Context.Provider value={context}>{children}</Context.Provider>
}

export default Provider
