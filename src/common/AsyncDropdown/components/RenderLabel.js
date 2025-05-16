import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`

const RenderLabel = ({ render, htmlFor, ...props }) => {
  if (!render) {
    return (
      <Label htmlFor={htmlFor} {...props}>
        {props.label}
      </Label>
    )
  }

  return render({ htmlFor, ...props })
}

export default RenderLabel
