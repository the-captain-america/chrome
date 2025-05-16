import styled, { css } from 'styled-components'
import { colors } from '@common/Theme'

const Button = styled.button`
  border: none;
  background-color: ${colors.orange};
  border-radius: 4px;
  padding: 12px;
  justify-content: center;
  display: flex;
  box-sizing: border-box;
  text-transform: capitalize;
  border: 2px solid transparent;
  margin-top: 16px;
  min-width: 190px;
  max-width: 190px;
  width: 100%;
  cursor: pointer;

  span {
    color: white;
    font-size: 16px;
    align-items: center;
    font-weight: 500;
  }

  background: #a9aeb9;
  color: white;
  width: 100%;
  &:hover {
    background: #74ade3;
  }
`

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  margin-left: 16px;

  &:first-child {
    margin-left: 0;
  }
`

const List = styled.ul`
  width: 100%;
  background: white;
  overflow: auto;
  padding: 16px;
  padding-top: 0;
  padding-bottom: 0;
  box-sizing: border-box;
`

const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 12px;
  box-sizing: border-box;
  text-transform: none;
  border-radius: 4px;
  font-weight: 500;
  border: 1px solid transparent;
  margin-top: 8px;
  border: 1px solid #1c65a9;
  span {
    color: #1c65a9;
  }
  &:hover {
    cursor: pointer;
    span.checkbox {
      border: 1px solid #1c65a9;
      &:after {
        background: white;
      }
    }
  }
  span.label {
    display: inline-block;
    margin-left: 16px;
  }
  span.checkbox {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: none;
    border: 1px solid #e0e0e0;
    position: relative;
    box-sizing: border-box;
    margin-left: auto;
    &:after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      box-sizing: border-box;
      background: transparent;
    }
  }
  ${(props) =>
    props.isActive &&
    css`
      background: #42a4ff;
      span.checkbox {
        border: 1px solid white;
        &:after {
          background: white;
        }
      }
      &:hover {
        span.checkbox {
          border: 1px solid white;
        }
      }
    `}
`

const Group = styled.div`
  position: absolute;
  z-index: 999;
  min-width: 280px;
  border-radius: 8px;
  top: calc(100% + 8px);
  background: white;
  box-shadow: 0px 0px 12px -5px rgba(0, 0, 0, 0.2);
  ${(props) =>
    props.position === 'left' &&
    css`
      left: 0;
    `}
  ${(props) =>
    props.position === 'right' &&
    css`
      right: 0;
    `}
`

const IconGroup = styled.div`
  width: 20px;
  height: 20px;
  transition: all 0.3s ease-in-out;
  margin-left: 6px;
  display: flex;
`

const Footer = styled.div`
  width: 100%;
  background: white;
  padding: 16px;
  box-sizing: border-box;
  border-top: 1px solid #e0e0e0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  bottom: 0%;
  left: 0%;
`

export { Button, Container, List, Item, Group, IconGroup, Footer }
