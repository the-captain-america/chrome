import React, { useState, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Icon } from '@common/Icon'
import { colors } from '@common/Theme'

const Container = styled.div`
  margin-top: 16px;
`

const Label = styled.div`
  font-weight: 300;
  font-size: 14px;
  padding-bottom: 8px;
  color: rgb(178, 178, 178);
  line-height: 20px;
`

const Group = styled.ul`
  padding: 0;
  padding-top: 12px;
  padding-bottom: 12px;
  margin: 0;
  list-style: none;
  border-radius: 3px;
  overflow: hidden;
  position: absolute;
  top: calc(100% + 12px);
  width: 100%;
  background: #282e32;
  z-index: 999;
  border: 1px solid rgb(51, 59, 68);
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
`

const Control = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  border-top: 1px solid #333b44;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;
  bottom: -12px;
  button {
    border: none;
    background: none;
    border-radius: 4px;
    background: rgb(58, 238, 184);
    cursor: pointer;
    padding: 11px 15px;
    span {
      color: black;
    }
    &:hover {
      background: rgb(47, 190, 147);
    }
  }
`

const List = styled.li`
  padding: 0;
  margin: 0;
  list-style: none;
  background: #282e32;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  span {
    margin-left: 8px;
    user-select: none;
    color: rgb(117 117 117);
  }
  svg.CHECKBOX {
    rect {
      stroke: #5d5d5d;
    }
  }

  &.active {
    svg.CHECKBOX_FILLED {
      path {
        stroke: black;
      }
    }
  }
  &:hover {
    background: #22282c;
  }
`

const GroupContainer = styled.div`
  min-width: 220px;
  position: relative;
  width: 100%;
`

const Header = styled.div`
  padding: 13px 10px 12px 11px;
  border: 1px solid #333b44;
  display: flex;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  span {
    user-select: none;
    font-size: 16px;
    color: rgb(117 117 117);
    font-weight: 300;
  }
  transition: all 0.2s ease-in-out;
  &:hover {
    background: rgb(34, 40, 44);
  }
  button {
    border: none;
    background: none;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    margin: 0;
    padding: 0;
    transition: all 0.2s ease-in-out;
    margin-left: auto;
  }
  ${(props) =>
    props.isActive &&
    css`
      &:hover {
        background: #282e32;
      }
      button {
        transform: rotate(180deg);
      }
    `};
`

const updatedOptions = (label, options) => {
  const result = options.map((curr) => {
    if (curr.label === label) {
      return { ...curr, active: !curr.active }
    }
    return curr
  })
  return result
}

const SelectMulti = ({ name, callback, options, label }) => {
  const ref = useRef()
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const body = document.querySelector('body')

    const handleClick = (event) => {
      if (ref?.current && !ref.current.contains(event.target)) {
        setIsExpanded(false)
      }
    }

    body.addEventListener('click', handleClick)

    return () => {
      body.removeEventListener('click', handleClick)
    }
  }, [])

  const renderOptions = options.map((option) => {
    return (
      <List
        key={option.label}
        className={option.active ? 'active' : ''}
        onClick={() =>
          callback({ name: name, data: updatedOptions(option.label, options) })
        }
      >
        <Icon
          fill={colors.green}
          name={option.active ? 'CHECKBOX_FILLED' : 'CHECKBOX'}
        />
        <span>{option.label}</span>
      </List>
    )
  })

  const selectedCount = options.filter((option) => {
    return option.active
  }).length

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <GroupContainer ref={ref}>
        <Header
          isActive={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {selectedCount > 0 ? (
            <span>
              {selectedCount}
              {' Selected'}
            </span>
          ) : (
            <span>Select</span>
          )}
          <button>
            <Icon name="CHEVRON" />
          </button>
        </Header>
        {isExpanded && (
          <Group>
            {renderOptions}
            <Control>
              <button onClick={() => setIsExpanded(false)}>
                <span>Confirm</span>
              </button>
            </Control>
          </Group>
        )}
      </GroupContainer>
    </Container>
  )
}

SelectMulti.defaultProps = {
  name: 'select',
  callback: () => {},
  options: [],
  label: '',
}

SelectMulti.propTypes = {
  name: PropTypes.string,
  callback: PropTypes.func,
  options: PropTypes.array,
  label: PropTypes.string,
}

export { SelectMulti }
