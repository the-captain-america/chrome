import React, { forwardRef } from 'react'
import { format } from 'date-fns'
import useCalendarDays from '../useCalendarDays'
import { useSelectedDate } from '../Provider'
import { CalendarDay } from './Table.styled'

const TableBody = forwardRef(({ callback = () => {} }, ref) => {
  const {
    state: { focusedDate, selectedDate },
  } = useSelectedDate()
  const days = useCalendarDays(focusedDate)
  return (
    <tbody tabIndex={-1}>
      {Array.from({ length: Math.ceil(days.length / 7) }).map((_, rowIndex) => (
        <tr key={rowIndex}>
          {days.slice(rowIndex * 7, rowIndex * 7 + 7).map((day, index) => {
            const isCurrentMonth = day.getMonth() === focusedDate.getMonth()
            const isFocused = day.toDateString() === focusedDate.toDateString()
            const isSelected =
              selectedDate && day.toDateString() === selectedDate.toDateString()
            const isToday = day.toDateString() === new Date().toDateString()

            return (
              <CalendarDay
                key={index}
                ref={ref.current[format(day, 'yyyy-MM-dd')]}
                tabIndex={isFocused && isCurrentMonth ? 0 : -1}
                data-date={format(day, 'yyyy-MM-dd')}
                onClick={() => callback(day)}
                {...(isToday && { 'aria-current': 'date' })}
                {...(isSelected && {
                  'aria-selected': true,
                  'data-selected': true,
                })}
                {...(isFocused && { 'data-focused': true })}
                aria-label={format(day, 'd MMMM yyyy, EEEE')}
              >
                {day.getDate()}
              </CalendarDay>
            )
          })}
        </tr>
      ))}
    </tbody>
  )
})

export default TableBody
