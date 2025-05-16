import styled, { css } from 'styled-components'
import { colors } from '@common/Theme'
import { mtFn, mbFn } from '@common/Theme'

const LinkStyled = styled.a`
  ${mtFn};
  ${mbFn};
  color: ${colors.red};
  align-self: center;
  cursor: pointer;
  text-decoration: none;
  ${(props) =>
    props.underline &&
    css`
      &:hover {
        text-decoration: underline;
      }
      &:active {
        text-decoration: underline;
      }
    `}
`

const LinkButtonStyled = styled.button`
  padding: 0;
  margin: 0;
  ${mtFn};
  ${mbFn};
  color: ${colors.red};
  border: none;
  align-self: center;
  cursor: pointer;
  background: none;
  outline: none;
  text-transform: none;
  text-decoration: none;
  ${(props) =>
    props.underline &&
    css`
      &:hover {
        text-decoration: underline;
      }
      &:active {
        text-decoration: underline;
      }
    `}
`

export { LinkStyled, LinkButtonStyled }
