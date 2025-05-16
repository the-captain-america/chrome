import React, { createContext, useContext, useReducer, useMemo } from 'react'

const initialState = { isOpen: false }

const dialogReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_DIALOG':
      return { ...state, isOpen: true }
    case 'CLOSE_DIALOG':
      return { ...state, isOpen: false }
    case 'TOGGLE_DIALOG':
      return { ...state, isOpen: !state.isOpen }
    default:
      return state
  }
}

const DialogContext = createContext()

export const DialogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dialogReducer, initialState)

  const openDialog = () => dispatch({ type: 'OPEN_DIALOG' })
  const closeDialog = () => dispatch({ type: 'CLOSE_DIALOG' })
  const toggleDialog = () => dispatch({ type: 'TOGGLE_DIALOG' })

  const contextValue = useMemo(
    () => ({ isOpen: state.isOpen, openDialog, closeDialog, toggleDialog }),
    [state.isOpen],
  )

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
    </DialogContext.Provider>
  )
}

// Custom Hook to use dialog context
export const useDialog = () => {
  const context = useContext(DialogContext)
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider')
  }
  return context
}
