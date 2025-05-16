import React from 'react'
import { Icon } from '@common/Icon'
import styled, { css } from 'styled-components'

const CheckmarkText = styled.span`
  font-size: 14px;
  line-height: 21px;
`

const Container = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const IconContainer = styled.span`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  ${(props) =>
    props.isHidden &&
    css`
      display: flex;
    `}
`

const Checkmark = ({ isActive, children }) => {
  return (
    <Container>
      <IconContainer>
        {isActive ? (
          <Icon
            name={`CHECKBOX_FILLED`}
            stroke="white"
            fill="#02afec"
            size={20}
          />
        ) : (
          <Icon name={`CHECKBOX_OUTLINE`} stroke="white" size={20} />
        )}
      </IconContainer>
      {children && <CheckmarkText>{children}</CheckmarkText>}
    </Container>
  )
}

Checkmark.defaultProps = {
  isActive: false,
}

export { Checkmark }
