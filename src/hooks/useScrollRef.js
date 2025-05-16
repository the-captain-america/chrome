import { useState, useEffect } from 'react'

const useScrollRef = (ref, debounceTime = 100) => {
  const [scrollDistance, setScrollDistance] = useState(0)

  useEffect(() => {
    let timeoutId

    const handleScroll = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        if (ref.current) {
          const { scrollTop, scrollHeight, clientHeight } = ref.current
          const currentScrollDistance = scrollHeight - clientHeight - scrollTop
          setScrollDistance(currentScrollDistance)
        }
      }, debounceTime)
    }

    if (ref.current) {
      ref.current.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('scroll', handleScroll)
      }
      clearTimeout(timeoutId)
    }
  }, [ref, debounceTime])

  return scrollDistance
}

export default useScrollRef
