import React, { useRef, useState, useEffect } from 'react'
import { Icon } from '@common/Icon'
import { keys } from 'ramda'
import PropTypes from 'prop-types'
import { useOnClickOutside } from '@hooks/useOnClickOutside'
import { Modal } from '@common/Modal'

import {
  DataButton,
  CopyButton,
  CopyLabel,
  CopyItem,
  IconContainer,
  DotItem,
  FormElement,
  DotGroup,
  RevealButton,
  PriorityItem,
} from './CopyValue.styled'

import { toLower } from 'ramda'
import { Button } from '@common/Button'

const options = {
  default: {
    id: 'default',
    fill: '#4C3AEE',
    stroke: '#D44126',
  },
  high: {
    id: 'high',
    fill: '#EE3A3A',
    stroke: '#D44126',
  },
  medium: {
    id: 'medium',
    fill: '#E68A3C',
    stroke: '#E68A3C',
  },
  low: {
    id: 'low',
    fill: '#EFCC4C',
    stroke: '#EFCC4C',
  },
  fair: {
    id: 'fair',
    fill: '#72CEBC',
    stroke: '#72CEBC',
  },
  light: {
    id: 'light',
    fill: '#5AAFED',
    stroke: '#5AAFED',
  },
  welcome: {
    id: 'welcome',
    fill: '#6E6BEF',
    stroke: '#6E6BEF',
  },
}

const Priority = ({ variant }) => {
  const foundVariant = variant && variant.length > 0 ? toLower(variant) : 'default'
  return (
    <PriorityItem
      key={options[foundVariant].id}
      variant={options[foundVariant].id}
      bgColor={options[foundVariant].fill}
    />
  )
}

const CopyText = ({
  isPassword = false,
  isLocalHidden,
  value = '',
  data = {},
  isCrossed,
  onDetailCallback = () => {},
  onRevealCallback = () => {},
  maxWidth,
  maxLength,
}) => {
  const hasData = data && keys(data).length > 0
  const handleDetail = (e) => {
    e.stopPropagation()
    onDetailCallback()
  }

  if (isPassword && isLocalHidden) {
    const valueLength = value && value.length > 0 ? value.length : 3
    const mapValues = [...Array(valueLength <= maxLength ? valueLength : 10).keys()].map((item) => (
      <DotItem key={item} />
    ))
    return (
      <>
        <DotGroup isCrossed={isCrossed} className="DotGroup">
          {mapValues}
        </DotGroup>
        <RevealButton onClick={onRevealCallback}>Reveal</RevealButton>
        {hasData && (
          <DataButton onClick={handleDetail}>
            <Icon name="DETAILS" stroke="black" size={20} />
          </DataButton>
        )}
      </>
    )
  }
  return (
    <>
      <CopyItem isCrossed={isCrossed} maxWidth={maxWidth}>
        {value}
      </CopyItem>{' '}
      {isPassword && !isLocalHidden && (
        <RevealButton className="reveal" onClick={onRevealCallback}>
          Hide
        </RevealButton>
      )}
    </>
  )
}

const getExpiry = (dateString) => {
  if (!dateString || dateString.length <= 0) return true
  const date = new Date(Date.parse(dateString))
  const today = new Date()
  if (date.getTime() > today.getTime()) {
    // Date 1 is the Future
    return true
  } else {
    // Today is the Future
    return false
  }
}

const CopyValue = ({ value, id, expiry, config, label, callback, data, extend, variant, mb, mt }) => {
  const collectedExpiry = getExpiry(expiry)
  const { isPassword, isLabelVisible, isValueVisible, priority } = config || {}

  const copyRef = useRef(null)
  const [localHidden, setLocalHidden] = useState(isPassword)
  const [showChecked, setShowChecked] = useState(false)
  const [modal, setModal] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)
  const [itemWidth, setWidth] = useState(0)
  const textAreaRef = useRef(null)

  useOnClickOutside(copyRef, () => {
    setCopySuccess(false)
    setShowChecked(false)
    callback({
      action: 'CLOSE',
      value: null,
    })
  })

  const onCopy = (e) => {
    textAreaRef.current.select()
    document.execCommand('copy')
    e.target.focus()
    setCopySuccess(true)
    setShowChecked(true)
    callback({ action: 'COPY', value: { label, value } })
  }

  useEffect(() => {
    if (copyRef.current) {
      setWidth(copyRef.current.clientWidth)
    }
  }, [])

  return (
    <>
      {isLabelVisible && (
        <CopyButton
          ref={copyRef}
          isActive={copySuccess}
          onClick={onCopy}
          mb={mb}
          mt={mt}
          variant={variant}
          className={`CopyValue Button__Item ${copySuccess ? 'active' : ''}`}
          extend={extend}
        >
          {!!label && <CopyLabel maxWidth={200}>{label}</CopyLabel>}
          {!!value && !!isValueVisible && (
            <>
              <CopyText
                maxWidth={itemWidth > 0 && itemWidth}
                isPassword={isPassword}
                maxLength={10}
                isLocalHidden={localHidden}
                isCrossed={!collectedExpiry}
                value={value}
                onRevealCallback={() => setLocalHidden(!localHidden)}
                onDetailCallback={() => setModal(true)}
              />
              {priority && <Priority variant={priority} />}
            </>
          )}
          <IconContainer style={{ marginLeft: 'auto' }} className="IconContainer">
            {showChecked ? (
              <Icon ml={5} name="CHECKMARK" size={20} />
            ) : (
              <Icon ml={5} name="COPY" fill="black" size={20} />
            )}
          </IconContainer>
        </CopyButton>
      )}
      {!isLabelVisible && (
        <Button onClick={onCopy} label="Copy">
          {showChecked ? <Icon ml={5} name="CHECKMARK" size={20} /> : <Icon ml={5} name="COPY" size={20} />}
        </Button>
      )}
      <FormElement>
        <textarea readOnly ref={textAreaRef} value={value} />
      </FormElement>
      {modal && data && data.title && <Modal>{data.title}</Modal>}
    </>
  )
}

CopyValue.defaultProps = {
  id: '',
  label: '',
  callback: () => {},
  value: '',
  config: {
    isLabelVisible: true,
    isValueVisible: true,
    isPassword: false,
    button: {},
  },
}

CopyValue.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string,
  variant: PropTypes.string,
  callback: PropTypes.func,
  config: PropTypes.shape({
    isLabelVisible: PropTypes.bool,
    isValueVisible: PropTypes.bool,
    button: PropTypes.shape({}),
    isPassword: PropTypes.bool,
  }),
}

export { CopyValue }
