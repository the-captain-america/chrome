import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '@common/Text'
import { Icon } from '@common/Icon'

import { NoteWrapper, NoteContainer, IconContainer } from './Note.styled'

const Note = ({
  text,
  children,
  color = '#fbfafb',
  type = 'note',
  icon = 'INFO',
  mt,
  mb,
  maxWidth,
  $flexDirection,
}) => {
  const renderIcon = () => {
    if (!icon || !icon.length) return null
    return (
      <IconContainer type={type}>
        <Icon name={icon} fill="#95929e" size={20} />
      </IconContainer>
    )
  }

  // Determine content to display
  const content = children || text

  return (
    <NoteContainer
      mb={mb}
      mt={mt}
      variant={type}
      className={`Note__Item`}
      $maxWidth={maxWidth}
      $flexDirection={$flexDirection}
    >
      {content && (
        <NoteWrapper $isNode={typeof content !== 'string'}>
          {renderIcon()}
          {typeof content === 'string' ? (
            <Text
              variant="p"
              style={{ display: 'inline-block' }}
              color={color}
              weight={400}
              lineHeight={24}
              size={14}
              className="Text"
            >
              {content}
            </Text>
          ) : (
            content
          )}
        </NoteWrapper>
      )}
    </NoteContainer>
  )
}

Note.propTypes = {
  content: PropTypes.node,
  text: PropTypes.string,
}

export { Note }
