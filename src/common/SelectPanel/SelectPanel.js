import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { includes, values, prop } from 'ramda'
import { mtFn, mbFn } from '@common/Theme'
import { Icon } from '@common/Icon'

const SelectContainer = styled.div`
  ${mtFn};
  ${mbFn};
`

const SelectPanelGroup = styled.ul`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`

const IconContainer = styled.div`
  margin-left: 4px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SelectItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  padding: 16px;
  border: 1px solid #efefef;
  background: white;
  border-radius: 4px;
  margin-right: 4px;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  min-width: 120px;
  cursor: pointer;
  ${(props) =>
    props.isActive &&
    css`
      border: 1px solid #4fbe79;
      background: #4fbe79;
    `}
  &:first-child {
    margin-left: 0;
    .line {
      display: none;
    }
  }
`

const Title = styled.span`
  font-size: 16px;
  line-height: 10px;
`

const SelectPanel = ({
  panels = {},
  config = {},
  callback = () => {},
  activeId,
}) => {
  const layoutStyle = prop('layout')(config)

  const [selectedId, setSelectedId] = useState(-1)
  const items = values(panels)

  const onSelect = (id) => {
    setSelectedId(id)
    callback(id)
  }

  useEffect(() => {
    if (activeId) {
      const mapped = items.map((item) => prop('id')(item))
      const exists = includes(activeId)(mapped)
      if (!exists) return
      setSelectedId(activeId)
    }
  }, [activeId])

  const renderSelections = () => {
    if (!items || items.length <= 0) {
      return (
        <SelectPanelGroup>
          <Title>No data</Title>
        </SelectPanelGroup>
      )
    }
    const list = items.map((item) => (
      <SelectItem
        key={item.id}
        className={`SelectItem ${
          item.id === selectedId ? 'active' : 'in-active'
        }`}
        isActive={item.id === selectedId}
        onClick={() => onSelect(item.id)}
      >
        <Title className="SelectItem__Title">{item.label}</Title>
        <IconContainer className="SelectItem__Icon">
          {item.id === selectedId && <Icon name="CHECKMARK" size={20} />}
        </IconContainer>
      </SelectItem>
    ))

    return (
      <SelectPanelGroup className="SelectPanelGroup">{list}</SelectPanelGroup>
    )
  }
  return (
    <SelectContainer className="SelectContainer" style={layoutStyle}>
      {renderSelections()}
    </SelectContainer>
  )
}

SelectPanel.defaultProps = {
  panels: {},
  activeId: 'YEARLY',
  callback: () => {},
}

SelectPanel.propTypes = {
  panels: PropTypes.object,
  activeId: PropTypes.string,
  callback: PropTypes.func,
}

export { SelectPanel }
