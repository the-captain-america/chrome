import React, { forwardRef } from 'react'

import ChevronLeft from '../assets/ChevronLeft'
import ChevronRight from '../assets/ChevronRight'
import { useSelectedDate } from '../Provider'
import { format } from 'date-fns'
import {
  SET_PREVIOUS_YEAR,
  SET_NEXT_YEAR,
  SET_PREVIOUS_MONTH,
  SET_NEXT_MONTH,
} from '../Provider/DateTypes'

import { Button, Container } from './Header.styled.js'
import { Icon } from '@common/Icon'

const Header = forwardRef(({ enableYearControls = false }, ref) => {
  const {
    state: { focusedDate },
    dispatch,
  } = useSelectedDate()

  return (
    <Container ref={ref} className="calendar-controls">
      {enableYearControls && (
        <Button
          type="button"
          onClick={() => dispatch({ type: SET_PREVIOUS_YEAR })}
          aria-label="Previous year"
        >
          <ChevronLeft />
        </Button>
      )}
      <Button
        type="button"
        onClick={() => dispatch({ type: SET_PREVIOUS_MONTH })}
        id="previous-month"
        aria-label="Previous month"
      >
        <Icon name="CHEVRON" rotate={`-90`} size={24} fill={'white'} />
      </Button>
      <span className="datepicker-header" aria-live="polite">
        <time dateTime={format(focusedDate, 'MMMM yyyy')}>
          {format(focusedDate, 'MMMM yyyy')}
        </time>
      </span>
      <Button
        type="button"
        onClick={() => dispatch({ type: SET_NEXT_MONTH })}
        aria-label="Next month"
      >
        <Icon name="CHEVRON" rotate={`90`} size={24} fill={'white'} />
      </Button>
      {enableYearControls && (
        <Button
          type="button"
          onClick={() => dispatch({ type: SET_NEXT_YEAR })}
          aria-label="Next year"
        >
          <ChevronRight />
        </Button>
      )}
    </Container>
  )
})

export default Header
