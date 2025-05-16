import styled, { css, keyframes } from 'styled-components'
import { colors, responsiveProps } from '@common/Theme'

const disabledFn = css`
  ${(props) =>
    props.disabled === true &&
    css`
      background: #a9aeb9;
      pointer-events: none;
      opacity: 0.5;
      span {
        user-select: none;
      }
    `}
`

const focusStyle = css`
  outline: none;
  &:after {
    content: '';
    position: absolute;
    z-index: 2;
    border: 2px solid ${colors.green};
    width: calc(100% + 12px);
    height: calc(100% + 12px);
    border-radius: 6px;
    left: -6px;
    top: -6px;
  }
`

const centerFn = css`
  ${(props) =>
    props.center &&
    css`
      justify-content: center;
    `}
`

const elementLabel = css`
  ${(props) =>
    props.buttonLabel &&
    css`
      justify-content: center;
      span {
        width: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: black;
        margin-right: 4px;
      }
    `};
`

const basicStyles = css`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 12px;
  border-radius: 4px;
  border: 1.5px solid transparent;
  transition: all 0.2s ease-in-out;
`

const basicText = css`
  line-height: 14px;
  font-size: 14px;
  font-weight: 300;
  color: white;
`

const pseudoStyles = css`
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`

const pulsate = keyframes`
  0% {
    box-shadow: 0 0 5px ${colors.blue};
  }
  50% {
    box-shadow: 0 0 20px ${colors.blue}, 0 0 10px ${colors.blue};
  }
  100% {
    box-shadow: 0 0 5px ${colors.blue};
  }
`

// Conditional CSS for the pulsating effect
const pulsatingStyle = css`
  animation: ${pulsate} 1.5s infinite alternate;
  border-color: ${colors.blue};
`

const allDefaultStyles = css`
  ${basicStyles};
  ${basicText};
  ${pseudoStyles}
  ${disabledFn};
  ${elementLabel};
  ${centerFn};

  ${({ $padding }) => responsiveProps('padding', $padding)};
  ${({ $mt }) => responsiveProps('margin-top', $mt)};
  ${({ $mr }) => responsiveProps('margin-right', $mr)};
  ${({ $mb }) => responsiveProps('margin-bottom', $mb)};
  ${({ $ml }) => responsiveProps('margin-left', $ml)};
  ${({ $width }) => responsiveProps('width', $width)};
  ${({ $maxWidth }) => responsiveProps('max-width', $maxWidth)};
  ${({ $minWidth }) => responsiveProps('min-width', $minWidth)};
  ${({ $justifyContent }) => responsiveProps('justify-content', $justifyContent)};

  span.label {
    user-select: none;
  }
`

const Purple = styled.button`
  ${allDefaultStyles};
  border: 1.5px solid ${colors.purple};
  background: transparent;
  span {
    color: ${colors.purple};
  }
  span.label {
    line-height: 19px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  svg.EXPAND {
    path {
      stroke: ${colors.purple};
    }
  }
  svg.DOUBLE_ARROW {
    path {
      stroke: ${colors.purple};
    }
  }
  svg.EDIT {
    path {
      stroke: none;
      fill: ${colors.purple};
    }
  }
  svg.HISTORY {
    path {
      stroke: ${colors.purple};
    }
  }
  svg.CANCEL {
    path {
      stroke: ${colors.purple};
    }
    circle {
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
  svg.WEIGHT {
    path {
      stroke: ${colors.purple};
      fill: ${colors.purple};
    }
    rect {
      stroke: ${colors.purple};
      fill: ${colors.purple};
    }
  }

  &:hover {
    background: rgb(176 58 238 / 24%);
    span {
      color: #b681d2;
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
  position: relative;
  &:focus {
    outline: none;
    &:after {
      content: '';
      position: absolute;
      z-index: 2;
      border: 2px solid ${colors.purple};
      width: calc(100% + 12px);
      height: calc(100% + 12px);
      border-radius: 6px;
      left: -6px;
      top: -6px;
    }
  }
  ${(props) => props.extend};
`

const Gold = styled.button`
  ${allDefaultStyles};
  background: transparent;
  border: 1.5px solid #f7c03a;
  &:hover {
    background: rgb(247 192 58 / 14%);
  }
  span {
    color: #ffd161;
  }
  span.label {
    line-height: 19px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  svg.WEIGHT {
    path {
      stroke: ${colors.yellow};
      fill: ${colors.yellow};
    }
    rect {
      stroke: ${colors.yellow};
      fill: ${colors.yellow};
    }
  }
  svg.PLAY {
    path {
      stroke: ${colors.yellow};
      fill: ${colors.yellow};
    }
  }
  svg.CHEVRON {
    path {
      fill: ${colors.yellow};
    }
  }
  svg.HISTORY {
    path {
      stroke: ${colors.yellow};
    }
  }
  svg.REFRESH {
    path {
      stroke: none;
      fill: ${colors.yellow};
    }
    rect {
      stroke: none;
      fill: ${colors.yellow};
    }
  }
  ${(props) => props.extend};
`

const Copy = styled.button`
  ${allDefaultStyles};
  background: ${colors.purple};
  border: 1.5px solid ${colors.purple};
  background: transparent;
  span {
    color: ${colors.purple};
  }
  svg {
    path {
      stroke: ${colors.purple};
    }
    rect {
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
    background: #b03aee8c;
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
        fill: ${colors.purple};
      }
      rect {
        stroke: none;
        fill: ${colors.purple};
      }
    }
  }
  ${(props) =>
    props.isLoading &&
    css`
      width: 115px;
    `};
  ${(props) => props.extend};
`

const Red = styled.button`
  ${allDefaultStyles};
  background: rgb(255 87 87 / 8%);
  border: 1.5px solid ${colors.red};
  span {
    color: #ee3a3a;
  }
  span.label {
    line-height: 19px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  svg.LEAVE {
    path {
      stroke: #ee3a3a;
    }
  }
  svg.RESEND {
    path {
      fill: #ee3a3a;
    }
    line {
      fill: #ee3a3a;
    }
  }
  svg.CLOSE {
    path {
      stroke: #ee3a3a;
    }
  }
  svg.CANCEL {
    path {
      stroke: #ee3a3a;
    }
    line {
      fill: #ee3a3a;
    }
    circle {
      stroke: #ee3a3a;
    }
  }
  svg.TRASH {
    path {
      stroke: ${colors.red};
    }
    line {
      stroke: ${colors.red};
    }
  }
  svg.RETURN {
    path {
      stroke: ${colors.red};
    }
    line {
      stroke: ${colors.red};
    }
  }
  &:hover {
    background: rgb(255 87 87 / 16%);
    span {
      font-size: 16px;
      color: #fc7373;
    }
    svg.TRASH {
      path {
        stroke: rgb(252, 115, 115);
      }
      line {
        stroke: rgb(252, 115, 115);
      }
    }
    svg.RETURN {
      path {
        stroke: #fc7373;
      }
      line {
        stroke: #fc7373;
      }
    }
    svg.RESEND {
      path {
        fill: #fc7373;
      }
      line {
        fill: #fc7373;
      }
    }
    svg.CANCEL {
      path {
        stroke: #fc7373;
      }
      line {
        fill: #fc7373;
      }
      circle {
        stroke: #fc7373;
      }
    }
  }

  position: relative;
  &:focus {
    outline: none;
    &:after {
      content: '';
      position: absolute;
      z-index: 2;
      border: 2px solid ${colors.red};
      width: calc(100% + 12px);
      height: calc(100% + 12px);
      border-radius: 6px;
      left: -6px;
      top: -6px;
    }
  }

  ${(props) => props.extend};
`

const RedCircle = styled(Red)`
  max-height: 30px;
  max-width: 30px;
  height: 30px;
  width: 30px;
  min-width: 30px;
  border-radius: 50%;
  justify-content: center;
  padding: 0;
  span.label {
    display: none;
  }
`

const Blue = styled.button`
  ${allDefaultStyles};
  background: rgb(58 163 238 / 4%);
  border: 1.5px solid ${colors.blue};
  span {
    color: ${colors.blue};
  }
  span.label {
    line-height: 19px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  svg.RESEND {
    path {
      fill: rgb(58 65 238);
    }
    line {
      fill: rgb(58 65 238);
    }
  }
  svg.HISTORY {
    path {
      stroke: ${colors.blue};
    }
  }
  svg.CHEVRON {
    path {
      fill: ${colors.blue};
    }
  }
  svg.PLAY {
    path {
      fill: ${colors.blue};
    }
    line {
      fill: ${colors.blue};
    }
  }
  svg.TRASH {
    path {
      stroke: ${colors.blue};
    }
    line {
      stroke: ${colors.blue};
    }
  }
  svg.SETTINGS {
    path {
      stroke: ${colors.blue};
    }
    line {
      stroke: ${colors.blue};
    }
  }
  &:hover {
    background: rgb(58 163 238 / 30%);
    span {
      font-size: 16px;
    }
    svg.TRASH {
      path {
        stroke: rgb(252, 115, 115);
      }
      line {
        stroke: rgb(252, 115, 115);
      }
    }
    svg.RESEND {
      path {
        fill: ${colors.blue};
      }
      line {
        fill: ${colors.blue};
      }
    }
  }
  ${(props) => props.isPulsating && pulsatingStyle};
  ${(props) => props.extend};
`

const White = styled.button`
  ${allDefaultStyles};
  background: transparent;
  border: 1.5px solid white;
  span {
    color: white;
  }
  svg.SETTINGS {
    path {
      stroke: white;
    }
  }
  svg.RESEND {
    path {
      fill: #ee3a3a;
    }
    line {
      fill: #ee3a3a;
    }
  }
  svg.HISTORY {
    path {
      stroke: white;
    }
    line {
      fill: white;
    }
  }
  svg.TRASH {
    path {
      stroke: ${colors.red};
    }
    line {
      stroke: ${colors.red};
    }
  }
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    span {
      font-size: 16px;
      color: white;
    }
    svg.SETTINGS {
      path {
        stroke: white;
      }
    }
    svg.TRASH {
      path {
        stroke: rgb(252, 115, 115);
      }
      line {
        stroke: rgb(252, 115, 115);
      }
    }
    svg.RESEND {
      path {
        fill: #fc7373;
      }
      line {
        fill: #fc7373;
      }
    }
  }
  ${(props) => props.extend};
`

const Grey = styled.button`
  ${allDefaultStyles};
  background: transparent;
  border: 1.5px solid #343b44;

  span {
    color: grey;
  }
  svg.SETTINGS {
    path {
      stroke: white;
    }
  }
  svg.RESEND {
    path {
      fill: #ee3a3a;
    }
    line {
      fill: #ee3a3a;
    }
  }
  svg.HISTORY {
    path {
      stroke: white;
    }
    line {
      fill: white;
    }
  }
  svg.TRASH {
    path {
      stroke: ${colors.red};
    }
    line {
      stroke: ${colors.red};
    }
  }
  &:hover {
    background: rgb(23 25 28);
    span {
      font-size: 16px;
      color: white;
    }
    svg.SETTINGS {
      path {
        stroke: white;
      }
    }
    svg.TRASH {
      path {
        stroke: rgb(252, 115, 115);
      }
      line {
        stroke: rgb(252, 115, 115);
      }
    }
    svg.RESEND {
      path {
        fill: #fc7373;
      }
      line {
        fill: #fc7373;
      }
    }
  }
  ${(props) => props.extend};
`

const Text = styled.button`
  ${allDefaultStyles};
  border: 1.5px solid transparent;
  background: transparent;
  ${(props) =>
    props.buttonLabel &&
    css`
      justify-content: center;
      span {
        width: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        margin-right: 4px;
      }
    `}
  &:hover {
    background: transparent;
    span {
      text-decoration: underline;
    }
  }
  &:disabled {
    cursor: not-allowed;
    user-select: none;
    span {
      text-decoration-line: none;
      color: #a9aeb9;
    }
  }
  ${(props) => props.extend};
`

const Green = styled.button`
  ${allDefaultStyles};
  background: transparent;
  border: 1.5px solid ${colors.green};
  span {
    color: ${colors.green};
  }
  span.label {
    line-height: 19px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${colors.green};
  }
  &:hover {
    background: rgb(58 238 184 / 9%);
  }
  svg.HOME {
    path {
      stroke: ${colors.green};
    }
  }
  svg.REFRESH {
    path {
      fill: ${colors.green};
    }
  }
  svg.CHEVRON {
    path {
      fill: ${colors.green};
    }
  }
  svg.ARROW_RIGHT {
    path {
      stroke: ${colors.green};
    }
  }
  svg.SAVE {
    path {
      stroke: ${colors.green};
    }
  }
  position: relative;
  &:focus {
    ${(props) =>
      props.enableFocus
        ? focusStyle
        : css`
            &:before {
              content: '';
              position: absolute;
              z-index: 2;
              border: 1.5px solid ${colors.green};
              width: calc(100% - 6px);
              height: calc(100% - 6px);
              border-radius: 3px;
              left: 3px;
              top: 3px;
            }
          `};
  }

  ${(props) => props.extend};
`

export { Text, Red, RedCircle, Blue, Green, Copy, Gold, White, Purple, Grey }
