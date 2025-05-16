import React, { useState, useEffect } from 'react'
import { Icon } from '@common/Icon'
import styled, { css } from 'styled-components'
import { prop } from 'ramda'

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  padding: 10px 12px;
  position: absolute;
  top: 16px;
  right: 16px;
  max-width: 140px;
  border: 1px solid #95929e;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #1f2428;
  }
`

const Title = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #95929e;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  h2 {
    margin: 0;
    font-size: 14px;
  }
`

const Label = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #95929e;
`

const defaultState = {
  count: 34,
}

const Stats = ({ data = {}, ...props }) => {
  const { count } = data

  return (
    <Container {...props}>
      <Title>
        <h2>Stats</h2> <Icon ml={5} name="CLIPBOARD" size={20} />
      </Title>
      <Label>Interactions: {count}</Label>
      <Label>Most recent: 13:04</Label>
    </Container>
  )
}

Stats.defaultProps = {
  data: {
    count: 0,
  },
}

export { Stats }
