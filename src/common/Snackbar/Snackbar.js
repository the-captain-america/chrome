import React, { useEffect } from 'react'
import Proptypes from 'prop-types'
import { Icon } from '@common/Icon'

import {
  SnackbarContainer,
  SnackbarContent,
  SnackbarUndoIcon,
  SnackbarLabel,
  SnackbarDescriptor,
  SnackbarActionList,
  SnackbarActionItem,
  SnackbarClose,
} from './Snackbar.styled'
import { Button } from '@common/Button'
import styled from 'styled-components'

const Snackbar = ({
  onUndo,
  onClose,
  actions = [],
  variant,
  descriptor = '',
  callback = () => {},
  label = '',
  delayClose,
}) => {
  useEffect(() => {
    if (delayClose) {
      setTimeout(() => {
        onClose()
      }, delayClose)
    }
  }, [delayClose])

  const renderActions = () => {
    if (!actions || actions.length <= 0) return null
    return (
      <SnackbarActionList>
        {actions.map((item, index) => (
          <SnackbarActionItem onClick={() => callback(item.value)} key={index}>
            {item.label}
          </SnackbarActionItem>
        ))}
      </SnackbarActionList>
    )
  }

  const renderVariant = (type) =>
    ({
      UNDO: <Icon name="RETURN" stroke="white" size={20} />,
      SUCCESS: <Icon name="TICK_FILLED" size={20} />,
    }[type.toUpperCase()])

  return (
    <SnackbarContainer>
      <SnackbarContent>
        <SnackbarUndoIcon onClick={onUndo}>
          {renderVariant(variant)}
        </SnackbarUndoIcon>
        {label && <SnackbarLabel>{label}</SnackbarLabel>}
        {descriptor && <SnackbarDescriptor>{descriptor}</SnackbarDescriptor>}
        {renderActions(actions)}
        <SnackbarClose onClick={onClose}>
          <Icon name="CLOSE" stroke="white" size={20} />
        </SnackbarClose>
      </SnackbarContent>
    </SnackbarContainer>
  )
}

Snackbar.defaultProps = {
  onUndo: () => {},
  onClose: () => {},
  actions: [],
  descriptor: '',
  label: '',
  variant: 'success',
}

Snackbar.propTypes = {
  onUndo: Proptypes.func,
  onClose: Proptypes.func,
  actions: Proptypes.array,
  descriptor: Proptypes.string,
  callback: Proptypes.func,
  label: Proptypes.string,
  variant: Proptypes.string,
}

export { Snackbar }
