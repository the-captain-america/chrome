import React from 'react'
import styled, { css } from 'styled-components'

const OverlayItem = styled.div.attrs({ className: 'OverlayItem' })`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 100;
  display: block;
  ${(props) =>
    props.position &&
    css`
      position: ${props.position};
    `}
  ${(props) =>
    props.blur &&
    css`
      width: 100%;
      height: 100%;
      will-change: filter, transform, opacity;
      transition: -webkit-filter 1s linear;
      transition: filter 1s linear;
      transition: filter 1s linear, -webkit-filter 1s linear;
      filter: blur(15px);
    `}
`

const Overlay = ({ children, position, ...props }) => {
  const location = (type = 'absolute') =>
    ({
      ABSOLUTE: 'absolute',
      FIXED: 'fixed',
    }[type.toUpperCase()])
  return (
    <OverlayItem position={location(position)} {...props}>
      {children}
    </OverlayItem>
  )
}

export { Overlay }
