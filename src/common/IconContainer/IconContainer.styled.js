import styled, { css } from 'styled-components'
import { includes, toUpper } from 'ramda'
import { mbFn, mlFn, mtFn } from '@common/Theme'

const baseFlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const baseRotate = css`
  transition: all 0.1s ease-in-out;
  transform-origin: 50% 50%;
  transform: rotate(0deg);
  ${(props) => {
    const { rotate = '0' } = props
    return css`
      transform: rotate(${rotate}deg);
    `
  }}
`

const basePosition = css`
  ${(props) => {
    const { position = '' } = props
    if (toUpper(position) === 'RIGHT') {
      return css`
        position: absolute;
        right: 0;
        top: 0;
      `
    }
    if (toUpper(position) === 'LEFT') {
      return css`
        position: absolute;
        left: 0;
        top: 0;
      `
    }
  }}
`

const baseFunctions = css`
  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `};
  ${(props) => {
    const { size = '' } = props
    const hasUnit = includes('px')(size)
    const determineUnit = hasUnit ? size : `${size}px`
    if (size) {
      return css`
        height: ${determineUnit};
        width: ${determineUnit};
      `
    }
  }}
`

const Primary = styled.div.attrs({ className: 'primary' })`
  ${baseFlexCenter};
  ${baseFunctions};
  ${mtFn};
  ${mbFn};
  ${mlFn};
`

const Secondary = styled.div.attrs({ className: 'secondary' })`
  ${baseFlexCenter};
  ${baseFunctions};
  ${basePosition};
  ${baseRotate};
  ${mtFn};
  ${mbFn};
  ${mlFn};
`

const Tertiary = styled.div.attrs({ className: 'tertiary' })`
  ${baseFlexCenter};
  ${baseFunctions};
  ${mtFn};
  ${mbFn};
  ${mlFn};
  height: 100%;
  padding: 10px 6px 13px 10px;
`

export { Primary, Secondary, Tertiary }
