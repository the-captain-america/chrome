import React, { useRef, useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useOnClickOutside } from '@hooks/useOnClickOutside'
import { Icon } from '@common/Icon'
import { usePortal as Portal } from '@hooks/usePortal'
import {
  Heading,
  ModalContainer,
  ModalWrapper,
  ModalStyledContent,
  CloseButton,
  Overlay,
  SideElement,
  FooterElement,
  Block,
  Controls,
  ExpandButton,
} from './Modal.styled'
import { prop } from 'ramda'
import useDisableBodyScroll from '@hooks/useDisableBodyScroll'

const Modal = ({
  children,
  config = {},
  title,
  disableBodyScroll = true,
  components = [],
  callback = () => {},
}) => {
  const position = prop('position')(config) || 'fixed'
  const maxHeight = prop('maxHeight')(config) ?? '100vh'
  const hasExpand = prop('hasExpand')(config) || false
  const enableControls = prop('enableControls')(config) ?? true
  const maxWidth = config.maxWidth || ''
  const refClickOutside = useRef()
  const [isExpanded, setExpanded] = useState(true)

  const renderPortals = (items = []) => {
    if (!items.length) return null
    return items.map((item) => (
      <Portal selector={`#${item.id}`} key={item.id}>
        {item.component}
      </Portal>
    ))
  }

  useDisableBodyScroll(disableBodyScroll)

  useOnClickOutside(refClickOutside, () => {
    callback({ action: 'CLOSE' })
  })

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      callback({ action: 'CLOSE' })
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false)
    return () => {
      document.removeEventListener('keydown', escFunction, false)
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const onExpand = () => setExpanded(!isExpanded)

  const renderBackground = () => {
    if (!components || !components.length) {
      return <Overlay level={1} isActive position={position} />
    }

    const id = components.find((item) => item.id === 'background')?.id
    if (!id) {
      return <Overlay level={1} isActive position={position} />
    }

    return <div id={id} />
  }

  const renderSide = () => {
    if (!components || !components.length) return null
    const id = components.find((item) => item.id === 'side')?.id
    return <SideElement id={id} />
  }

  const renderFooter = () => {
    if (!components || !components.length) return null
    const id = components.find((item) => item.id === 'footer')?.id
    return <FooterElement id={id} />
  }

  const renderWrapper = (
    <>
      {renderPortals(components)}
      <ModalWrapper
        position={position}
        ref={refClickOutside}
        level={9}
        className="ModalWrapper"
        maxHeight={maxHeight}
        maxWidth={maxWidth}
      >
        {/* {renderSide()} */}
        <ModalContainer>
          <Block padding="24px" direction="row" justifyContent="space-between">
            <Heading>{title}</Heading>
            {enableControls && (
              <Controls>
                {hasExpand && (
                  <ExpandButton onClick={onExpand}>
                    <Icon name={isExpanded ? 'COLLAPSE' : 'EXPAND'} size={20} />
                  </ExpandButton>
                )}
                <CloseButton onClick={() => callback({ action: 'CLOSE' })}>
                  <Icon name="CLOSE" size={20} />
                </CloseButton>
              </Controls>
            )}
          </Block>
          <ModalStyledContent maxHeight={maxHeight} isExpanded={isExpanded}>
            {children}
          </ModalStyledContent>
        </ModalContainer>
        {renderFooter()}
      </ModalWrapper>
      {renderBackground()}
    </>
  )

  return renderWrapper
}

Modal.propTypes = {
  children: PropTypes.node,
  config: PropTypes.shape({
    maxWidth: PropTypes.number,
  }),
}

export { Modal }
