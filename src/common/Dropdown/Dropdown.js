import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '@common/Icon'
import ClickOutside from '@hooks/useClickOutside'
import { responsiveProps } from '@common/Theme'
import { Button } from '@common/Button'
import PropTypes from 'prop-types'
import { DropdownButtons } from './DropdownButtons'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
  border-radius: 8px;
  transition: all 0.3s ease;
`

const Wrapper = styled.div`
  position: relative;
`

const Menu = styled.div`
  border-radius: 4px;
  overflow: hidden;
  border: 1.5px solid rgb(52, 59, 68);
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 100;
  display: flex;

  padding: 8px;
  background: rgb(34, 40, 46);
  flex-direction: column;
  transition: all 0.3s ease;
  justify-content: flex-end;
  align-items: flex-end;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.15);
  ${({ $minWidth }) => responsiveProps('min-width', $minWidth)};
  ${({ $maxWidth }) => responsiveProps('max-width', $maxWidth)};
`

const Dropdown = ({ callback = () => {}, config = {}, items = [] }) => {
  const [state, setState] = useState({
    isExpanded: false,
  })

  const { maxWidth = 210, minWidth = 210 } = config

  const onExpand = () => {
    setState((prev) => ({
      ...prev,
      isExpanded: !prev.isExpanded,
    }))
  }

  const onClose = () => {
    setState((prev) => ({
      ...prev,
      isExpanded: false,
    }))
  }

  const handleCallback = (selectedItem) => {
    callback(selectedItem)
    onClose()
  }

  return (
    <ClickOutside callback={onClose}>
      <Wrapper>
        <Container className={state.isExpanded ? 'is-active' : ''}>
          <Button
            variant="grey"
            onClick={onExpand}
            style={{
              padding: '6px',
            }}
          >
            <Icon name="DOTS" size={16} fill="#A9AEB9" />
          </Button>
        </Container>
        {state.isExpanded && (
          <Menu $maxWidth={maxWidth} $minWidth={minWidth}>
            <DropdownButtons items={items} callback={handleCallback} />
          </Menu>
        )}
      </Wrapper>
    </ClickOutside>
  )
}

Dropdown.propTypes = {
  callback: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      icon: PropTypes.string,
      iconFill: PropTypes.string,
    }),
  ),
}

export { Dropdown }
