import React from 'react'
import { Icon } from '@common/Icon'
import styled, { css } from 'styled-components'

const CheckmarkContainer = styled.div`
  display: none;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  ${(props) =>
    props.isHidden &&
    css`
      display: flex;
    `}
`

const Checkmark = ({ isActive = false }) => {
  return (
    <CheckmarkContainer isHidden={isActive}>
      {isActive && <Icon name={`CHECKBOX_FILLED`} size={20} />}
    </CheckmarkContainer>
  )
}

export { Checkmark }
