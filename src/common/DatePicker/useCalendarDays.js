import { useMemo } from 'react'
import { startOfMonth, subDays, getDay, addDays, endOfMonth } from 'date-fns'

const useCalendarDays = (focusedDate) => {
  return useMemo(() => {
    const startOfGrid = subDays(
      startOfMonth(focusedDate),
      getDay(startOfMonth(focusedDate)),
    )
    const endOfGrid = addDays(
      endOfMonth(focusedDate),
      6 - getDay(endOfMonth(focusedDate)),
    )

    const days = []
    let currentDate = startOfGrid

    while (currentDate <= endOfGrid) {
      days.push(currentDate)
      currentDate = addDays(currentDate, 1)
    }

    return days
  }, [focusedDate])
}

export default useCalendarDays
