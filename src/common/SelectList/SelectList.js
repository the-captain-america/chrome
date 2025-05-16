import React, { useState, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { length } from 'ramda'
import { Icon } from '@common/Icon'

import { useDebounce } from '@hooks/useDebounce'
import { usePrevious } from '@hooks/usePrevious'
import { useOnClickOutside } from '@hooks/useOnClickOutside'

import {
  Button,
  Container,
  List,
  Item,
  Group,
  IconGroup,
  Footer,
} from './SelectList.styled'

const SelectList = ({
  items = [],
  callback = () => {},
  prefix = '',
  showFooter = false,
}) => {
  const [isOpen, setOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(items[0].id)
  const prevSelectedId = usePrevious(selectedId)

  const debouncedClose = useDebounce(false, 300)

  const refClickOutside = useRef()

  useOnClickOutside(refClickOutside, () => {
    setOpen(false)
  })

  const onOpen = (e) => {
    e.preventDefault()
    if (!isOpen) {
      setOpen(false)
    }
    setOpen(true)
  }

  const onSubmit = () => setOpen(!isOpen)

  const getId = (items, selectedId) => {
    if (!items || items.length <= 0) return ''
    const foundLabel = items.filter((item) => item.id === selectedId)[0].id
    return foundLabel
  }

  const onSelect = (item) => {
    setSelectedId(item.id)
    // if (prefix && prefix.length > 0) {
    callback(getId(items, selectedId))
    setOpen(debouncedClose)
  }

  const getLabel = (items, selectedId) => {
    if (!items || items.length <= 0) return 'Select'
    const foundLabel = items.filter((item) => item.id === selectedId)[0].label
    return foundLabel
  }

  useEffect(() => {
    if (selectedId !== prevSelectedId) {
      setOpen(false)
    }
    callback(selectedId)
    // eslint-disable-next-line
  }, [selectedId])

  if (!length(items)) return <></>

  return (
    <Container>
      <Button reset onClick={onOpen} type={selectedId}>
        <span>{getLabel(items, selectedId)}</span>
        <IconGroup>
          <Icon
            rotate={isOpen ? 180 : 0}
            fill="white"
            name="CHEVRON"
            size={20}
          />
        </IconGroup>
      </Button>
      {isOpen && (
        <Group ref={refClickOutside}>
          <List>
            {items.map((item) => (
              <Item
                isActive={item.id === selectedId}
                onClick={() => onSelect(item)}
                key={item.id}
                type={item.id}
              >
                {item?.image && (
                  <div>
                    <Icon name="USER" size={20} fill="white" stroke="none" />
                  </div>
                )}
                <span className="label">{item.label}</span>
                <span className="checkbox" />
              </Item>
            ))}
          </List>
          {showFooter && (
            <Footer>
              <Button variant="orange" width="100%" onClick={onSubmit}>
                Apply
              </Button>
            </Footer>
          )}
        </Group>
      )}
    </Container>
  )
}

export { SelectList }
