import React, { useState } from 'react'
import { Button } from '@common/Button'
import styled, { keyframes, css } from 'styled-components'

const moveUp = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-80px); }
`

const moveLeft = keyframes`
  0% { transform: translateY(-80px); }
  100% { transform: translate(-300px, -80px); }
`

const dissolve = keyframes`
  0% { opacity: 1; transform: translate(-300px, -80px); }
  100% { opacity: 0; transform: translate(-300px, -80px) scale(0.5); }
`

const EscapingButton = styled(Button)`
  position: absolute;
  z-index: 999;
  transition: transform 0.4s ease-out, opacity 0.4s ease-out;
  ${({ $hoverCount }) =>
    $hoverCount === 1
      ? css`
          animation: ${moveUp} 0.4s forwards;
        `
      : $hoverCount === 2
      ? css`
          animation: ${moveLeft} 0.4s forwards;
        `
      : $hoverCount >= 3
      ? css`
          animation: ${dissolve} 0.6s forwards;
        `
      : ''}
`
const renderButtons = ({
  buttons,
  callback,
  loading,
  rejectCount,
  hoverCount,
  setHoverCount,
  config, // New config prop
}) => {
  const shouldHideEscapeButton = hoverCount >= 2 // Hide after 2 hovers
  const isEscapeButtonEnabled = config?.enableEscapeButton ?? true // Default to enabled

  return (
    <>
      {/* Always show original buttons */}
      {buttons.map(({ label, value, variant }) => (
        <Button
          key={value}
          width="100%"
          variant={variant || (value === 'CONFIRM' ? 'green' : 'red')}
          justifyContent="center"
          onClick={() => callback({ action: value })}
        >
          {loading && value === 'CONFIRM' ? (
            <Spinner />
          ) : (
            <span className="label">{label}</span>
          )}
        </Button>
      ))}

      {/* Show escaping button only if it's enabled AND rejectCount >= 2 AND it hasn’t been hovered twice */}
      {isEscapeButtonEnabled && rejectCount >= 2 && !shouldHideEscapeButton && (
        <EscapingButton
          variant="green"
          width="100%"
          $hoverCount={hoverCount}
          onMouseOver={() => setHoverCount((prev) => prev + 1)}
        >
          <span className="label">Ok fine, you win</span>
        </EscapingButton>
      )}
    </>
  )
}

export { renderButtons }
