import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Input } from '@common/Input'
import { Col, Row } from '@common/Grid'
import { ErrorList } from '@common/ErrorList'
import { Calendar } from '@common/Calendar'

const config = {
  localStorageName: 'DateController',
  defaultState: {
    startDate: new Date(),
    endDate: new Date(),
    startTime: '00:00',
    endTime: '00:00',
  },
}

const errorOptions = [
  {
    name: 'label',
    message: 'Please enter a label.',
  },
  {
    name: 'startDate',
    message: 'Please add a start date',
  },
  {
    name: 'startDateIsAfterEndDate',
    message: 'Please make sure the start date is before the end date',
  },
  {
    name: 'endDateIsBeforeStartDate',
    message: 'Please make sure the end date is after the start date',
  },
  {
    name: 'startTime',
    message: 'Please enter a start time',
  },
  {
    name: 'endTime',
    message: 'Please enter a end time',
  },
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const DateController = ({ callback = () => {} }) => {
  const [state, setState] = useState({ ...config.defaultState })
  const [errors, setErrors] = useState([])

  const handleCalendar = ({ name, value }) => {
    setState((state) => ({ ...state, [name]: value }))
  }

  const onChange = (e) => {
    const { value, name } = e.target
    setState((state) => ({ ...state, [name]: value }))
  }

  useEffect(() => {
    if (state.startDate > state.endDate) {
      setErrors(['startDateIsAfterEndDate', 'endDateIsBeforeStartDate'])
      return
    }
    if (state.startDate < state.endDate) {
      setErrors([])
      return
    }
    if (
      !state.startDate ||
      !state.startDate.length ||
      !state.endDate ||
      !state.endDate.length
    ) {
      setErrors(['startDate'])
    }
    if (state.startDate) {
      setErrors([])
    }
  }, [state.startDate, state.endDate])

  const onSubmit = () => {
    callback({ action: 'UPDATE', value: state })
  }

  useEffect(() => {
    onSubmit()
  }, [state.startDate, state.endDate, state.startTime, state.endTime])

  const onRemoveError = (name) => {
    setErrors(errors.filter((t) => t.toUpperCase() !== name.toUpperCase()))
  }

  return (
    <Container>
      <Row mt={16}>
        <Col>
          <Calendar
            fromTop
            mt={16}
            label="Start Date"
            name="startDate"
            value={state.startDate}
            callback={handleCalendar}
          />
        </Col>
        <Col>
          <Calendar
            fromTop
            mt={16}
            label="End Date"
            name="endDate"
            value={state.endDate}
            callback={handleCalendar}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Input
            type="time"
            label="Start Time"
            name="startTime"
            mt={16}
            isTime
            value={state.startTime}
            onChange={onChange}
          />
        </Col>
        <Col>
          <Input
            type="time"
            label="End Time"
            name="endTime"
            isTime
            mt={16}
            value={state.endTime}
            onChange={onChange}
          />
        </Col>
      </Row>
      <ErrorList
        mt={16}
        callback={onRemoveError}
        needles={errors}
        haystack={errorOptions}
      />
    </Container>
  )
}

export { DateController }
