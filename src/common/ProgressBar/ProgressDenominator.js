import { colors, responsiveProps } from '@common/Theme'
import React from 'react'
import styled, { css } from 'styled-components'

const ProgressContainer = styled.div`
  position: relative;
  height: 48px;
  ${({ mt }) => responsiveProps('margin-top', mt)};
`

const ProgressCounter = styled.div`
  span.numerator {
    font-size: 19px;
    font-weight: 500;
    padding-right: 2px;
    color: white;
  }
  span.denominator {
    color: #8b8e94;
    font-weight: 600;
    font-size: 12px;
  }
  span.detail {
    color: rgb(139, 142, 148);
    font-weight: 600;
    font-size: 12px;
    margin-left: 5px;
  }
`

const ProgressItem = styled.div`
  background: rgb(65, 74, 79);
  border-radius: 2px;
  overflow: hidden;
  margin-top: 4px;
  margin-top: 6px;
  width: 100%;
  height: 5px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 4px;
    border-radius: 4px;
    background: ${colors.green};
    width: 0;
  }
  ${(props) =>
    props.percent &&
    css`
      &:after {
        width: ${props.percent}%;
      }
    `};
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const ProgressDenominator = ({ value, max = 100, config = {}, mt }) => {
  const { enablePrograssBar = false } = config
  const percent = (value / max) * 100
  return (
    <ProgressContainer className="progress-denominator" mt={mt}>
      {!!value && !!max && (
        <Header className="Header">
          {!!value && !!max && (
            <ProgressCounter className="progress-counter">
              <span className="numerator">{value}</span>
              <span className="denominator">/{max}</span>
              {!enablePrograssBar && <span className="detail">Questions</span>}
            </ProgressCounter>
          )}
        </Header>
      )}
      {enablePrograssBar && <ProgressItem percent={percent} />}
    </ProgressContainer>
  )
}

export default ProgressDenominator
