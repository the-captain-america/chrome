import React, { useRef, useState, useEffect } from 'react'
import { Button } from '@common/Button'
import { Item, List, Container, Close } from './ScrollList.styled'
import { Icon } from '@common/Icon'

const makeItem = () => {
  const id = Math.random().toString(16).slice(2)
  return {
    id,
  }
}

const ScrollItem = ({ onClick, children }) => {
  const ref = useRef()

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
  }, [])

  return (
    <Item onClick={onClick} className="scroll" ref={ref}>
      {children}
    </Item>
  )
}

function sortItems(a, b) {
  return a.id.localeCompare(b.key)
}

const ScrollList = () => {
  const [items, setItems] = useState([])

  const onSelect = (id) => {
    const updatedItems = items.filter((item) => item.id !== id)
    setItems(updatedItems)
  }

  const renderItems = items.map((item, index) => (
    <ScrollItem key={index}>
      <span>{item.id}</span>
      <Close onClick={() => onSelect(item.id)}>
        <Icon name="CLOSE" stroke="white" size={20} />
      </Close>
    </ScrollItem>
  ))

  return (
    <Container>
      <Button
        mb={{
          xs: 16,
        }}
        variant="purple"
        onClick={() =>
          setItems((state) => [...state, makeItem()].sort(sortItems))
        }
      >
        <span className="label">Add item ({items.length})</span>
      </Button>
      <List>{renderItems}</List>
    </Container>
  )
}

export { ScrollList }
