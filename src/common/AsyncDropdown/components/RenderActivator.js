import React from 'react'
import DropdownActivator from './DropdownActivator'

const RenderActivator = ({
  renderActivator,
  onClick = () => {},
  isOpen = false,
  zIndex,
  ...props
}) => {
  const handleKeyDown = (event) => {
    if (event.key === ' ' || event.key === 'Enter' || event.key === 'Return') {
      event.preventDefault()
      onClick()
    }
  }

  const activatorProps = {
    onClick,
    onKeyDown: handleKeyDown,
    isOpen,
    zIndex,
    tabIndex: 0,
    'aria-label': 'Toggle dropdown',
    role: 'button',
    ...props,
  }

  if (!renderActivator) {
    return <DropdownActivator {...activatorProps} />
  }

  return renderActivator(activatorProps)
}

export default RenderActivator
