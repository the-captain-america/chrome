import { useEffect } from 'react'

const useEscapeKey = (ref, onEscape) => {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (ref.current && ref.current.contains(document.activeElement)) {
          event.preventDefault()
          // event.stopPropagation()
          onEscape()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [ref, onEscape])
}

export default useEscapeKey
