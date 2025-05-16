import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

const ProgressBarElement = styled.div`
  display: block;
  height: 10px;
  width: 100%;
  border-radius: 30px;
  margin-top: 16px;
  margin-bottom: 16px;
  box-sizing: border-box;
  background-color: #ccc;
  ${(props) =>
    props.$inactiveColor &&
    css`
      background-color: ${props.$inactiveColor};
    `};
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    width: ${(props) => props.$percentage}%;
    position: absolute;
    height: 10px;
    left: 0;
    top: 0;
    transition: width 0.2s ease-in-out 0.2s;
    ${(props) =>
      props.$activeColor &&
      css`
        background-color: ${props.$activeColor};
      `};
  }

  &:before {
    content: '';
    width: ${(props) => props.ellapsed}%;
    position: absolute;
    left: ${(props) => props.start}%;
    top: 0;
    ${(props) =>
      props.$height &&
      css`
        height: ${props.$height}px;
      `};
  }
`

const ProgressBar = ({
  percentage,
  ellapsed,
  start,
  height = 12,
  activeColor = '#3AEEB8',
  inactiveColor = 'rgb(52, 58, 64)',
}) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(percentage)
    }, 200)
    return () => clearTimeout(timeout)
  }, [percentage])

  return (
    <ProgressBarElement
      $percentage={progress}
      ellapsed={ellapsed}
      start={start}
      $height={height}
      $activeColor={activeColor}
      $inactiveColor={inactiveColor}
    />
  )
}

export default ProgressBar
