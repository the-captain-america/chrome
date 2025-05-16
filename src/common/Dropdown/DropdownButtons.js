import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@common/Button'
import { Icon } from '@common/Icon'
import { colors } from '@common/Theme'
import styled from 'styled-components'

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  transition: all 0.3s ease;
  width: 100%;
`

const DropdownButtons = ({ items, callback }) => {
  return (
    <ButtonGroup className="render-buttons" role="menu">
      {items.map((item, index) => (
        <Button
          key={`${index}-${item.value}`}
          variant={item.variant}
          width="100%"
          justifyContent="space-between"
          onClick={() => callback({ action: item.value, value: item })}
          role="menuitem"
        >
          <span>{item.label}</span>
          {item.icon && (
            <Icon
              name={item.icon}
              size={20}
              stroke={item.iconStroke || colors.blue}
              fill={item.iconFill || colors.blue}
            />
          )}
        </Button>
      ))}
    </ButtonGroup>
  )
}

DropdownButtons.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      icon: PropTypes.string,
      iconFill: PropTypes.string,
    }),
  ).isRequired,
  callback: PropTypes.func.isRequired,
}

export { DropdownButtons }
