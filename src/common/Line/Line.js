import styled from 'styled-components'
import { bgColorFn, responsiveProps } from '@common/Theme'

const Line = styled.hr.attrs({ className: 'line' })`
  background: #333b44;
  ${bgColorFn};
  width: 100%;
  height: 1px;
  margin-top: 24px;
  margin-bottom: 24px;
  border: none;
  ${({ $mt }) => responsiveProps('margin-top', $mt)};
  ${({ $mb }) => responsiveProps('margin-bottom', $mb)};
`

export { Line }
