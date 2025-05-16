import React from 'react'
import { mtFn, mbFn } from '@common/Theme'
import styled, { css } from 'styled-components'

const NoteGroup = styled.div`
  margin-bottom: 32px;
  gap: 16px;
  display: flex;
  flex-direction: column;

  ${mtFn};
  ${mbFn};

  .Note__Item {
    border-radius: 4px;
  }
`

const NoteProvider = ({ children, ...props }) => {
  const hasLength = children && children.length && children.length > 1

  return (
    <NoteGroup hasLength={hasLength} {...props}>
      {children}
    </NoteGroup>
  )
}

export { NoteProvider }
