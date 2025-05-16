import { mbFn, mtFn } from '@common/Theme'
import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

const ElementWrapper = styled.div`
  ${mtFn};
  ${mbFn};
  ${(props) => props.extend};
`

function useOutsideAlerter({ ref, callback }) {
  /**
   * Alert if clicked on outside of element
   */
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback()
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })
}

const useClickOutside = ({
  children,
  style,
  mb,
  mt,
  className,
  callback = () => {},
  extend,
  ...props
}) => {
  const wrapperRef = useRef(null)
  // eslint-disable-next-line react/prop-types
  useOutsideAlerter({ ref: wrapperRef, callback })

  // eslint-disable-next-line react/prop-types
  return (
    <ElementWrapper
      ref={wrapperRef}
      style={style}
      mb={mb}
      mt={mt}
      className={className}
      extend={extend}
    >
      {children}
    </ElementWrapper>
  )
}

export default useClickOutside
