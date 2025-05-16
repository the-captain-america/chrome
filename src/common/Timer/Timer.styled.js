import styled, { keyframes } from 'styled-components'
import { mbFn, mtFn } from '@common/Theme'
import { colors } from '@common/Theme'

const bg = keyframes`
  50% { background: #655;  }
`

const TimerChart = styled.div`
  position: relative;
  width: 100px;
  line-height: 100px;
  border-radius: 50%;
  background: yellowgreen;
  background-image: linear-gradient(to right, transparent 50%, #655 0);
  color: transparent;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    border-radius: 0 100% 100% 0 / 50%;
    background-color: inherit;
    transform-origin: left;

    transform: rotate(0.7turn);
    animation-play-state: paused;
    animation-delay: inherit;
  }
`

const Svg = styled.svg`
  border: 4px solid #7b88ff;
  border: 4px solid ${colors.green};
  border-radius: 50%;
  transform: rotate(-90deg);
`

const TimerContainer = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  flex-direction: row;
  padding: 16px;
  background: #202428;
  border-radius: 8px;
  ${mtFn};
  ${mbFn};
`

const Detail = styled.div`
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    font-size: 28px;
    text-align: center;
    color: #676b78;
    font-weight: 700;
    margin: 0;
    color: #878b8d;
  }
  span {
    color: #a9b0d6;
    color: white;
    font-size: 14px;
    font-weight: 600;
  }
`

const Circle = styled.circle`
  transform: translate(-20px 0) rotate(90deg);
`

export { Svg, TimerContainer, Detail, Circle }
