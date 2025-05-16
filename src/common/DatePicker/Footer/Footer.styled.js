import styled from 'styled-components'
import { srOnly } from '@common/Theme'

const FooterControls = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`

const FooterButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  padding: 12px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  position: relative;
  user-select: none;
  background-color: transparent;
  transition: background 0.2s;
  span {
    color: white;
  }
  &:hover {
    background: rgb(51, 59, 68);
  }
  ${srOnly};
  &.datepicker-footer-submit {
    background: #e40000;
    span {
      color: white;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }
  }
  &.datepicker-footer-cancel {
    border: 1.5px solid rgb(238, 58, 58);
    background: transparent;
    span {
      color: #e40000;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }
  }
`

export { FooterControls, FooterButton }
