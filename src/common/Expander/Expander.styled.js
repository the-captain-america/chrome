import { bgColorFn, maxHeightFn, mbFn, mtFn } from '@common/Theme'
import styled, { css } from 'styled-components'

const ExpanderContainer = styled.div`
  padding: 16px;
  border: 2px solid #dadada;
  border-radius: 8px;
  background: white;
  ${bgColorFn};
  ${mtFn};
  ${mbFn};
`

const ExpanderTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 24px;
`

const ExpanderHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  ${(props) =>
    props.hasLength &&
    css`
      margin-bottom: 12px;
    `}
`

const ExpanderControls = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  height: 100%;
`

const pseudoStyles = css`
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`

const ExpanderControlButton = styled.button`
  display: flex;
  flex-direction: row;
  border: none;
  box-sizing: border-box;
  background: none;
  ${pseudoStyles}
  margin: 0;
  padding: 0;
  min-width: 20px;
  margin-right: 8px;
  transition: all 0.2s ease-in-out;
`

const ExpanderButton = styled.button`
  display: flex;
  flex-direction: row;
  border: none;
  box-sizing: border-box;
  background: none;
  ${pseudoStyles}
  margin: 0;
  padding: 0;
  min-width: 20px;
  transform-origin: 50% 50%;
  transition: all 0.2s ease-in-out;
  ${(props) =>
    props.isActive &&
    css`
      transform-origin: 50% 50%;
      transform: rotate(90deg);
    `}
  &.REMOVE {
    margin-right: 12px;
  }
`

const ExpanderContent = styled.div`
  background: transparent;
  overflow: hidden;
  transition: max-height 0.2s ease-in-out;
  ${maxHeightFn}
  &::-webkit-scrollbar-track {
    background: none;
    border: none;
    box-shadow: none;
    border-radius: 4px;
    width: 14px;
  }
  &::-webkit-scrollbar-thumb {
    background: #eeeff1;
    border: none;
    box-shadow: none;
    border-radius: 4px;
  }
`

const Handle = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  margin: 0;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: grab;
  }
  &:active {
    cursor: grabbing;
  }
`

export {
  ExpanderContainer,
  ExpanderHeader,
  ExpanderControls,
  ExpanderButton,
  ExpanderContent,
  ExpanderControlButton,
  Handle,
  ExpanderTitle,
}
