import React from 'react'
import { FieldElement } from './FieldGroup.styled'
import { Col } from '@common/Grid'

const getVariant = (variant, col) => {
  const hasCol = col && col.length > 1 && col[0] > 1
  if (hasCol) return 'COL'
  return variant ? variant.toUpperCase() : 'FRAGMENT'
}

const FieldGroup = ({ variant, col = [1], children, extend, ...props }) => {
  const type = getVariant(variant, col)

  return {
    FRAGMENT: <>{children}</>,
    ELEMENT: (
      <FieldElement extendTo={extend} {...props}>
        {children}
      </FieldElement>
    ),
    COL: (
      <Col xs={col[0]} sm={col[1]}>
        <FieldElement extendTo={extend} {...props}>
          {children}
        </FieldElement>
      </Col>
    ),
  }[type]
}

export { FieldGroup }
