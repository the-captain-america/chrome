import { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const usePortal = ({ children, selector }) => {
  const ref = useRef()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const getSelector = document.querySelector(selector)
    if (getSelector) {
      ref.current = getSelector
      setMounted(true)
    }
  }, [selector])

  return mounted ? createPortal(children, ref.current) : null
}

export { usePortal }
