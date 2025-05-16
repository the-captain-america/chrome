import styled, { css } from 'styled-components'
import { mtFn, mbFn, mlFn, colors, applyLuminance } from '@common/Theme'

const ellipses = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const CheckLabelSpan = styled.span`
  ${ellipses};
  cursor: pointer;
  margin-left: 0px;
  line-height: 32px;
  ${(props) =>
    props.isActive &&
    css`
      max-width: ${(props) => props.defaultMaxWidth || '300px'};
    `};
`

const CheckControlEnd = styled.div`
  display: flex;
  position: relative;
  margin-left: auto;
  align-items: center;
  gap: 8px;
  .IconEdit {
    opacity: 0;
  }
  .IconDelete {
    opacity: 0;
  }
  .IconArrow {
    opacity: 0;
  }
`

const CheckControl = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  .IconEdit {
    opacity: 0;
  }
  .IconDelete {
    opacity: 0;
  }
`

const checkItemHover = css`
  &:hover {
    border: 1.5px solid darkgray;
    .IconEdit {
      opacity: 1;
    }
    .IconDelete {
      opacity: 1;
    }
    .IconArrow {
      opacity: 1;
    }
  }
`

const checkItemTextArea = css`
  textarea.Checklist__Textarea {
    position: absolute;
    left: -9999px;
    top: -9999px;
  }
`

const checkItemBackground = ({ bgColor }) =>
  bgColor &&
  css`
    background: ${applyLuminance(bgColor, 0.1)};
  `

const checkItemActive = ({ isActive }) =>
  isActive &&
  css`
    background: ${colors.green};
    color: black;
    &:hover {
      background: ${colors.green};
      color: black;
    }
  `

const checkItemCompleted = ({ isCompleted }) =>
  isCompleted &&
  css`
    background: ${colors.sharkGray};
    color: white;
    span.label {
      text-decoration: line-through;
    }
    &:hover {
      background: ${colors.sharkGray};
      color: white;
    }
  `

const checkItemSelected = ({ isSelected }) =>
  isSelected &&
  css`
    border: 1px solid ${colors.yellow};
    background: rgba(247, 192, 58, 0.18);
    color: black;
    span.label {
      color: ${colors.yellow};
    }
    svg {
      path {
        stroke: ${colors.yellow};
      }
    }
    &:hover {
      border: 1px solid ${colors.yellow};
      color: black;
      svg {
        path {
          stroke: ${colors.yellow};
        }
      }
    }
  `

const checkItemDragging = ({ isDragging }) =>
  isDragging &&
  css`
    transition: none;
    border: 1px solid darkgray;
    &:hover {
      border: 1px solid transparent;
    }
  `

const CheckItemContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 5px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1.5px solid rgb(51, 59, 68);
  transition: background 0.3s ease-in-out;
  border-radius: 6px;
  color: white;
  ${checkItemTextArea};
  ${checkItemDragging};
  ${checkItemBackground};
  ${checkItemActive};
  ${checkItemHover};
  ${checkItemSelected};
  ${checkItemCompleted};
  &:hover {
    cursor: pointer;
  }
  .is-drag & {
    border: 1.5px solid transparent;
  }

  div.check-control + span.label {
    margin-left: 8px;
  }
`

const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 1.5px solid transparent;
  background: transparent;
  height: 32px;
  width: 32px;
  cursor: pointer;
  ${mtFn};
  ${mbFn};
  ${mlFn};
  &.IconArrow {
    padding: 4px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border: 1px solid transparent;
    &.visible {
      svg.ARROW_RIGHT {
        path {
          stroke: ${colors.yellow};
        }
      }
    }
  }
  &.IconEdit {
    padding: 4px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border: 1px solid transparent;
  }
  &.IconDelete {
    padding: 4px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border: 1px solid transparent;
    &.visible {
      svg.TRASH {
        path {
          stroke: ${colors.yellow};
        }
        line {
          stroke: ${colors.yellow};
        }
      }
    }
    &.visible.active {
      svg.TRASH {
        path {
          stroke: ${colors.yellow};
        }
        line {
          stroke: ${colors.yellow};
        }
      }
    }
    &.active {
      svg.TRASH {
        path {
          stroke: ${colors.white};
        }
        line {
          stroke: ${colors.white};
        }
      }
    }
  }
  &.IconEdit {
    &:hover {
      svg.EDIT {
        path {
          stroke: black;
          fill: black;
        }
      }
    }
  }
  &.IconCopy {
    cursor: pointer;
    &.visible {
      svg.COPY {
        rect {
          stroke: ${colors.black};
        }
        path {
          stroke: ${colors.black};
        }
      }
    }
    &.active {
      svg.COPY {
        rect {
          stroke: ${colors.black};
        }
        path {
          stroke: ${colors.black};
        }
      }
    }

    &.visible.active {
      svg.COPY {
        rect {
          stroke: ${colors.black};
        }
        path {
          stroke: ${colors.black};
        }
      }
    }
  }
  &.IconCheck {
    cursor: pointer;
    &.visible {
      svg.CHECKBOX {
        rect {
          stroke: ${colors.yellow};
        }
      }
      svg.CHECKBOX_FILLED {
        rect {
          stroke: ${colors.yellow};
        }
        path {
          stroke: ${colors.black};
        }
      }
    }
    &.active {
      svg.CHECKBOX {
        rect {
          stroke: ${colors.green};
        }
        path {
          stroke: ${colors.black};
        }
      }
      svg.CHECKBOX_FILLED {
        rect {
          stroke: ${colors.green};
          fill: ${colors.green};
        }
        path {
          stroke: ${colors.black};
        }
      }
    }
    &.visible.active {
      svg.CHECKBOX_FILLED {
        rect {
          stroke: ${colors.yellow};
          fill: ${colors.yellow};
        }
        path {
          stroke: ${colors.black};
        }
      }
    }
  }
  &.IconDrag {
    cursor: grabbing;
    &.visible {
      svg.DRAG {
        rect {
          fill: ${colors.yellow};
        }
      }
    }
    &.visible.active {
      svg.DRAG {
        rect {
          fill: ${colors.yellow};
        }
      }
    }
    &.hidden {
      border: 0;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
  }
`

export {
  CheckLabelSpan,
  CheckControlEnd,
  CheckControl,
  CheckItemContainer,
  ButtonContainer,
}
