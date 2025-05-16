import React, { useState } from 'react'
import { Svg, TimerContainer, Detail, Circle } from './Timer.styled'
import { useCountDown } from '@hooks/useCountDown'
import { addMinutes } from 'date-fns'
import { colors } from '@common/Theme'
import { Icon } from '@common/Icon'

const svgTheme = {
  fillPos: colors.green,
  fillNeg: 'red',
  activePos: '#202428',
  activeNeg: 'red',
}

import styled, { css } from 'styled-components'

const Option = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: flex-start;
  padding: 16px;
  border: 1px solid #333b44;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 8px;
  width: 100px;
  border-radius: 4px;
  background: #282e32;
  position: relative;
  transition: all 0.3s ease-in-out;
  span {
    color: white;
  }
  &:first-child {
    margin-left: 0;
  }
  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    props.isActive &&
    css`
      background: ${colors.green};
      span {
        color: black;
      }
      border: 1px solid #333b44;
    `}
`

const DisplayViewer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 8px;
  p {
    margin: 0 8px 0 0;
  }
  ${(props) =>
    props.isDanger &&
    css`
      background: red;
    `}
`

const CounterViewer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const ExpiredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid grey;
  padding: 16px;
  border-radius: 4px;
  background: #282e32;
  p {
    margin: 8px 0 0 0;
    color: white;
  }
  span {
    color: white;
  }
`

const ButtonGroup = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 0;
  margin-top: 16px;
  margin-bottom: 16px;
`

const comparedSeconds = (start, end) => {
  if (!start || !end) return 0
  const startSeconds = start.getMinutes()
  const endDate = addMinutes(start, end)
  const endSeconds = endDate.getMinutes()
  const result = startSeconds - endSeconds
  return result
}

const TimerCircle = ({ percent, minutes, seconds, ...props }) => {
  const size = 64
  const result = [(percent * 31.4) / 100, '31.4'].join(',')
  // const total = comparedSeconds(new Date(), end);

  // const date = new Date();
  // const newDate = addMinutes(date, 5);
  // const getMinutes = (dateObj) =>
  //   (dateObj.getMinutes() < 10 ? '0' : '') + dateObj.getMinutes();

  const isFinished = percent <= 0
  return (
    <TimerContainer {...props}>
      <Svg height={size} width={size} viewBox="0 0 20 20">
        <circle
          r={10}
          cx={10}
          cy={10}
          fill={isFinished ? svgTheme.fillNeg : svgTheme.fillPos}
        />
        <Circle
          r={5}
          cx={10}
          cy={10}
          fill="transparent"
          stroke={isFinished ? svgTheme.activeNeg : svgTheme.activePos}
          strokeWidth={10}
          strokeDasharray={result}
        />
      </Svg>

      <Detail>
        <h3>
          {minutes}:{seconds}
        </h3>
        <span>Time remaining</span>
      </Detail>
    </TimerContainer>
  )
}

const ExpiredNotice = () => (
  <ExpiredContainer>
    <span>Expired!</span>
    <p>Please select a future date and time.</p>
  </ExpiredContainer>
)

const ShowCounter = ({ days, hours, minutes, seconds }) => (
  <CounterViewer>
    {!!days && (
      <DateTimeDisplay isDanger={days <= 3} type="Days" value={days} />
    )}
    {!!hours && (
      <DateTimeDisplay isDanger={hours <= 0} type="Hours" value={hours} />
    )}
    {!!minutes && (
      <DateTimeDisplay isDanger={minutes <= 0} type="Mins" value={minutes} />
    )}
    {seconds && (
      <DateTimeDisplay
        isDanger={seconds <= 10}
        type="Seconds"
        value={seconds}
      />
    )}
  </CounterViewer>
)

// const collatedMinutes = minutes * 60 * 1000;
// const collatedSeconds = seconds * 1000;
// const localTargetDate = ms + collatedMinutes;

const CountDownTimer = ({ ms, targetDate }) => {
  const [days, hours, minutes, seconds] = useCountDown(targetDate)

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />
  } else {
    return <TimerCircle percent={60} minutes={minutes} seconds={seconds} />
  }
}

const DateTimeDisplay = ({ value, type, isDanger }) => (
  <DisplayViewer isDanger={isDanger}>
    <p>{value}</p>
    <span>{type}</span>
  </DisplayViewer>
)

const Timer = ({ enableCalendar, options: initialOptions = [] }) => {
  const options = initialOptions.sort((a, b) => a.value - b.value)
  const THREE_MINUTES_IN_MS = 3 * 60 * 1000

  const [selectedTarget, setSelectedTarget] = useState(THREE_MINUTES_IN_MS)
  const NOW_IN_MS = new Date().getTime()

  const timeInMs = NOW_IN_MS + selectedTarget

  const [targetDate, setTargetDate] = useState(new Date(timeInMs))

  const onChange = (event) => {
    event.preventDefault()
    if (event.target.value) {
      setTargetDate(new Date(event.target.value))
    } else {
      setTargetDate(new Date(timeInMs))
    }
  }

  const onSelect = (value) => {
    setSelectedTarget(value)
    setTargetDate(new Date(NOW_IN_MS + value))
  }

  const renderOptions = () => {
    if (!options.length || options.length <= 0) return null
    const result = options.map((option) => {
      return (
        <Option
          key={option.id}
          isActive={option.value === selectedTarget}
          onClick={() => onSelect(option.value)}
        >
          <span>{option.label}</span>
          <Icon
            ml={5}
            name="TARGET"
            stroke={option.value === selectedTarget ? 'black' : 'white'}
            size={20}
          />
        </Option>
      )
    })
    return <ButtonGroup>{result}</ButtonGroup>
  }

  return (
    <>
      {renderOptions()}
      {enableCalendar && (
        <form>
          <label htmlFor="countdown-date-time">Select a Date and Time:</label>
          <input
            id="countdown-date-time"
            name="countdown-date-time"
            type="datetime-local"
            onChange={onChange}
          />
        </form>
      )}

      <CountDownTimer ms={timeInMs} targetDate={targetDate} />
    </>
  )
}

Timer.defaultProps = {
  enableCalendar: false,
  options: [
    { id: 'd', label: '2min', value: 2 * 60 * 1000 },
    { id: 'e', label: '1min', value: 1 * 60 * 1000 },
  ],
}

export { Timer }
