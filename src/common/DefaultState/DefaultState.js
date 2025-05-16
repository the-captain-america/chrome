import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Empty from './empty.svg'

const imageConfig = (type) =>
  ({
    PRIMARY: Empty,
  }[type || 'PRIMARY'])

const DefaultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px;
  cursor: pointer;
`

const DefaultRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const DefaultItem = styled.div`
  width: 262px;
  height: 75px;
  min-height: 75px;
  min-width: 262px;
  background-repeat: no-repeat;
  background-size: 262px 116px;
  display: flex;
  margin-left: 4px;
  &:first-child {
    margin-left: 0;
  }
  ${(props) =>
    props.imageSrc &&
    css`
      background-image: ${`url(${props.imageSrc})`};
    `}
`

const DefaultContent = styled.div`
  margin-top: 48px;
`

const DefaultTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  margin: 0;
  color: white;
`

const DefaultDetail = styled.p`
  margin: 0;
  margin-top: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
  color: white;
`

const DefaultWrapper = styled.div`
  position: relative;
  height: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: rgb(34, 40, 46);
  border-radius: 4px;
`

const DefaultState = ({ variant = 'workout', onClick }) => (
  <DefaultWrapper>
    <DefaultContainer onClick={onClick}>
      <DefaultRow>
        <DefaultItem imageSrc={imageConfig('PRIMARY')} />
      </DefaultRow>
      <DefaultContent>
        {variant === 'workout' && (
          <DefaultTitle>You have no notes!</DefaultTitle>
        )}
        {variant === 'workout' && (
          <DefaultDetail>
            You need to create a note in order to see them here.
          </DefaultDetail>
        )}
      </DefaultContent>
    </DefaultContainer>
  </DefaultWrapper>
)

DefaultState.defaultProps = {
  onClick: () => {},
}

DefaultState.propTypes = {
  onClick: PropTypes.func,
}

export { DefaultState }
