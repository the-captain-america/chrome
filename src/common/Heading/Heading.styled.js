import styled, { css } from 'styled-components'
import { fontSizeFn, mtFn, mbFn, colorFn } from '@common/Theme'

const basicStyles = css`
  display: flex;
  flex-direction: row;
  border: none;
  box-sizing: border-box;
  padding: 0;
  width: 100%;
`

const basicText = css`
  line-height: 1rem;
  font-size: 27px;
  font-weight: 500;
`

const secondaryText = css`
  line-height: 1rem;
  font-size: 22px;
  font-weight: 500;
`

const tertiaryText = css`
  line-height: 1rem;
  font-size: 18px;
  font-weight: 500;
`

const Primary = styled.h1`
  ${basicStyles};
  ${basicText};
  ${mtFn};
  ${mbFn};
  ${fontSizeFn};
  ${colorFn};
`
const Secondary = styled.h2`
  ${basicStyles};
  ${secondaryText};
  ${mtFn};
  ${mbFn};
  ${colorFn};
`
const Tertiary = styled.h3`
  ${basicStyles};
  ${tertiaryText};
  ${mtFn};
  ${mbFn};
  ${colorFn};
`

export { Primary, Secondary, Tertiary }
