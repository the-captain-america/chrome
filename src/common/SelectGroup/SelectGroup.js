import React from 'react'
import { curry, propEq, map, assoc, prop, when } from 'ramda'
import {
  HeaderContainer,
  Group,
  Success,
  SelectedItemContainer,
} from './SelectGroup.styled'

import { Icon } from '@common/Icon'

const SelectedItem = ({
  item,
  showSelected,
  onSelect = () => {},
  ...props
}) => {
  const onLocalSelect = (item) => onSelect(item)

  return (
    <SelectedItemContainer
      onClick={() => onLocalSelect(item)}
      isActive={item.active}
      {...props}
    >
      <span>{item.label || 'Empty'}</span>
      {item.active && (
        <Success>
          <Icon name="CHECK_ACTIVE" size={20} />
        </Success>
      )}
    </SelectedItemContainer>
  )
}

const alter = curry((state, index, items) =>
  map(when(propEq('index', index), assoc('active', state)), items),
)

const getPriority =
  (key) =>
  (list = []) =>
    list.sort((a, b) => (prop(key)(a) > prop(key)(b) ? 1 : -1))

const SelectGroup = ({
  callback = () => {},
  showSelected = true,
  items = [],
}) => {
  const onSelect = (item) => {
    const isFound = items.find((f) => f.index === item.index)
    if (isFound && isFound.active) {
      const newData = alter(false, item.index, items)
      callback(getPriority('index')(newData))
    } else {
      const newData = alter(true, item.index, items)

      callback(getPriority('index')(newData))
    }
  }

  const renderItems = () => {
    if (!items || items.length <= 0) return null
    return items.map((item, index) => (
      <SelectedItem
        key={index}
        showSelected={showSelected}
        item={item}
        onSelect={onSelect}
      />
    ))
  }

  return (
    <HeaderContainer>
      <Group>{renderItems()}</Group>
    </HeaderContainer>
  )
}

export { SelectGroup }
