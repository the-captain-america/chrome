import React from 'react'
import PropTypes from 'prop-types'
import { ControlContainer } from './Controls.styled'

const Controls = ({
  children,
  mt,
  mb,
  padding,
  right,
  left,
  pb,
  pt,
  className,
  extend,
  ...props
}) => (
  <ControlContainer
    mt={mt}
    mb={mb}
    padding={padding}
    className={className}
    right={right}
    pt={pt}
    pb={pb}
    left={left}
    extend={extend}
    {...props}
  >
    {children}
  </ControlContainer>
)

Controls.defaultProps = {
  mt: 0,
  mb: 0,
  col: 0,
  right: false,
  left: true,
  padding: '',
  className: '',
}

Controls.propTypes = {
  mt: PropTypes.number,
  mb: PropTypes.number,
  className: PropTypes.string,
  padding: PropTypes.string,
  right: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export { Controls, ControlContainer }
