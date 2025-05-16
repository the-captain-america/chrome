import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { toLower, toUpper } from 'ramda'
import { Copy, Text, White, Blue, Grey, Purple, Green, Red, RedCircle, Gold } from './Button.styled'

const buttons = {
  COPY: Copy,
  TEXT: Text,
  WHITE: White,
  BLUE: Blue,
  GREY: Grey,
  PURPLE: Purple,
  GOLD: Gold,
  GREEN: Green,
  RED: Red,
  RED_CIRCLE: RedCircle,
}

const validateButton = (givenCode, defaultCode) => {
  const code = givenCode && givenCode.length > 0 ? toUpper(givenCode) : defaultCode
  const isCodeValid = code in buttons

  if (isCodeValid) return code
  return toUpper(defaultCode)
}

const Button = forwardRef(
  (
    {
      variant,
      ml,
      mb,
      mt,
      label,
      padding,
      width,
      justifyContent,
      maxWidth,
      minWidth,
      enableFocus,
      children,
      type = 'button',
      config,
      ...props
    },
    ref
  ) => {
    const { center } = config || {}

    const defaultCode = 'green'
    const code = validateButton(variant, defaultCode)

    const Component = buttons[code]

    return (
      <Component
        $ml={ml}
        $mb={mb}
        $mt={mt}
        $center={center}
        tabIndex={0}
        $padding={padding}
        $justifyContent={justifyContent}
        $width={width}
        $maxWidth={maxWidth}
        $minWidth={minWidth}
        $enableFocus={enableFocus}
        type={type}
        ref={ref}
        {...props}
      >
        {label && <span className="label center">{label}</span>}
        {children}
      </Component>
    )
  }
)

Button.defaultProps = {
  mt: 0,
  mb: 0,
  underline: false,
  type: 'button',
  enableFocus: true,
  config: {},
  variant: 'primary',
}

Button.propTypes = {
  mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  underline: PropTypes.bool,
  type: PropTypes.string,
  config: PropTypes.object,
  variant: PropTypes.string,
}

export { Button, buttons }
