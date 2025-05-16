import { colors } from '@common/Theme'
import styled, { css, keyframes } from 'styled-components'

const elementStyles = css`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 12px;
  border-radius: 4px;
  border: 2px solid transparent;
  transition: all 0.2s ease-in-out;
`

const textStyles = css`
  line-height: 14px;
  font-size: 14px;
  font-weight: 400;
  color: #171717;
`

const pseudoStyles = css`
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`

const pulseBorder = keyframes`
0% {
  transform: scale(1);
}
50% {
  transform: scale(1);
}
90% {
  transform: scale(1);
}
95% {
  transform: scale(1.2);
}
100% {
  transform: scale(1);
}
`

const Dot = styled.span`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 10px;
  height: 10px;
  border: 1px solid green;
  background: #b0ffb0;

  border-radius: 50%;
  animation: ${pulseBorder} 2s infinite;
  animation-direction: alternate;
`

const Container = styled.span`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding-top: 16px;
`

const Control = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  border-top: 1px solid rgb(51, 59, 68);
  padding-top: 16px;
  gap: 8px;
`

const Button = styled.button`
  background: ${colors.green};
  ${elementStyles};
  ${textStyles};
  ${pseudoStyles};
  width: 90px;
  transition: all 0.2s ease-in-out;
  background: transparent;
  overflow: hidden;
  ${(props) =>
    props.isLoading &&
    css`
      width: 115px;
    `};
  ${(props) =>
    props.variant === 'success' &&
    css`
      border: 1.5px solid ${colors.green};
      background: transparent;
      span {
        color: ${colors.green};
      }
      svg {
        path {
          stroke: ${colors.green};
        }
      }
      &:hover {
        background: #3aeeb85c;
      }
    `};
  ${(props) =>
    props.variant === 'default' &&
    css`
      border: 1.5px solid ${colors.purple};
      background: transparent;
      span {
        color: ${colors.purple};
      }
      svg {
        path {
          stroke: ${colors.purple};
        }
      }
      svg.REFRESH {
        path {
          stroke: none;
          fill: ${colors.purple};
        }
        rect {
          stroke: none;
          fill: ${colors.purple};
        }
      }

      &:hover {
        background: rgb(176 58 238 / 24%);
        span {
          color: #b681d2;
        }
        svg {
          path {
            stroke: #b681d2;
          }
          rect {
            stroke: #b681d2;
          }
        }
        svg.REFRESH {
          path {
            stroke: none;
            fill: #b681d2;
          }
          rect {
            stroke: none;
            fill: #b681d2;
          }
        }
      }
    `};
  ${(props) =>
    props.variant === 'failure' &&
    css`
      border: 1.5px solid ${colors.red};
      background: transparent;
      svg {
        path {
          stroke: ${colors.red};
        }
        line {
          stroke: ${colors.red};
        }
      }
      &:hover {
        background: #ee3a3a82;
        svg {
          path {
            stroke: #fc7373;
          }
          line {
            stroke: #fc7373;
          }
        }
        span {
          color: #fc7373;
        }
      }
      span {
        color: ${colors.red};
      }
    `};
  ${(props) => props.extend};
  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `};
`

export { Button, Dot, Container, Control }
