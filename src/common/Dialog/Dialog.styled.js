import styled from 'styled-components'
import { colors } from '@common/Theme/styles'

const DialogElement = styled.dialog`
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
  max-width: 100vw;
  max-height: 100vh;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  position: fixed;
  top: 0;
  left: 0;
  background: ${colors.white};
  &::backdrop {
    background-color: ${colors.white};
  }
`

export { DialogElement }
