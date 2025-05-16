import React from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '@common/Icon'

const Button = styled.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  width: 48px;
  height: 48px;
  background: rgb(40, 46, 51);
  border: 1.5px solid transparent;
  border-radius: 0 4px 4px 0;
  transition: border 0.3s;
  outline: none;
  position: relative;
  cursor: pointer;
  ${(props) =>
    props.$zIndex &&
    css`
      z-index: ${props.$zIndex};
    `};
  ${(props) =>
    props.isOpen &&
    css`
      border-radius: 0 4px 0 0;
    `};
  &:focus {
    outline: none;
    &:after {
      content: '';
      position: absolute;
      z-index: 3;
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

const DropdownActivator = ({ zIndex, isOpen, onClick, ...props }) => {
  return (
    <Button $zIndex={zIndex} isOpen={isOpen} onClick={onClick} {...props}>
      <Icon rotate={isOpen ? -90 : 90} name={'CHEVRON_RIGHT'} size={20} />
    </Button>
  )
}

export default DropdownActivator
