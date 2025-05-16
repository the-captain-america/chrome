import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@common/Icon'
import { SpinnerWrapper } from './Spinner.styled'

const Spinner = ({
  children,
  size,
  config,
  path,
  circle,
  extend,
  ...props
}) => {
  return (
    <SpinnerWrapper extend={extend} circle={circle} path={path} {...props}>
      <Icon size={size} name="LOADER" {...props} />
      {children}
    </SpinnerWrapper>
  )
}

Spinner.defaultProps = {
  size: 40,
  config: {},
  circle: '',
  path: '',
}

Spinner.propTypes = {
  size: PropTypes.number,
  config: PropTypes.object,
  circle: PropTypes.string,
  path: PropTypes.string,
}

export { Spinner }
