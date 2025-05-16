import React, { createContext, useContext, useState, useEffect } from 'react'

const ErrorContext = createContext()

const getFirstSortedErrorKey = (errors, sortOrder = []) => {
  const sortedErrorKeys = sortOrder.filter((key) => key in errors)

  const extraErrorKeys = Object.keys(errors).filter((key) => !sortOrder.includes(key))
  const allErrorKeys = [...sortedErrorKeys, ...extraErrorKeys]
  return allErrorKeys.length > 0 ? allErrorKeys[0] : null
}

const ErrorProvider = ({ children, errors, sortBy = [] }) => {
  const [firstErrorKey, setFirstErrorKey] = useState(null)
  const [shouldFocus, setShouldFocus] = useState(false)

  useEffect(() => {
    if (!errors || Object.keys(errors).length === 0) {
      // Exit gracefully if errors is empty or null
      setFirstErrorKey(null)
      return
    }

    const firstErrorKey = getFirstSortedErrorKey(errors, sortBy)
    setFirstErrorKey(firstErrorKey)
  }, [errors])

  const isChildrenFn = typeof children === 'function'

  return (
    <ErrorContext.Provider value={{ firstErrorKey, setShouldFocus, shouldFocus }}>
      {isChildrenFn ? children({ firstErrorKey, setShouldFocus, shouldFocus }) : children}
    </ErrorContext.Provider>
  )
}

const useErrorContext = () => useContext(ErrorContext)

const withErrorContext = (WrappedComponent) => (props) => {
  const { firstErrorKey, shouldFocus, setShouldFocus } = useErrorContext()

  return (
    <WrappedComponent
      firstErrorKey={firstErrorKey}
      shouldFocus={shouldFocus}
      setShouldFocus={setShouldFocus}
      {...props}
    />
  )
}

export { ErrorProvider, useErrorContext, withErrorContext }
