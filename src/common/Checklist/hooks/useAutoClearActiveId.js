import { useEffect } from 'react'

function useAutoClearActiveId(activeId, setState, delay) {
  useEffect(() => {
    if (!activeId) return

    const timeoutId = setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        activeId: null,
      }))
    }, delay)

    return () => clearTimeout(timeoutId)
  }, [activeId])
}

export default useAutoClearActiveId
