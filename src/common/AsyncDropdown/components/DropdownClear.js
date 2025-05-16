import { Icon } from '@common/Icon'
import React from 'react'
import styled, { css } from 'styled-components'

const ClearButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 48px;
  top: calc(50% + 2px);
  height: 48px;
  width: 48px;
  border: 1.5px solid transparent;
  padding: 0;
  margin: 0;
  outline: none;
  transform: translateY(-50%);
  ${(props) =>
    props.$zIndex &&
    css`
      z-index: ${props.$zIndex};
    `};

  &:hover {
    color: #333;
  }
  &:focus {
    outline: none;
    &:after {
      content: '';
      position: absolute;
      background: transparent;
      transition: none;
      border: 2px solid #368e8c;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      border-radius: 4px;
      left: -6px;
      top: -6px;
    }
  }
`

const DropdownClear = ({ onClear, visible, zIndex }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onClear()
    }
  }

  if (!visible) return null
  return (
    <ClearButton
      type="button"
      onKeyDown={handleKeyPress}
      $zIndex={zIndex}
      onClick={onClear}
      aria-label="Clear selection"
    >
      <Icon name="CLOSE" size={20} />
    </ClearButton>
  )
}

export default DropdownClear
