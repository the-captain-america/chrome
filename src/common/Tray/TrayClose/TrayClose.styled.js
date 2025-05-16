import styled from 'styled-components'
import { colors, srOnly } from '@common/Theme'

const Button = styled.button`
  outline: none;
  width: 36px;
  height: 36px;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: ${colors.accentSky};
  border-radius: 50%;
  justify-content: center;
  position: relative;
  ${srOnly};
`

export { Button }
