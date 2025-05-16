import React from 'react'
import { TextStyled } from './Text.styled'

const Text = ({
  as = 'p',
  mt,
  mb,
  size,
  fontWeight,
  lineHeight,
  pl,
  pt,
  color,
  fontSize,
  userSelect,
  children,
  ...props
}) => {
  return (
    <TextStyled
      as={as}
      $mt={mt}
      $mb={mb}
      $size={size}
      $color={color}
      $fontSize={fontSize}
      $pl={pl}
      $pt={pt}
      $userSelect={userSelect}
      $fontWeight={fontWeight}
      $lineHeight={lineHeight}
      {...props}
    >
      {children}
    </TextStyled>
  )
}

export { Text }
