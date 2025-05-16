import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { mbFn, mtFn } from '@common/Theme'
import { Icon } from '@common/Icon'
import { IconContainer } from '@common/IconContainer'

const TabCardsContainer = styled.div`
  display: flex;
  width: 100%;
  ${mbFn};
  ${mtFn};
`

const Group = styled.div`
  display: flex;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`

const TabCardsItem = styled.li`
  list-style: none;
  display: flex;
  padding: 16px;
  margin: 0;
  padding: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 16px;
  background: grey;
  h2 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: black;
  }
  &:first-of-type {
    margin-left: 0;
  }
`

const TabCards = ({ callback, active, options, ...props }) => {
  const handleKeyDown = (e, data) => {
    if (e.key === 'Enter') {
      callback(data)
    }
  }
  const renderItems = () => {
    if (!options || !options.length) return null
    return options.map((item, index) => {
      return (
        <TabCardsItem
          key={`${index}`}
          tabIndex={0}
          onKeyDown={(e) => handleKeyDown(e, item)}
          onClick={() => callback(item)}
          active={active === item.id}
        >
          <IconContainer>
            <Icon icon={item.icon} />
          </IconContainer>
          <h2>{item.label}</h2>
        </TabCardsItem>
      )
    })
  }
  return (
    <TabCardsContainer {...props}>
      <Group>{renderItems()}</Group>
    </TabCardsContainer>
  )
}

export { TabCards }
