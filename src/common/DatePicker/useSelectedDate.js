import { useContext } from 'react'
import { DateContext } from './Provider/DateProvider'

export const useSelectedDate = () => {
  const context = useContext(DateContext)
  if (!context) {
    throw new Error('useSelectedDate must be used within a DateProvider')
  }
  return context
}

export default useSelectedDate
