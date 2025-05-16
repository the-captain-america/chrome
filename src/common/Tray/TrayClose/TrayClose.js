import React from 'react'
import { Icon } from '@common/Icon'
import { Button } from './TrayClose.styled'

const TrayClose = ({ onClick = () => {}, className = '' }) => (
  <Button
    aria-label="Close"
    className={className ?? 'Button'}
    type="button"
    onClick={onClick}
  >
    <Icon name="CLOSE" viewBox={'0 0 36 36'} size={36} />
  </Button>
)

export default TrayClose
