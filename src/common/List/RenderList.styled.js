import styled, { css } from 'styled-components'

const RenderItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;

  &:hover {
    button {
      &.edit {
        opacity: 1;
      }
      &.remove {
        opacity: 1;
      }
    }
  }
  button {
    margin-left: 8px;
    &.edit {
      opacity: 0;
    }
    &.remove {
      opacity: 0;
    }
    &:first-child {
      margin-left: 0;
    }
  }
  &:hover {
    opacity: 1;
  }
  ${(props) =>
    props.isCopied &&
    css`
      &:hover {
        opacity: 0;
      }
    `};
  button.reveal {
    margin-left: 8px;
  }
`

const Controls = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  z-index: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  right: 48px;
  height: 100%;
  svg.EDIT.SVG {
    path {
      fill: rgb(58, 238, 184);
    }
  }
`

const RenderWrapper = styled.div`
  position: relative;
  background: #282e32;
  width: 100%;
  li {
    .Button__Item {
      border-radius: 0 !important;
      padding: 14px 12px;
      border: 1.5px solid transparent;
      border-top: 1.5px solid rgb(51, 59, 68);
      &:first-child {
        border: 1.5px solid transparent;
      }
      &:hover {
        border: 1.5px solid transparent;
      }
    }
  }
  &.WithWrapper {
    padding-right: 8px;
    height: 100%;
    border-radius: 0;
    padding: 5px 4px 5px 5px;
  }
`

const RenderGroup = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  background: #282e32;
  &::-webkit-scrollbar-track {
    background: #3d3c40;
    border: none;
    border-radius: 4px;
    box-shadow: none;
  }
  &::-webkit-scrollbar-thumb {
    background: #58575b;
    border-radius: 4px;
    border: none;
    box-shadow: none;
  }
  .WithWrapper & {
    margin-right: 4px;
    list-style: none;
    background: transparent;
    border-radius: 0 0 4px 4px;
    width: calc(100% -4px);
    padding: 12px 8px 12px 8px;
    height: 100%;
    overflow-y: auto;
    max-height: 400px;
  }
`

export { RenderItem, Controls, RenderWrapper, RenderGroup }
