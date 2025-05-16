import React, { forwardRef } from 'react'
import Calendar from '../assets/Calendar'
import { Button } from './Trigger.styled'

const Trigger = forwardRef(({ onClick = () => {}, ariaLabel = '' }, ref) => (
  <Button
    ref={ref}
    type="button"
    className="datepicker-button"
    onClick={onClick}
    aria-label={ariaLabel}
  >
    <Calendar />
  </Button>
))

export default Trigger
