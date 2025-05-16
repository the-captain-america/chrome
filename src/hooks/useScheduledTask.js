import { useState, useEffect } from 'react'
import { isBefore, addDays, setHours, setMinutes } from 'date-fns'

// Map for day strings to their corresponding numbers in date-fns
const dayMap = {
  m: 1,
  t: 2,
  w: 3,
  th: 4,
  f: 5,
  s: 6,
  su: 0,
}

const useScheduledTask = ({
  time,
  days = ['m', 't', 'w', 'th', 'f'],
  enabled = true,
  resetDelay = 1,
}) => {
  const [shouldExecute, setShouldExecute] = useState(false)

  useEffect(() => {
    let executionTimeoutId
    let resetTimeoutId

    const checkAndSetNextExecution = () => {
      if (!enabled) {
        setShouldExecute(false)
        return
      }

      const [hours, minutes] = time.split(':').map(Number)
      const now = new Date()
      let targetTime = setHours(setMinutes(new Date(now), minutes), hours)

      // If target time has already passed today, schedule it for the next valid day
      if (isBefore(targetTime, now)) {
        targetTime = addDays(targetTime, 1)
      }

      // Find the next valid day
      const nextValidDay = (date) => {
        let day = date.getDay()
        while (
          !days.includes(Object.keys(dayMap).find((key) => dayMap[key] === day))
        ) {
          date = addDays(date, 1)
          day = date.getDay()
        }
        return date
      }

      targetTime = nextValidDay(targetTime)
      const delay = targetTime - now

      executionTimeoutId = setTimeout(() => {
        setShouldExecute(true)

        // Reset shouldExecute to false after resetDelay minutes
        resetTimeoutId = setTimeout(() => {
          setShouldExecute(false)
        }, resetDelay * 60 * 1000) // Convert minutes to milliseconds
      }, delay)
    }

    checkAndSetNextExecution()

    return () => {
      clearTimeout(executionTimeoutId)
      clearTimeout(resetTimeoutId)
    }
  }, [time, days, enabled, resetDelay])

  return shouldExecute
}

export default useScheduledTask
