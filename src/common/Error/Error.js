import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@common/Icon'

import { ErrorContainer, ErrorIcon, ErrorContent } from './Error.styled'

const getClassName = (variant, className) => {
  return `error-container ${variant?.toLowerCase()} ${className || ''}`.trim()
}

const Error = ({
  children,
  title = '',
  mt,
  mb,
  icon = '',
  error = '',
  name,
  viewBox = '0 0 24 24',
  id,
  className,
  variant = 'error',
  role,
  isTopError,
}) => {
  const collatedClassName = getClassName(variant, className)
  const errorId = id ? `${id}-error` : `${name}-error`
  return (
    <ErrorContainer
      id={errorId}
      data-testid="error"
      className={collatedClassName}
      mt={mt}
      mb={mb}
      {...(role && { role })}
      {...(isTopError && { 'aria-live': 'assertive' })}
      {...(isTopError && { 'aria-atomic': 'true' })}
    >
      {!!icon && (
        <ErrorIcon className="icon-container" aria-hidden="true">
          <Icon name={icon} viewBox={viewBox} size={24} />
        </ErrorIcon>
      )}
      <ErrorContent className="error-content">
        {title && <span className="error-title">{title}</span>}
        {children || error}
      </ErrorContent>
    </ErrorContainer>
  )
}

Error.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  variant: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  isTopError: PropTypes.bool,
}

export { Error }
