import styled from 'styled-components'
import { colors, srOnly } from '@common/Theme'

const Button = styled.button`
  background: ${colors.transparent};
  border: 1.5px solid ${colors.white};
  outline: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  user-select: none;

  ${srOnly};
`

const Container = styled.div`
  cursor: default;
  padding: 0 0 12px 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span.datepicker-header {
    color: white;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    text-transform: uppercase;
  }
`

export { Button, Container }
