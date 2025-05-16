import React from 'react'

import { Overlay } from '@common/Overlay'
import { Spinner } from '@common/Spinner'
import { LoaderContainer, LoaderContent } from './Loader.styled'

const Loader = ({
  message = '',
  extend = null,
  position = 'fixed',
  hasOverlay = false,
  path = 'black',
  circle = 'transparent',
  ml,
  mr,
  ...props
}) => {
  return (
    <>
      <LoaderContainer extend={extend} position={position} ml={ml} mr={mr}>
        <Spinner circle={circle} path={path} {...props} />
        {message && <LoaderContent>{message}</LoaderContent>}
      </LoaderContainer>

      {hasOverlay && <Overlay position={position} />}
    </>
  )
}
export { Loader }
