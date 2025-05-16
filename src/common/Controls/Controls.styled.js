import styled, { css } from 'styled-components'
import { mbFn, mtFn, paddingFn, pbFn, ptFn } from '@common/Theme'

const ControlContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${mbFn};
  ${mtFn};
  ${ptFn};
  ${pbFn};
  ${paddingFn};
  button {
    &:not(:first-child) {
      margin-left: 8px;
    }
  }
  ${(props) =>
    props.left &&
    css`
      justify-content: flex-start;
    `};
  ${(props) =>
    props.right &&
    css`
      justify-content: flex-end;
    `};
  ${(props) => props.extend};
`

export { ControlContainer }
