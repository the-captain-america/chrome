import React from 'react'
import styled from 'styled-components'
import { Label } from '@common/Label'
import { mbFn } from '@common/Theme'

const ViewWrapper = styled.div`
  ${mbFn};
`

const View = ({ component = null, mb, label = '' }) => {
  const Component = !!component ? component : <></>
  return (
    <ViewWrapper mb={mb}>
      {label && <Label mb={16}>{label}</Label>}
      <Component />
    </ViewWrapper>
  )
}

export { View }
