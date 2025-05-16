import { useEffect } from 'react'
import { format } from 'date-fns'

const useOnStartFocus = (ref, selectedDate, isOpen) => {
  const focusElement = () => {
    if (ref.current) {
      if (selectedDate && typeof selectedDate === 'string' && selectedDate.length > 0) {
        const dayKey = selectedDate && typeof selectedDate === 'string' && format(selectedDate, 'yyyy-MM-dd')
        if (!dayKey) return
        const dayElement = ref.current[dayKey]?.current
        setTimeout(() => dayElement?.focus(), 50)
        return
      }
      const dayKey = selectedDate ? format(selectedDate, 'yyyy-MM-dd') : format(new Date(), 'yyyy-MM-dd')
      const dayElement = ref.current[dayKey]?.current
      setTimeout(() => dayElement?.focus(), 50)
    }
  }

  useEffect(() => {
    if (isOpen) focusElement()
  }, [isOpen])

  return focusElement
}

export default useOnStartFocus
