import { useEffect, useState, useRef, useCallback } from 'react'

const useHorizontalResize = (initialWidth = 200) => {
  const [width, setWidth] = useState(initialWidth)
  const resizableRef = useRef(null)
  const isResizing = useRef(false)

  const handleMouseMove = useCallback((e) => {
    if (isResizing.current) {
      const newWidth =
        e.clientX - resizableRef.current.getBoundingClientRect().left
      setWidth(newWidth > 0 ? newWidth : 0) // Ensure the width is not negative
    }
  }, [])

  const handleMouseUp = useCallback(() => {
    if (isResizing.current) {
      isResizing.current = false
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleMouseMove])

  const startResizing = () => {
    isResizing.current = true
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleMouseMove, handleMouseUp])

  return {
    width,
    resizableRef,
    startResizing,
  }
}

export { useHorizontalResize }
