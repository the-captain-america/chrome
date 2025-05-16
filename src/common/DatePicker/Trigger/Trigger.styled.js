import styled from 'styled-components'
import { colors, srOnly } from '@common/Theme'

const Button = styled.button`
  background: white;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 0 4px 4px 0;
  border-top: 1.5px solid rgb(51, 59, 68) !important;
  border-bottom: 1.5px solid rgb(51, 59, 68) !important;
  border-right: 1.5px solid rgb(51, 59, 68) !important;
  padding: 10px;
  background-color: rgb(31, 36, 40);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  user-select: none;
  transition: background 0.2s;
  ${srOnly};
  &:hover {
    background: rgb(21 24 26);
  }
  span {
    color: white;
  }
`

export { Button }
