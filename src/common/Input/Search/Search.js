import styled, { css } from 'styled-components'
import { mbFn, mtFn } from '@common/Theme'

const Search = styled.input`
  outline: none;
  border-radius: 4px;
  background: #282e33;
  font-size: 16px;
  padding: 12px 11px 10px 11px;
  color: white;
  width: 100%;
  appearance: none;
  box-sizing: border-box;
  border: 1px solid #333b44;
  min-height: 48px;
  ${mbFn};
  ${mtFn}
  transition: all .2s ease-in-out;
  &:focus {
    border: 1px solid #333b44;
  }

  &:active {
    background: #ffffff;
  }
  &:focus {
    background: #ffffff;
  }
  ${(props) =>
    props.isFocused &&
    css`
      background: #282e33;
      border: 1px solid #737373;
      background-color: #282e33;
      &:focus {
        background: #282e33;
        border: 1px solid #737373;
        background-color: #282e33;
      }
    `}
`

export { Search }
