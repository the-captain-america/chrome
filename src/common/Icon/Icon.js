import React from 'react'
import * as icons from './icons'
import { Svg } from './Icon.styled'

const isValid = (name) => {
  if (!name || name.length <= 0) return false
  if (typeof name !== 'string') return false
  return true
}

const Icon = ({
  name = '',
  size = 20,
  rotate = 0,
  fill = 'default',
  stroke = 'default',
  viewBox = '0 0 20 20',
  ml,
  mr,
  flip = false,
  ariaHidden = true,
  ...props
}) => {
  if (!isValid(name)) return null

  const matchedIcon = Object.keys(icons).includes(name.toUpperCase())

  if (!matchedIcon) {
    console.warn(`Icon not found: ${name.toUpperCase()}`)
    return null
  }

  const Path = icons[name.toUpperCase()]
  const normalizedFill = fill === 'default' ? undefined : fill
  const normalizedStroke = stroke === 'default' ? undefined : stroke
  return (
    <Svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox={viewBox}
      rotate={rotate}
      className={name}
      flip={flip}
      ml={ml}
      mr={mr}
      aria-hidden="true"
    >
      <Path
        size={size}
        fill={normalizedFill}
        stroke={normalizedStroke}
        aria-hidden="true"
        {...props}
      />
    </Svg>
  )
}

export { Icon }
