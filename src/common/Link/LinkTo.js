import React from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '@common/Icon'
import { mbFn, mtFn } from '@common/Theme'

const LinkItem = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 0px;
  background: #282e33;
  outline: none;
  border: 1px solid rgb(51, 57, 67);
  strong.label {
    font-size: 16px;
    font-weight: normal;
    color: rgb(149, 146, 158);
    margin-right: 8px;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 32px;
  }
  span {
    color: #fbfbfb;
    line-height: 32px;
    font-weight: 300;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
    white-space: nowrap;
    text-align: left;
    font-size: 16px;
    max-width: 300px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    border: 1px solid rgb(51, 57, 67);
    background: #1f2428;
  }
  ${(props) =>
    props.alone &&
    css`
      width: 100%;
      border: 1px solid rgb(51, 57, 67);
      border-radius: 4px;
    `}
  ${(props) =>
    props.asCopy &&
    css`
      width: 100%;
      border-radius: 0;
      margin: 0;
    `}
  ${mbFn};
  ${mtFn};
`

const IconContainer = styled.div`
  height: 20px;
  margin-left: auto;
`

const LinkTo = ({
  label = '',
  alone = false,
  variant,
  mt,
  mb,
  link: { linkProp } = '',
  value = '',
  ...props
}) => {
  const link = value || linkProp

  const onSelect = () => {
    if (!link || !link.length) return
    window.open(link, '_blank', 'noopener,noreferrer')
  }
  return (
    <LinkItem
      asCopy={variant === 'copy'}
      onClick={onSelect}
      mt={mt}
      mb={mb}
      alone
      {...props}
    >
      <strong className="label">{label}</strong>
      <span className="value">{link}</span>
      <IconContainer>
        <Icon ml={5} name="OPEN_IN" stroke="white" size={20} />
      </IconContainer>
    </LinkItem>
  )
}

LinkTo.defaultProps = {
  alone: false,
}

export { LinkTo }
