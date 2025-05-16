import React, { useReducer, useMemo } from 'react'
import DropdownReducer from './DropdownReducer'
import initialState from './initialState'
import DropdownContext from './DropdownContext'

const DropdownProvider = ({
  children,
  initialState: initialStateProp = {},
}) => {
  const [state, dispatch] = useReducer(DropdownReducer, {
    ...initialState,
    ...initialStateProp,
  })

  const context = useMemo(() => [state, dispatch], [state, dispatch])

  return (
    <DropdownContext.Provider value={context}>
      {children}
    </DropdownContext.Provider>
  )
}

export default DropdownProvider
