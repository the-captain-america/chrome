import styled, { css, keyframes } from 'styled-components'
import { maxWidthFn, responsiveProps, colors } from '@common/Theme'

const DataButton = styled.button`
  padding: 6px;
  margin: 0;
  margin-left: 8px;
  background: white;
  border: 1px solid #a9aeb9;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #eaeaea;
  }
`

const FormElement = styled.form`
  position: absolute;
  left: -9999px;
  top: -9999px;
`

const Priority = styled.span`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  margin-left: 8px;
`

const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  input {
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    width: 100%;
    line-height: 21px;
    max-width: 1200px;
  }
`

const CopyButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  align-self: stretch;
  flex-grow: 0;
  border: 1.5px solid rgb(51, 59, 68);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background: #282e33;
  flex: 1;
  padding: 7px 12px 7px 16px;
  border-radius: 4px;
  &:hover {
    background: #1f2428;
  }

  ${(props) =>
    props.variant === 'gold' &&
    css`
      border: 1px solid ${colors.yellow};
      background: ${colors.yellow};
      button {
        svg.COPY {
          rect {
            stroke: ${colors.yellow};
          }
          path {
            stroke: ${colors.yellow};
          }
        }
      }
    `};
  ${(props) =>
    props.variant === 'green' &&
    css`
      border: 1px solid ${colors.green};
      background: transparent;
      svg.COPY.SVG {
        rect {
          stroke: ${colors.green};
        }
        path {
          stroke: ${colors.green};
        }
      }
    `};
  ${(props) =>
    props.isActive &&
    css`
      border-color: rgb(24 159 118);
      background: ${colors.green};
      &:hover {
        background: ${colors.green};
      }
      span {
        color: black;
      }
    `}
  &:first-child {
    margin-top: 0;
  }

  ${({ mt }) => responsiveProps('margin-top', mt)};
  ${({ mb }) => responsiveProps('margin-bottom', mb)};

  ${(props) => props.extend};
`

const CopyLabel = styled.span`
  font-size: 16px;
  font-weight: 300;
  color: #95929e;
  display: flex;
  margin-right: 8px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  text-align: left;
  line-height: 31px;
  ${maxWidthFn};
`

const CopyItem = styled.span.attrs({ className: 'CopyItem' })`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  white-space: nowrap;
  text-align: left;
  font-size: 16px;
  line-height: 32px;
  position: relative;
  color: #fbfafb;
  max-width: 300px;
  ${(props) =>
    props.isCrossed &&
    css`
      &:before {
        content: '';
        height: 1px;
        position: absolute;
        width: 100%;
        top: calc(50% - 1px);
        background: black;
        z-index: 1;
      }
    `}
`

const IconContainer = styled.span`
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 20px;
  min-height: 20px;

  svg {
    circle {
      fill: black;
      stroke: black;
    }
    path {
      stroke: white;
    }
    rect {
      stroke: white;
    }
  }

  .active & {
    svg {
      circle {
        fill: black;
        stroke: black;
      }
      path {
        stroke: white;
      }
      rect {
        stroke: white;
      }
    }
  }
`

const DotItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 7px;
  height: 100%;
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #95929e;
    transform: translate(-50%, -50%);
  }
`

const DotGroup = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  height: 32px;
  position: relative;
  flex-direction: row;

  .Button__Item.active & {
    li {
      &:after {
        background: black;
      }
    }
  }
  ${(props) =>
    props.isCrossed &&
    css`
      &:before {
        content: '';
        height: 1px;
        position: absolute;
        width: 100%;
        top: calc(50% - 1px);
        background: black;
        z-index: 1;
      }
    `};
`

const RevealButton = styled.button`
  padding: 6px;
  border: 1px solid transparent;
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: rgb(34, 40, 44);
  margin-left: 16px;
  color: #a29ea9;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  user-select: none;
  &:hover {
    background: rgb(17 19 21);
    border: 1px solid rgb(17 19 21);
  }
`

const pulseBorder = keyframes`
  0% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  100% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: .4;
  }
`

const PriorityItem = styled.div`
  position: relative;
  display: flex;
  width: 15px;
  height: 15px;
  min-height: 15px;
  min-width: 15px;
  max-height: 15px;
  max-width: 15px;
  border-radius: 50%;
  border: none;
  transition: all 0.2s ease-in-out;
  ${(props) =>
    props.bgColor &&
    css`
      background: ${props.bgColor};
    `}
  position: relative;
  margin-left: 22px;
`

export {
  DataButton,
  CopyContainer,
  CopyButton,
  PriorityItem,
  CopyLabel,
  CopyItem,
  IconContainer,
  DotItem,
  Priority,
  DotGroup,
  RevealButton,
  FormElement,
}
