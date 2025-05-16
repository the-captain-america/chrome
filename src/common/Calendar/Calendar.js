import React, { useEffect, useState } from 'react'
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  subMonths,
  addMonths,
} from 'date-fns'
import { format as formatFp } from 'date-fns/fp'
import { Icon } from '@common/Icon'
import ClickOutside from '@hooks/useClickOutside'

import { Button } from '@common/Button'

import {
  CalendarContainer,
  CalendarDateView,
  DayWeekNames,
  CalendarStyled,
  CalendarControls,
  CalendarPosition,
  Label,
} from './Calendar.styled'
import { IconContainer } from '@common/IconContainer'
import { usePrevious } from '@hooks/usePrevious'
import { useEscape } from '@hooks/useEscape'

const buttonStyle = {
  padding: '6px',
  marginLeft: '4px',
  border: '1px solid #e0e0e0',
  background: 'transparent',
  borderRadius: '4px',
}

const CurrentWeekDates = ({
  date,
  selectedDate,
  displayDate,
  onSelect = () => {},
}) => {
  let currentDate = date
  const week = []

  for (let day = 0; day < 7; day++) {
    const cloneDate = currentDate
    week.push(
      <div
        key={`day-${day}`}
        className={`day ${
          isSameMonth(currentDate, displayDate) ? '' : 'inactiveDay'
        } ${isSameDay(currentDate, selectedDate) ? 'selectedDay' : ''}
        ${isSameDay(currentDate, new Date()) ? 'today' : ''}`}
        onClick={() => onSelect(cloneDate)}
      >
        {format(currentDate, 'd')}
      </div>,
    )
    currentDate = addDays(currentDate, 1)
  }
  return <>{week}</>
}

const Calendar = ({
  callback = () => {},
  value,
  name = '',
  label = '',
  onClose = () => {},
  withFormat = false,
  mt,
  mb,
  ...props
}) => {
  const hasValue = Boolean(value)
  const dateToHydrate = value ? value : new Date()
  const prevValue = usePrevious(value)

  const [state, setState] = useState({
    displayDate: new Date(dateToHydrate),
    selectedDate: new Date(dateToHydrate),
    isActive: false,
  })

  useEffect(() => {
    if (prevValue === value) return
    const dateToHydrate = value ? new Date(value) : new Date()
    setState((state) => ({
      ...state,
      selectedDate: dateToHydrate,
      displayDate: dateToHydrate,
    }))
  }, [value])

  const onSelect = (value) => {
    setState((state) => ({ ...state, selectedDate: value }))

    const date = formatFp('yyyy-MM-dd')(value)
    if (withFormat) {
      return callback({ name, value: date })
    }
    callback({ name, value: value })
  }

  const onPressToday = () =>
    setState((state) => ({
      ...state,
      selectedDate: new Date(),
      displayDate: new Date(),
    }))

  const onNext = () =>
    setState((state) => ({
      ...state,
      displayDate: addMonths(state.displayDate, 1),
    }))

  const onBack = () =>
    setState((state) => ({
      ...state,
      displayDate: subMonths(state.displayDate, 1),
    }))

  const header = (
    <div className="header">
      <div className="todayButton" onClick={onPressToday}>
        Today
      </div>
      <Button style={buttonStyle} onClick={onBack}>
        <Icon name="CHEVRON" fill="white" rotate={-90} size={24} />
      </Button>
      <Button style={buttonStyle} onClick={onNext}>
        <Icon name="CHEVRON" fill="white" rotate={90} size={24} />
      </Button>
      <h2 className="currentMonth">{format(state.displayDate, 'MMMM yyyy')}</h2>
    </div>
  )

  const getWeekDaysNames = () => {
    const weekStartDate = startOfWeek(state.displayDate)
    const weekDays = []

    for (let day = 0; day < 7; day++) {
      weekDays.push(
        <DayWeekNames className="day weekNames" key={`day-${day}`}>
          {format(addDays(weekStartDate, day), 'E')}
        </DayWeekNames>,
      )
    }
    return <div className="weekContainer">{weekDays}</div>
  }

  const getDates = () => {
    const startOfTheSelectedMonth = startOfMonth(state.displayDate)
    const endOfTheSelectedMonth = endOfMonth(state.displayDate)
    const startDate = startOfWeek(startOfTheSelectedMonth)
    const endDate = endOfWeek(endOfTheSelectedMonth)

    let currentDate = startDate

    const allWeeks = []

    while (currentDate <= endDate) {
      allWeeks.push(
        <React.Fragment key={currentDate}>
          <CurrentWeekDates
            date={currentDate}
            selectedDate={state.selectedDate}
            displayDate={state.displayDate}
            onSelect={onSelect}
          />
        </React.Fragment>,
      )
      currentDate = addDays(currentDate, 7)
    }

    return <div className="weekContainer">{allWeeks}</div>
  }

  const handleClose = () => {
    setState((state) => ({ ...state, isActive: false }))
  }
  const handleConfirm = (e) => {
    e.stopPropagation()
    setState((state) => ({ ...state, isActive: false }))
  }

  const handleOpen = (e) => {
    e.stopPropagation()
    setState((state) => ({ ...state, isActive: true }))
  }
  const handleCancel = (e) => {
    e.stopPropagation()
    setState((state) => ({ ...state, isActive: false }))
  }

  useEscape(() => {
    setState((state) => ({ ...state, isActive: false }))
  })

  return (
    <ClickOutside mb={mb} mt={mt} callback={handleClose}>
      <Label>{label ? label : `Select Date`}</Label>
      <CalendarContainer mt={8} onClick={(e) => handleOpen(e)}>
        <CalendarDateView isActive={state.isActive}>
          {!hasValue ? (
            <span className="error" onClick={(e) => handleOpen(e)}>
              --/--/----
            </span>
          ) : (
            <span onClick={(e) => handleOpen(e)}>
              {formatFp('dd/MM/yyyy')(state.selectedDate)}
            </span>
          )}

          <IconContainer
            className="IconContainer"
            onClick={(e) => handleOpen(e)}
            style={{ cursor: 'pointer' }}
          >
            <Icon name="CALENDAR" size={20} />
          </IconContainer>
        </CalendarDateView>

        {state.isActive && (
          <CalendarPosition {...props}>
            <CalendarStyled className="calendar">
              {header}
              {getWeekDaysNames()}
              {getDates()}
            </CalendarStyled>
            <CalendarControls>
              <Button variant="red" onClick={handleCancel}>
                <span>Cancel</span>
              </Button>
              <Button variant="green" ml={5} onClick={handleConfirm}>
                <span>Confirm</span>
              </Button>
            </CalendarControls>
          </CalendarPosition>
        )}
      </CalendarContainer>
    </ClickOutside>
  )
}

export { Calendar }
