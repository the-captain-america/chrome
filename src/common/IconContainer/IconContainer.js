import React from 'react'
import { includes, toUpper, length, keys } from 'ramda'
import { Primary, Secondary, Tertiary } from './IconContainer.styled'

const IconContainer = ({ variant = '', children, ...props }) => {
  const upperCaseVariant = toUpper(variant)

  const config = {
    PRIMARY: <Primary {...props}>{children}</Primary>,
    SECONDARY: <Secondary {...props}>{children}</Secondary>,
    TERTIARY: <Tertiary {...props}>{children}</Tertiary>,
  }

  if (
    !variant ||
    !length(upperCaseVariant) ||
    !includes(upperCaseVariant)(keys(config))
  ) {
    return <Primary {...props}>{children}</Primary>
  }

  return config[upperCaseVariant]
}

export { IconContainer }
