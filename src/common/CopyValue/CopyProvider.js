import React from 'react'
import styled, { css } from 'styled-components'
import { mtFn, mbFn } from '@common/Theme'
import { plFn, prFn } from '@common/Theme'
import PropTypes from 'prop-types'

const CopyGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
  margin-bottom: 32px;

  ${(props) => props.extend};
  ${mtFn};
  ${mbFn};
  ${prFn};
  ${plFn};
  gap: ${(props) => `${props.gap}px`};
`

const CopyProvider = ({ children, mb, mt, pl, pr, gap, className, extend }) => {
  return (
    <CopyGroup
      className={`Copy__Provider ${!!className ? className : ''}`}
      mt={mt}
      pl={pl}
      pr={pr}
      mb={mb}
      gap={gap}
      extend={extend}
    >
      {children}
    </CopyGroup>
  )
}

CopyProvider.defaultProps = {
  className: '',
  config: {},
  mb: 0,
  mt: 0,
}

CopyProvider.propTypes = {
  className: PropTypes.string,
  config: PropTypes.shape({
    hasBorderRadius: PropTypes.bool,
    hasMargins: PropTypes.bool,
  }),
  mb: PropTypes.number,
  mt: PropTypes.number,
}

export { CopyProvider }
