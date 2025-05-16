import styled, { css } from 'styled-components'
import {
  preventSelectFn,
  responsiveProps,
  enableEllipsisFn,
  font,
  colors,
} from '@common/Theme'

const underlineFn = css`
  ${(props) =>
    props.underline &&
    css`
      text-decoration: underline;
      text-decoration-color: ${colors.white};
      text-decoration-thickness: 2px;
    `}
`

const TextStyled = styled.p`
  font-size: 16px;
  line-height: 20px;
  display: block;
  margin: 0;
  text-transform: none;
  font-family: ${font.fontFamilyDefault};

  &::selection {
    background: rgba(183, 149, 217, 0.5);
    color: white;
  }

  span {
    font-size: 14px;
    margin-left: 8px;
    color: grey;
  }

  ${underlineFn};
  ${({ $whiteSpace }) => responsiveProps('white-space', $whiteSpace)};
  ${({ $lineHeight }) => responsiveProps('line-height', $lineHeight)};
  ${({ $fontWeight }) => responsiveProps('font-weight', $fontWeight)};
  ${({ $width }) => responsiveProps('width', $width)};
  ${({ $color }) => responsiveProps('color', $color)};
  ${({ $pl }) => responsiveProps('padding-left', $pl)};
  ${({ $pt }) => responsiveProps('padding-top', $pt)};
  ${({ $ml }) => responsiveProps('margin-left', $ml)};
  ${({ $mb }) => responsiveProps('margin-bottom', $mb)};
  ${({ $mt }) => responsiveProps('margin-top', $mt)};
  ${({ $textAlign }) => responsiveProps('text-align', $textAlign)};
  ${({ $fontSize }) => responsiveProps('font-size', $fontSize)};
  ${({ $size }) => responsiveProps('font-size', $size)};
  ${({ $userSelect }) => responsiveProps('user-select', $userSelect)};

  ${({ $display }) => responsiveProps('display', $display)};

  ${preventSelectFn};
  ${enableEllipsisFn};
`

export { TextStyled }
