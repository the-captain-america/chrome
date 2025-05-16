import React, { useState, useEffect, useRef } from 'react'
import { Icon } from '@common/Icon'
import PropTypes from 'prop-types'
import { prop } from 'ramda'
import { useDebounce } from '@hooks/useDebounce'
import { usePrevious } from '@hooks/usePrevious'
import {
  ExpanderContainer,
  ExpanderHeader,
  ExpanderControls,
  ExpanderButton,
  ExpanderTitle,
  ExpanderContent,
} from './Expander.styled'

import { Checkmark } from './Checkmark'

const Expander = ({
  isActive,
  isComplete,
  title,
  children,
  button = null,
  mt,
  shouldUpdate,
  config = {},
}) => {
  const layoutStyle = prop('layout')(config) || {}
  const titleStyle = prop('title')(config) || {}
  const contentStyle = prop('content')(config) || {}
  const [localActive, setActiveState] = useState(false)
  const [heightState, setHeightState] = useState(0)
  const content = useRef(null)

  const prevState = usePrevious(shouldUpdate)
  const debouncedClose = useDebounce(prevState, 500)

  useEffect(() => {
    setActiveState(isActive)
    if (isActive) {
      setActiveState(true)
      if (content.current) {
        setHeightState(content.current.scrollHeight + 72)
      }
    } else {
      setActiveState(false)
      setHeightState(0)
    }
    // eslint-disable-next-line
  }, [isActive])

  useEffect(() => {
    if (isActive) {
      setActiveState(true)
      if (content.current) {
        setHeightState(content.current.scrollHeight + 72)
      }
    }
    // eslint-disable-next-line
  }, [isActive])

  useEffect(() => {
    if (prevState === shouldUpdate) {
      if (content.current) {
        setHeightState(content.current.scrollHeight + 72)
      }
    }
    // eslint-disable-next-line
  }, [debouncedClose])

  useEffect(() => {
    if (isComplete) {
      setActiveState(isComplete)
    }
    // eslint-disable-next-line
  }, [isComplete])

  const onLocalPress = () => {
    setActiveState(!localActive)
    setHeightState(localActive ? 0 : content.current.scrollHeight + 72)
  }

  const { background } = layoutStyle
  return (
    <ExpanderContainer mt={mt} bgColor={background} style={{ ...layoutStyle }}>
      <ExpanderHeader>
        <Checkmark isActive={isComplete} />
        {button}
        {title && <ExpanderTitle style={titleStyle}>{title}</ExpanderTitle>}
        {config?.enableExpander && (
          <ExpanderControls>
            <ExpanderButton
              onClick={onLocalPress}
              isActive={localActive}
              className="COLLAPSE_MENU"
            >
              <Icon name="COLLAPSE_MENU" rotate={90} size={20} />
            </ExpanderButton>
          </ExpanderControls>
        )}
      </ExpanderHeader>
      <ExpanderContent
        ref={content}
        maxHeight={`${heightState}px`}
        style={{ ...contentStyle }}
        className="accordion__content"
      >
        {children}
      </ExpanderContent>
    </ExpanderContainer>
  )
}

Expander.propTypes = {
  config: PropTypes.object,
  isActive: PropTypes.bool,
  title: PropTypes.string,
}

Expander.defaultProps = {
  config: {},
  title: '',
}

export { Expander }
