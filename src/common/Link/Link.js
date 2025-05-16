import React from 'react'
import PropTypes from 'prop-types'
import { LinkStyled, LinkButtonStyled } from './Link.styled'

const Link = ({ as, ...props }) => {
  const type = as ? as.toUpperCase() : 'LINK'

  const Component = {
    LINK: LinkStyled,
    LINK_BUTTON: LinkButtonStyled,
  }[type]

  return <Component {...props} />
}

Link.defaultProps = {
  mt: 0,
  mb: 0,
  underline: false,
  config: {},
  as: 'LINK',
}

Link.propTypes = {
  mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  underline: PropTypes.bool,
  config: PropTypes.object,
  as: PropTypes.string,
  extend: PropTypes.string,
}

export { Link }
