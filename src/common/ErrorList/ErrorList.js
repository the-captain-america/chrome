import React from 'react'
import { Icon } from '@common/Icon'
import { length, prop } from 'ramda'
import {
  Container,
  ErrorWrapper,
  ErrorContent,
  ErrorIcon,
  ErrorClose,
} from './Error.styled'
import PropTypes from 'prop-types'

const Message = ({
  onClose = () => {},
  name = '',
  hasClose,
  message = 'There was an error',
}) => {
  return (
    <ErrorWrapper>
      <ErrorContent className={name} hasClose={hasClose}>
        <ErrorIcon>
          <Icon name="BOLT" fill="#fff" size={20} />
        </ErrorIcon>
        {message && <p>{message}</p>}
        {hasClose && (
          <ErrorClose onClick={onClose}>
            <Icon
              name="CLOSE_SMALL"
              size={20}
              stroke="#fff"
              viewBox="-1 -1 20 20"
            />
          </ErrorClose>
        )}
      </ErrorContent>
    </ErrorWrapper>
  )
}

const ErrorList = ({
  needles,
  haystack,
  callback,
  mt,
  mb,
  hasClose,
  ...rest
}) => {
  const { layout: layoutStyle } = prop('config')(rest) || {}

  const filteredErrors = haystack
    .filter((match) => needles.includes(match.name))
    .map((error) => error)

  if (!filteredErrors || !length(filteredErrors)) return null

  return (
    <Container mt={mt} mb={mb} style={layoutStyle}>
      {filteredErrors.map((item, index) => (
        <Message
          key={index}
          message={item.message}
          name={item.name}
          hasClose={hasClose}
          onClose={() => callback(item.name)}
          {...rest}
        />
      ))}
    </Container>
  )
}

ErrorList.defaultProps = {
  needles: [],
  haystack: [],
  callback: () => {},
  mt: 0,
  mb: 0,
  hasClose: true,
}

Message.propTypes = {
  /** Array of items passed in which can be rendered */
  needles: PropTypes.arrayOf([PropTypes.string, PropTypes.string]),
  /** Array of items to be filtered by */
  haystack: PropTypes.array,
  /** Function to invoke when the user clicks on the close button with a customised outcome.*/
  callback: PropTypes.func,
  /** Boolean show close button */
  hasClose: PropTypes.bool,
}

export { ErrorList }
