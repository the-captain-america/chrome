import React from 'react'
import styled, { css } from 'styled-components'
import { colors } from '@common/Theme'

const Button = styled.button`
  padding: 6px;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.isActive &&
    css`
      background: ${colors.orange};
      color: white;
      font-weight: 600;
    `}
`

const List = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 4px;
  overflow: hidden;
  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

const TabBasic = ({ isActive, onClick, action, children }) => (
  <List>
    <Button
      isActive={isActive}
      onClick={(event) => (onClick(event), action(event))}
    >
      {children}
    </Button>
  </List>
)

export { TabBasic }
