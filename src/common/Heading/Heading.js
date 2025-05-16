import React from 'react'
import PropTypes from 'prop-types'
import { prop, isEmpty, toLower } from 'ramda'
import { Primary, Secondary, Tertiary } from './Heading.styled'

const codeOptions = {
  primary: Primary,
  secondary: Secondary,
  tertiary: Tertiary,
}

const validateHeading =
  (givenCode, defaultCode = 'primary') =>
  (options) => {
    if (!givenCode || givenCode.length <= 0) return defaultCode
    const code =
      givenCode && givenCode.length > 0 ? toLower(givenCode) : defaultCode
    const isCodeValid = code in options

    if (isCodeValid) return code
    return toLower(defaultCode)
  }

const Heading = ({
  variant = 'primary',
  label = '',
  config = {},
  size = 18,
  underline = false,
  children,
  ...props
}) => {
  const code = validateHeading(variant)(codeOptions)

  const Component = codeOptions[code]
  return (
    <Component labelText={!!isEmpty(label)} {...props}>
      {label || children}
    </Component>
  )
}

Heading.propTypes = {
  mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  underline: PropTypes.bool,
  config: PropTypes.object,
  size: PropTypes.number,
  variant: PropTypes.string,
}

export { Heading, validateHeading }
