import { responsiveProps } from '@common/Theme'
import styled from 'styled-components'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 998;
`

const ModalHeader = styled.header.attrs({ className: 'modal-header' })`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  ${({ $padding }) => responsiveProps('padding', $padding)};
`

const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  ${({ $bgColor }) => responsiveProps('background-color', $bgColor)};
  ${({ $width }) => responsiveProps('width', $width)};
  ${({ $maxWidth }) => responsiveProps('max-width', $maxWidth)};
  ${({ $minWidth }) => responsiveProps('min-width', $minWidth)};
  ${({ $padding }) => responsiveProps('padding', $padding)};
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Controls = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  margin-top: 24px;
  ${({ $padding }) => responsiveProps('padding', $padding)};
`

export { ModalOverlay, ModalHeader, ModalContainer, ModalContent, Controls }
