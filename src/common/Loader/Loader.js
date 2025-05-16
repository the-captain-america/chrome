import React from 'react'
import styled from 'styled-components'

import { Overlay } from '@common/Overlay'
import { Spinner } from '@common/Spinner'

const LoaderContainer = styled.div.attrs({ className: 'LoaderContainer' })`
  background: transparent;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 32px;
  height: 32px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.4);
  transform: translate(-50%, -50%);
  z-index: 100;
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

const Loader = ({
  message = '',
  extend,
  position = 'fixed',
  hasOverlay = false,
  ...props
}) => (
  <>
    <LoaderContainer>
      <Spinner extend={extend} {...props} />
      {message && <LoaderContent>{message}</LoaderContent>}
    </LoaderContainer>

    {hasOverlay && <Overlay position={position} />}
  </>
)

export { Loader }
