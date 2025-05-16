import React, { useState } from 'react'
import { Container, SwapItem } from './SwapType.styled'

const reduceType = (list, localCount = 0) => {
  return list.reduce((accum, key) => {
    const mergeTypes = {
      label: `${localCount}${key}`,
    }
    return [...accum, mergeTypes]
  }, [])
}

const reduceList = (count, list) =>
  count.reduce((accum, x, index) => {
    const primary = reduceType(list, index + 1)
    return [...accum, ...primary]
  }, [])

const items = (count) => [...Array(Number(count))]

const SwapType = ({
  list = ['A', 'B', 'C'],
  count = 2,
  callback = () => {},
}) => {
  const [state, setState] = useState({ active: 0 })
  const constructed = reduceList(items(count), list)

  const onSelect = () => {
    if (state.active >= constructed.length - 1) {
      setState((state) => ({ ...state, active: 0 }))
      return
    }
    setState((state) => ({ ...state, active: (state.active += 1) }))
    callback({ action: 'UPDATE', value: constructed[state.active] })
  }

  return (
    <Container>
      <SwapItem onClick={onSelect}>
        <span>{constructed[state.active].label}</span>
      </SwapItem>
    </Container>
  )
}

export { SwapType }
