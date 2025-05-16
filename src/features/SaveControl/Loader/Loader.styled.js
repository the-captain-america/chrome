import { mrFn, mlFn } from '@common/Theme'
import styled, { css } from 'styled-components'

const LoaderContainer = styled.div.attrs({ className: 'LoaderContainer' })`
  background: transparent;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  ${mrFn};
  ${mlFn};
  ${(props) =>
    props.position === 'absolute' &&
    css`
      z-index: 100;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    `};
  ${(props) => props.extend};
`

const LoaderContent = styled.div`
  color: #a9aeb9;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  margin-top: 10px;
  text-align: center;
  color: #1d2a43;
  font-weight: 500;
  font-size: 16px;
`

export { LoaderContainer, LoaderContent }
