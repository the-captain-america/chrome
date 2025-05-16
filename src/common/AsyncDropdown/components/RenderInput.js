import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { colors } from '@common/Theme'

const DropdownInput = styled.input`
  padding: 8px;
  width: 100%;
  border: 1.5px solid transparent;
  background: white;
  font-size: 16px;
  border-radius: 4px;
  transition: border 0.3s;
  outline: none;
  border-radius: 4px 0 0 4px;
  position: relative;
  z-index: 1;
  outline: none;
  transition: border-color 0.3s;
  font-weight: 500;
  color: ${colors.charcoal};
  &:hover {
    border-color: #a1e0df;
  }
  &:active {
    &:after {
      display: none;
    }
  }
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

  ${(props) =>
    props.isOpen &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `};
`

const RenderInput = forwardRef(
  (
    {
      renderInput,
      onFocus = () => {},
      onBlur = () => {},
      onChange = () => {},
      onClick = () => {},
      onKeyDown = () => {},
      isOpen,
      id,
      ...props
    },
    ref,
  ) => {
    const inputProps = {
      name: props.name || 'search',
      type: 'text',
      placeholder: props?.placeholder,
      value: props?.value,
      isOpen,
      onFocus,
      onChange,
      onClick,
      onBlur,
      onKeyDown, // pass the onKeyDown handler
      id,
      role: 'combobox',
      'aria-autocomplete': 'list',
      'aria-controls': `${id}-listbox`,
      'aria-expanded': isOpen,
      'aria-haspopup': 'dialog',
      autoComplete: 'off',
      className: `dropdown-input ${isOpen ? 'open' : ''}`,
    }

    if (!renderInput) {
      return <DropdownInput ref={ref} {...inputProps} />
    }

    // Pass the ref along to the custom renderer.
    return renderInput({ ...inputProps, ref })
  },
)

export default RenderInput
