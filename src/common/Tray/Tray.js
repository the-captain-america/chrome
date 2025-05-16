import React, { useEffect, useRef } from 'react'
import { useOnClickOutside } from '@hooks/useOnClickOutside'
import { Heading } from '@common/Heading'
import { useEscape } from '@hooks/useEscape'
import TrayClose from './TrayClose'
import {
  TrayContainer,
  TrayHeader,
  TrayContent,
  TrayOverlay,
} from './Tray.styled'
import useDisableBodyScroll from '@hooks/useDisableBodyScroll'

const applyHeights = (height) => {
  if (
    !height ||
    (typeof height === 'object' &&
      height !== null &&
      !Object.values(height).length)
  ) {
    return {}
  }
  return {
    minHeight: height,
    height,
  }
}

const Tray = ({
  title = '',
  isActive,
  height,
  onClose = () => {},
  children,
}) => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    ref.current.style.display = isActive ? 'block' : 'none'

    if (!isActive) return

    ref.current?.showModal()

    return () => {
      if (!ref.current) return
      ref.current.close()
    }
  }, [isActive])

  useEscape((e) => {
    // Prevent the default behavior of the escape key
    // e.preventDefault()
    onClose()
  })

  useDisableBodyScroll(true)
  useOnClickOutside(ref, onClose)
  return (
    <>
      <TrayContainer
        className={isActive ? 'tray-container is-open' : 'tray-container'}
        role="dialog"
        ref={ref}
        $height={`100%`}
        $maxHeight={800}
        aria-label={title}
        {...applyHeights(height)}
      >
        <TrayHeader className="tray-header">
          {title && (
            <Heading
              variant="h2"
              color="white"
              className="tray-heading"
              size={20}
            >
              {title}
            </Heading>
          )}
          <TrayClose className="tray-close" onClick={onClose} />
        </TrayHeader>
        {children && (
          <TrayContent className="tray-content" enableScroll={children}>
            {children}
          </TrayContent>
        )}
      </TrayContainer>
      <TrayOverlay className={isActive ? 'is-open' : ''} onClick={onClose} />
    </>
  )
}

export { Tray }
