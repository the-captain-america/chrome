import styled, { css } from 'styled-components'
import { colors } from '@common/Theme'

const MenuContainer = styled.div`
  height: 100%;
  width: 300px;
  right: -300px;
  top: 0;
  z-index: 100;
  background: #3a393e;
  border-radius: 0 4px 0 0;
  overflow: hidden;
  box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  position: absolute;
  ${(props) =>
    props.isActive &&
    css`
      right: 0;
    `}

  max-height: 100%;
`

const MenuContent = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  ${(props) =>
    props.height &&
    css`
      max-height: ${(props) => props.height || 320}px;
    `}
`

const MenuButton = styled.button`
  outline: none;
  position: absolute;
  z-index: 100;
  top: 5px;
  right: 5px;
  width: 48px;
  height: 48px;
  border-radius: 4px;
  background: transparent;
  border: none;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  &:hover {
    background: rgba(224, 224, 224, 0.29);
  }
  &:focus {
    outline: none;
    cursor: pointer;
  }
`

const CloseButton = styled.button`
  outline: none;
  position: absolute;
  width: 48px;
  height: 48px;
  left: 5px;
  top: 5px;
  border: none;
  background: none;
  display: flex;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  &:focus {
    outline: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
  &:hover {
    cursor: pointer;
    background: rgba(224, 224, 224, 0.29);
  }
`

const Content = styled.div`
  padding: 16px;
`

const MenuControl = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 59px;
  margin: 0;
  border-bottom: 1px solid #58575b;
  justify-content: flex-start;
  position: relative;
`

const MenuTitle = styled.h2`
  font-size: 18px;
  line-height: 20px;
  color: #323439;
  color: white;
  margin: 0;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
`

const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 16px 0 0 0;
  padding: 0 16px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const Item = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.2s ease-in-out;
  padding-left: 0;
  border-radius: 4px;
  span {
    line-height: 24px;
    font-size: 15px;
    padding: 16px;
    color: #4a4d50;
    color: #95929e;
  }
  &:hover {
    cursor: pointer;
    background-color: #d4d4d4;
    span {
      color: #95929e;
    }
  }
  ${(props) =>
    props.isActive &&
    css`
      background: ${colors.orange};
    `}
  ${(props) =>
    props.isDisabld &&
    css`
      background: ${colors.paleGray};
    `}
`

export {
  MenuContainer,
  MenuContent,
  MenuButton,
  CloseButton,
  MenuControl,
  MenuTitle,
  Group,
  List,
  Content,
  Item,
}
