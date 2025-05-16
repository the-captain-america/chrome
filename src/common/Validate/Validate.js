import React, { useState } from 'react'
import { Icon } from '@common/Icon'
import PropTypes from 'prop-types'
import { prop } from 'ramda'
import {
  ValidateContainer,
  ValidateGroup,
  ValidateItem,
  SectionContainer,
  SectionHeader,
  SectionContent,
  NoteContainer,
} from './Validate.styled'

const Section = ({ title, config = {}, options, children }) => {
  const layoutStyle = prop('layout')(config)

  const renderOptions = () => {
    if (!options || options.length <= 0) return null
    return (
      <ValidateGroup>
        {options.map((item, index) => {
          const isValid = Boolean(item.value)
          return (
            <ValidateItem disabled={!isValid} key={index}>
              <span className="label">{`${item.label} is ${isValid}`}</span>
              {isValid && (
                <Icon
                  name="CHECK_ACTIVE"
                  fill={'#4da54d'}
                  stroke="white"
                  size={20}
                />
              )}
            </ValidateItem>
          )
        })}
      </ValidateGroup>
    )
  }

  const hasTitle = Boolean(title)

  const renderTitle = () => {
    if (!hasTitle) return null
    return (
      <SectionHeader>
        <h3>{title}</h3>
      </SectionHeader>
    )
  }

  return (
    <SectionContainer style={layoutStyle}>
      {renderTitle()}
      <SectionContent hasTitle={hasTitle}>
        {renderOptions()}
        {children}
      </SectionContent>
    </SectionContainer>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  config: PropTypes.object,
  title: PropTypes.string,
  options: PropTypes.array,
}

const Validate = ({ options = [], config = {} }) => {
  const layoutStyle = prop('layout')(config)
  const [isActive, setIsActive] = useState(true)
  if (!options || options.length <= 0) return null
  if (!isActive) return null

  const onClose = () => setIsActive(false)
  return (
    <ValidateContainer style={layoutStyle}>
      <button onClick={onClose}>
        <Icon name="CLOSE" size={20} />
      </button>
      {options.map((item, index) => {
        const isValid = Boolean(item.value)
        return (
          <ValidateItem disabled={!isValid} key={index}>
            {`${item.label} is ${isValid}`}
            {isValid && (
              <Icon
                name="CHECK_ACTIVE"
                fill={'#4da54d'}
                stroke="white"
                size={20}
              />
            )}
          </ValidateItem>
        )
      })}
    </ValidateContainer>
  )
}

Validate.defaultProps = {
  options: [{ label: 'isFlightSelected', value: true }],
}

Validate.propTypes = {
  options: PropTypes.instanceOf(Array),
  config: PropTypes.object,
}

const Note = ({ children, prefix, config, ...props }) => {
  const layoutStyle = prop('layout')(config)
  return (
    <NoteContainer {...props} style={layoutStyle}>
      {prefix && <span className="prefix">{prefix}</span>}
      {children}
    </NoteContainer>
  )
}

Note.defaultProps = {
  config: {},
  prefix: '',
}

Note.propTypes = {
  config: PropTypes.object,
  prefix: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export { Validate, Section, Note }
