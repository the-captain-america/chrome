import { useEffect, useCallback } from 'react'

const useEscape = (callback = () => {}, shouldExecute = true) => {
  const escapeFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      callback(event)
    }
  }, [])

  useEffect(() => {
    if (!shouldExecute) return
    document.addEventListener('keydown', escapeFunction, false)
    return () => {
      document.removeEventListener('keydown', escapeFunction, false)
    }
  }, [])

  return escapeFunction // not really necessary but whatever
}

export { useEscape }
