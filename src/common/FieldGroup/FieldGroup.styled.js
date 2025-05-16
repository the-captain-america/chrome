import styled, { css } from 'styled-components'
import { mtFn, mbFn } from '@common/Theme'

const extendStyleFn = ({ extendTo }) =>
  css`
    ${extendTo};
  `

const FieldElement = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  ${mtFn};
  ${mbFn};
  ${extendStyleFn};
`

export { FieldElement }
