import styled from 'styled-components'
import {
  mtFn,
  mbFn,
  mrFn,
  mlFn,
  colors,
  pbFn,
  responsiveProps,
} from '@common/Theme'

const LabelContainer = styled.div`
  color: white;
  font-weight: 300;
  font-size: 14px;
  padding-bottom: 8px;
  display: flex;
  width: 100%;
  align-items: center;
  color: #b2b2b2;
  ${({ mt }) => responsiveProps('margin-top', mt)};
  ${({ mb }) => responsiveProps('margin-bottom', mb)};
  ${({ pb }) => responsiveProps('padding-bottom', pb)};

  ${mrFn};
  ${mlFn};
  ${pbFn}

  span {
    font-size: 16px;
    color: ${colors.white};
    font-weight: 600;
    margin: 0;
    ${({ fontWeight }) => responsiveProps('font-weight', fontWeight)};
    ${({ fontSize }) => responsiveProps('font-size', fontSize)};
    ${({ lineHeight }) => responsiveProps('line-height', lineHeight)};
    ${({ color }) => responsiveProps('color', color)};
  }
`

export { LabelContainer }
