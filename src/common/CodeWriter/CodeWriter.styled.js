import styled, { css } from 'styled-components'
import { applyLuminance, colors } from '@common/Theme'

const Wrapper = styled.div`
  padding: 16px;
`

const StateWrapper = styled.div`
  overflow: auto;
  ${(props) =>
    props.maxHeight &&
    css`
      max-height: ${props.maxHeight};
    `};
`

const CodePlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 4px;
  border: dashed 1.5px #343a40;
  width: 100%;
  background: rgb(34, 40, 46);
`

const Label = styled.div`
  color: white;
  font-weight: 300;
  font-size: 14px;
  padding-bottom: 8px;
  color: #b2b2b2;
  line-height: 20px;
  span {
    font-size: 11px;
    color: white;
  }
`

const Container = styled.div``

const SelectControl = styled.div`
  position: absolute;
  top: -72px;
  right: 0;
  display: flex;
  align-items: flex-start;
  z-index: 1;
  justify-content: flex-end;
`

const Button = styled.button`
  display: flex;
  margin: 0;
  padding: 0;
  font-size: 16px;
  outline: none;
  border: none;
  margin: 16px 0 0 8px;
  justify-content: space-between;
  align-items: center;
  border: 1.5px solid transparent;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  background: transparent;
  padding: 12px;
  border-radius: 4px;
  ${(props) =>
    props.success &&
    css`
      border-color: ${colors.blue};
      span {
        color: ${colors.blue};
      }
      &:hover {
        border-color: ${applyLuminance(colors.blue, 0.1)};
      }
    `}
  ${(props) =>
    props.error &&
    css`
      border-color: ${colors.red};
      span {
        font-size: 16px;
        color: ${colors.red};
      }
      &:hover {
        border-color: ${applyLuminance(colors.red, 0.1)};
      }
    `}
`

const CodeItem = styled.div`
  padding: 6px 6px 6px 0;
  display: flex;
  width: 100%;
  flex-direction: flex-start;
  align-items: center;
  border-radius: 4px;
  border: 1.5px solid ${colors.blue};
  background: rgba(76, 58, 238, 0.16);
  &.active {
    background: rgb(58 163 238 / 29%);
    border: 1.5px solid rgb(58, 238, 184);
  }
  span {
    margin-right: 8px;
    padding: 4px 6px;
    background: ${colors.blue};
    color: white;
    border-radius: 4px;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 6px;
    &.index {
      padding-left: 8px;
      padding-right: 8px;
      padding-top: 3px;
      padding-bottom: 5px;
      color: #153f68;
    }
    &.date {
      background: rgb(31, 36, 43);
    }
  }
`

const CodeWrapper = styled.div`
  padding: 0;
  margin-bottom: 16px;
  display: flex;
  width: 100%;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  align-items: flex-start;
  background: #282e32;
  max-height: 200px;
  overflow-y: auto;

  ${(props) =>
    props.maxHeight &&
    css`
      max-height: ${props.maxHeight};
    `}

  .placeholder {
    position: absolute;
    background-color: white;
    border-radius: 3px;
    border: dashed 1px blue;
    width: 100%;
    opacity: 0;
    background-color: white;
  }
`

const CodeGroup = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  border-radius: 8px;
  position: relative;
`

const CodeContainer = styled.div``

const CodeCheckStyle = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  margin-top: 8px;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`

const CodeControls = styled.div`
  margin-left: auto;
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`

const CodeRemove = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  background: transparent;
  border-radius: 4px;
  border: 1.5px solid ${colors.transparentRed};
  &:hover {
    cursor: pointer;
  }
`

const CodeCopy = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  background: transparent;
  border-radius: 4px;
  border: 1.5px solid ${colors.green};
  transition: all 0.2s ease-in-out;
  .SVG {
    rect {
      stroke: ${colors.green};
    }
    path {
      stroke: ${colors.green};
    }
  }
  &:hover {
    cursor: pointer;
    background: rgba(58, 238, 184, 0.09);
    .SVG {
      rect {
        stroke: ${colors.green};
      }
      path {
        stroke: ${colors.green};
      }
    }
  }
`

const CodeFormElement = styled.form`
  position: absolute;
  left: -9999px;
  top: -9999px;
`

export {
  CodeFormElement,
  CodeItem,
  CodeWrapper,
  CodeGroup,
  CodeContainer,
  CodeCopy,
  CodeCheckStyle,
  IconContainer,
  CodeControls,
  CodeRemove,
}

export { Wrapper, Label, Container, SelectControl, Button, StateWrapper, CodePlaceholder }
