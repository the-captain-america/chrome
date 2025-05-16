import { colors } from '@common/Theme'
import styled, { keyframes, css } from 'styled-components'

const spinner = () => {
  return keyframes`
  0% {
      transform: rotate(0deg);
  } 50% {
      transform: rotate(720deg);
  } 100% {
      transform: rotate(1080deg);
  }`
}

const SpinnerWrapper = styled.span`
  ${({ circle = '', path = '' }) => {
    return css`
      svg {
        circle {
          stroke: ${(props) => props.circle || colors.green};
        }
        path {
          stroke: ${(props) => props.path || colors.green};
          fill: transparent;
          stroke-linecap: round;

          transform-origin: 50%;
          animation: ${spinner()} 2s ease-in-out infinite;
        }
      }
    `
  }}
`

export { SpinnerWrapper }
