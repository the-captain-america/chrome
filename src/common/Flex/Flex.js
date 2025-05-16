import styled from 'styled-components'
import { responsiveProps } from '@common/Theme'

const Flex = styled.div.attrs({ className: 'Flex' })`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
  ${({ flex }) => responsiveProps('flex', flex)};
  ${({ mt }) => responsiveProps('margin-top', mt)};
  ${({ mb }) => responsiveProps('margin-bottom', mb)};
  ${({ flexDirection }) => responsiveProps('flex-direction', flexDirection)};
  ${({ align }) => responsiveProps('align-items', align)};
  ${({ $alignItems }) => responsiveProps('align-items', $alignItems)};
  ${({ $justifyContent }) =>
    responsiveProps('justify-content', $justifyContent)};
  ${({ justify }) => responsiveProps('justify-content', justify)};
  ${({ padding }) => responsiveProps('padding', padding)};
  ${({ gap }) => responsiveProps('gap', gap)};
  ${({ flexWrap }) => responsiveProps('flex-wrap', flexWrap)};
  ${({ width }) => responsiveProps('width', width)};
  ${({ maxWidth }) => responsiveProps('max-width', maxWidth)};
  ${({ $minHeight }) => responsiveProps('min-height', $minHeight)};
  ${({ $bgColor }) => responsiveProps('background-color', $bgColor)};
`

export { Flex }
