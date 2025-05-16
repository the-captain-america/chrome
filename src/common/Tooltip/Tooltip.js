import React, { useRef, useState } from 'react'
import ClickOutside from '@hooks/useClickOutside'

import {
  TooltipContent,
  TooltipContainer,
  TooltipPlaceholder,
  TooltipIcon,
  TooltipText,
} from './Tooltip.styled'

const Tooltip = ({ position = 'right', title = 'Tooltip', children }) => {
  const node = useRef()
  const [isVisible, setState] = useState(false)

  const onClose = () => {
    setState(false)
  }

  return (
    <ClickOutside
      className="outside"
      callback={onClose}
      style={{
        position: 'relative',
        userSelect: 'none',
        alignSelf: 'flex-start',
        maxWidth: '120px',
      }}
    >
      <TooltipContainer
        className="tooltip-container"
        data-testid="tooltip"
        ref={node}
        onClick={() => setState(!isVisible)}
      >
        <TooltipPlaceholder
          className="tooltip-placeholder"
          data-testid="tooltip-placeholder"
        >
          {children}
        </TooltipPlaceholder>
        {isVisible && (
          <TooltipContent
            className={`tooltip-content ${position}`}
            position={position}
            data-testid="tooltip-content"
          >
            <TooltipText className="tooltip-text">
              <span>{title}</span>
            </TooltipText>
            <div className="tooltip-icon">
              <TooltipIcon />
            </div>
          </TooltipContent>
        )}
      </TooltipContainer>
    </ClickOutside>
  )
}

export { Tooltip }
