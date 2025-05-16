import { useEffect } from 'react'

const useDisableBodyScroll = (isExpanded) => {
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isExpanded])
}

export default useDisableBodyScroll
