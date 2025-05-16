import React, { useRef, useEffect, useState, useCallback } from 'react'
import { Icon } from '@common/Icon'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const ControlContainer = styled.div`
  border-radius: 8px;
  background: #f4f5f8;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 4px rgb(28 17 44 / 4%), 0px 5px 12px rgb(28 17 44 / 6%);
  width: 100%;
  max-width: 100%;
  margin-bottom: 16px;
  scroll-margin: 20px;
  ${(props) =>
    props.priority === 'high' &&
    css`
      background: #ffe9b9;
    `}
  ${(props) =>
    props.priority === 'auth' &&
    css`
      background: #e8f7ec;
    `}
`

const ControlContent = styled.div`
  padding: 16px;
  display: flex;
  width: 100%;
  max-width: 100%;
  flex-direction: column;
  background: white;
  border-radius: 0px 0px 8px 8px;
`

const ControlHeader = styled.div`
  padding: 16px 16px 16px;
  background: #d9dce5;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex: 1;
  border-radius: 8px 8px 0 0px;
`

const ControlTitle = styled.h3`
  overflow: hidden;
  font-weight: 600;
  font-size: 16px;
  color: black;
  width: 100%;
  margin: 0;
`

const ControlsGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const ControlsButton = styled.button`
  display: flex;
  width: 32px;
  height: 32px;
  outline: none;
  border: none;
  background: white;
  flex-direction: row;
  border-radius: 4px;
  border: 1px solid #d9dce5;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background: #e0e0e0;
  }
`

const Controls = ({ callback }) => {
  const CONTROLS = {
    CREATE: 'CREATE',
  }

  const onCallback = (value) => {
    callback(value)
  }

  return (
    <ControlsGroup>
      <ControlsButton onClick={() => onCallback(CONTROLS.CREATE)}>
        <Icon name="PLUS" stroke="black" size={20} />
      </ControlsButton>
    </ControlsGroup>
  )
}

Controls.defaultProps = {
  callback: () => {},
}

const ControlPanel = ({
  isMenuOpen,
  children,
  title,
  id,
  callback,
  controls,
  ...props
}) => {
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    if (isMenuOpen) setMenu(true)
  }, [isMenuOpen])

  const onToggle = () => {
    setMenu(!menu)
  }

  const handleControlCallback = (value) => {
    if (value === 'CREATE') {
      setMenu(true)
    }
  }

  return (
    <ControlContainer className={title} id={id} {...props}>
      {title && (
        <ControlHeader>
          <ControlTitle>{title}</ControlTitle>
          <Controls callback={handleControlCallback} />
        </ControlHeader>
      )}
      {children && (
        <ControlContent className="ControlContent">{children}</ControlContent>
      )}
    </ControlContainer>
  )
}

ControlContainer.propTypes = {
  config: PropTypes.object,
  isActive: PropTypes.bool,
  title: PropTypes.string,
  isMenuOpen: PropTypes.bool,
  id: PropTypes.string,
  controls: PropTypes.object,
}

ControlContainer.defaultProps = {
  config: {},
  title: 'Control Panel',
  isMenuOpen: false,
  callback: () => {},
  callback: {},
  id: '',
}

export { ControlPanel }
