import React from 'react'
import styled from 'styled-components'

const PlaceholderWrapper = styled.div`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: #807f7f;
  pointer-events: none;
  transition: opacity 0.1s;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  z-index: 1;
  white-space: nowrap;
  font-weight: 500;
`

const RenderPlaceholder = ({ placeholder, visible, id, ...props }) => {
  if (!placeholder) return null

  return (
    <PlaceholderWrapper
      {...(id ? { id: `${id}-placeholder` } : {})}
      role="status"
      aria-live="polite"
      $visible={visible}
      {...props}
    >
      {placeholder}
    </PlaceholderWrapper>
  )
}

export default RenderPlaceholder
