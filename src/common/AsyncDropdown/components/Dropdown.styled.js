import styled, { css } from 'styled-components'

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  ${(props) => props.extend};
`

const DropdownListBox = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  ${(props) =>
    props.$bgColor &&
    css`
      background-color: ${props.$bgColor};
    `};
  ${(props) =>
    props.$zIndex &&
    css`
      z-index: ${props.$zIndex};
    `};
  ${(props) =>
    props.$maxHeight &&
    css`
      max-height: ${props.$maxHeight}px;
    `};
`

const DropdownListDialog = styled.div`
  padding: 0 5px 10px 0px;
  position: absolute;
  width: 100%;
  border-radius: 0 0 4px 4px;
  border-top: 1.5px solid rgb(51, 59, 68);
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.15);
  ${(props) =>
    props.$bgColor &&
    css`
      background-color: ${props.$bgColor};
    `};
  ${(props) =>
    props.$maxHeight &&
    css`
      max-height: ${props.$maxHeight + 10}px;
    `};
  ${(props) =>
    props.$zIndex &&
    css`
      z-index: ${props.$zIndex};
    `};
`

const DropdownList = styled.div``

const DropdownListItem = styled.li`
  margin: 0;
  list-style: none;
  outline: none;
  display: flex;
  justify-content: flex-start;
  padding: 13px;
  cursor: pointer;
  background: rgb(40, 46, 51);
  border-bottom: 1.5px solid #ccc;
  position: relative;
  &:hover {
    background: rgb(34, 40, 46);
  }
  span.option-text-label {
    line-height: 21px;
  }
  &:last-child {
    border-bottom: 1.5px solid transparent;
  }
  &:active {
    &:after {
      display: none;
    }
  }
  &.active {
    background: rgb(34, 40, 46);
  }
  &:focus {
    &:focus-visible {
      outline: none;
      &:after {
        content: '';
        position: absolute;
        z-index: 2;
        background: transparent;
        transition: none;
        border: 2px solid #368e8c;
        width: calc(100% + 12px);
        height: calc(100% + 12px);
        border-radius: 4px;
        left: -6px;
        top: -6px;
      }
    }
  }
`

const DropdownWrapper = styled.div`
  position: relative; // must be relative for the dropdown list to be absolute also for the activator to be absolute
  display: flex;
  flex-direction: row;
  width: 100%;
  outline: none;
  flex: 1;
  border-radius: 4px;
  border: 1.5px solid white;
  &:focus-visible {
    outline: none;
    &:after {
      content: '';
      position: absolute;
      z-index: 2;
      background: transparent;
      transition: none;
      border: 2px solid #368e8c;
      width: calc(100% + 12px);
      height: calc(100% + 12px);
      border-radius: 4px;
      left: -6px;
      top: -6px;
    }
  }
`

export {
  DropdownContainer,
  DropdownListDialog,
  DropdownListItem,
  DropdownList,
  DropdownListBox,
  DropdownWrapper,
}
