import styled from 'styled-components'
import { responsiveProps } from '@common/Theme'
import arrow from '../assets/arrow.png'

const ModalElement = styled.div`
  position: absolute;
  background: rgb(40, 46, 51);
  outline: none;
  border: 2px solid rgb(51, 59, 68);
  width: 334px;
  border-radius: 4px;
  padding: 16px;
  overflow: visible;
  z-index: 1000;
  ${({ top }) => responsiveProps('top', top)};
  ${({ right }) => responsiveProps('right', right)};
  ${({ bottom }) => responsiveProps('bottom', bottom)};
  ${({ left }) => responsiveProps('left', left)};
  ${({ transform }) => responsiveProps('transform', transform)};
  &:before {
    content: '';
    position: absolute;
    top: -8px;
    right: 50%;
    height: 8px;
    width: 16px;
    transform: translateX(calc(-50% + 8px));
    /* background: url(${arrow}); */
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
`

export { ModalElement }
