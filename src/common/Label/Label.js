import React from 'react'
import { LabelContainer } from './Label.styled'

const Label = ({ className = '', mb, children, ...props }) => (
  <LabelContainer className={className} mb={mb} {...props}>
    {children && <span className="label">{children}</span>}
  </LabelContainer>
)

export { Label }
