import styled, { css } from 'styled-components'
import { colors, mtFn, mbFn, scrollBarStyleBlue } from '@common/Theme'

const Container = styled.div`
  border: 1px solid transparent;
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  width: 100%;
  ${mtFn};
  ${mbFn};
  ${(props) => props.extend};
`

const multiCursorFn = ({ showCheckbox }) =>
  showCheckbox &&
  css`
    cursor: pointer;
  `

const multiActiveFn = ({ isActive }) =>
  isActive &&
  css`
    transition: all 0.2s ease-in-out;
    background: #f7c03a2e;
    border: 1.5px solid #f7c03a;
    span {
      color: #f7c03a;
    }
    &:hover {
      background: #f7c03a2e;
    }
  `

const Label = styled.label`
  font-weight: 300;
  font-size: 14px;
  padding-bottom: 8px;
  color: rgb(178, 178, 178);
`

const IconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-left: 4px;
  svg.CHECKBOX_FILLED {
    rect {
      fill: ${colors.yellow};
      stroke: ${colors.yellow};
    }
    path {
      stroke: black;
    }
  }
  svg.CHECKBOX_OUTLINE {
    rect {
      stroke: ${colors.yellow};
    }
  }
  ${(props) =>
    props.color === 'blue' &&
    css`
      svg > path {
        stroke: ${colors.green};
      }
    `}
`

const CustomButton = styled.button`
  margin-top: 0px;
  margin-bottom: 16px;
  padding: 0;
  max-width: 100px;
  background: transparent;
  border: 1.5px solid transparent;
  display: block;
  cursor: pointer;
  color: white;
  border: none;
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
`

const Group = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
  flex-direction: row;
  overflow: auto;
  flex-wrap: wrap;
  gap: 16px;
  ${scrollBarStyleBlue};
`

const SelectedItemContainer = styled.li`
  list-style: none;
  padding: 12px;
  min-height: 40px;
  border-radius: 4px;
  flex: 0 auto;
  display: flex;
  user-select: none;
  justify-content: flex-start;
  align-items: center;
  max-width: 400px;
  transition: all 0.2s ease-in-out;
  background: none;
  border: 1.5px solid #f7c03a;
  cursor: pointer;
  margin: 0;
  textarea {
    position: absolute;
    left: -999px;
    top: -999px;
  }
  &:hover {
    background: rgb(247 192 58 / 11%);
  }
  span {
    color: #f7c03a;
    word-wrap: break-word;
    transition: all 0.1s ease-in-out;
  }

  ${(props) =>
    props.isCopied &&
    css`
      color: ${colors.green};
      border: 1.5px solid ${colors.green};
      background-color: transparent;
      span {
        color: ${colors.green};
        &:hover {
          color: ${colors.green};
        }
      }
      &:hover {
        background-color: transparent;
        border: 1.5px solid ${colors.green};
      }
    `};
  ${(props) =>
    props.isDisabled &&
    css`
      background: #1d1d1d !important;
    `}

  button {
    margin: 0;
    padding: 0;
    width: 32px;
    height: 32px;
    min-width: 32px;
    border-radius: 4px;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1.5px solid #dadada;
    margin-left: auto;
    background: transparent;
    transition: all 0.2s ease-in-out;
    &:hover {
      svg {
        path,
        line {
          stroke: white;
        }
      }
    }
  }
  &:last-child {
    margin-right: 0;
  }
  ${multiCursorFn};
  ${multiActiveFn}
`

export {
  Container,
  CustomButton,
  IconContainer,
  Group,
  SelectedItemContainer,
  Label,
}
