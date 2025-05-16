import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { paddingFn, mbFn, mtFn } from '@common/Theme'

const SectionContentElement = styled.div.attrs({ className: 'SectionContent' })`
  padding: 0 16px;
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  border-radius: 4px;
  ${paddingFn};
  h2 {
    font-weight: 600;
    font-size: 20px;
    color: white;
  }
  ${mbFn};
  ${mtFn};
  ${(props) => props.extend};
`

const SectionContent = forwardRef(({ children, ...props }, ref) => {
  return (
    <SectionContentElement ref={ref} {...props}>
      {children}
    </SectionContentElement>
  )
})

export default SectionContent
