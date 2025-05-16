import { useState, useEffect } from 'react'
import { sizes } from '@common/Theme'

// Hook
const useWindowSize = (delay = 200) => {
  const isClient = typeof window === 'object'

  const getSize = () => ({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  })

  const getCategory = (width) => {
    if (!width) return undefined
    if (window.matchMedia(sizes.xl).matches) return 'xl'
    if (window.matchMedia(sizes.lg).matches) return 'lg'
    if (window.matchMedia(sizes.md).matches) return 'md'
    if (window.matchMedia(sizes.sm).matches) return 'sm'
    if (window.matchMedia(sizes.xs).matches) return 'xs'
    return 'xs'
  }

  const [windowSize, setWindowSize] = useState({
    ...getSize(),
    category: getCategory(isClient ? window.innerWidth : undefined),
  })

  useEffect(() => {
    if (!isClient) {
      return
    }

    let timeoutId
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        const newSize = getSize()
        setWindowSize({
          ...newSize,
          category: getCategory(newSize.width),
        })
      }, delay)
    }

    window.addEventListener('resize', handleResize)
    // Call handleResize to set the initial size
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timeoutId)
    }
  }, [isClient, delay])

  return windowSize
}

export { useWindowSize }
