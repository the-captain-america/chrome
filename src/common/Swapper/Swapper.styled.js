import { colors, responsiveProps } from '@common/Theme'
import styled, { css } from 'styled-components'

const Container = styled.div`
  background: transparent;
  border-radius: 6px;
  box-sizing: border-box;
  flex-direction: row;
  ${({ $width }) => responsiveProps('width', $width)};
  ${({ $mt }) => responsiveProps('margin-top', $mt)};
  ${({ $mb }) => responsiveProps('margin-bottom', $mb)};
`

const SwapSwatch = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;

  ${(props) => {
    if (props.bgColor === colors.white) {
      return css`
        border: 1px solid ${colors.lightGreyAccent};
      `
    }
    if (props.bgColor === 'transparent') {
      return css`
        border: 1.5px solid ${colors.lightGreyAccent};
        background: ${colors.transparent};
      `
    }
    return css`
      background: ${props.bgColor};
    `
  }}
`

const SwapLabel = styled.span`
  &.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap; /* Prevent the text from wrapping */
    border: 0;
  }
`
const SwapButton = styled.button`
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.nightSky};
  border: 1.5px solid ${colors.lightGreyAccent};
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: rgb(29, 34, 39);
    border: 1.5px solid ${colors.lightGreyAccent};
  }
  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #a9aeb9;
  }
`

export { Container, SwapButton, SwapLabel, SwapSwatch }
