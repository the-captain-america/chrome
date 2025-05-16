import React, { useState } from 'react'
import {
  LocationWrapper,
  LocationHeader,
  LocationExpander,
  LocationExpandButton,
} from './FileLocation.styled'

import { CopyValue } from '@common/CopyValue'
import { Toggle } from '@common/Toggle'
import { Icon } from '@common/Icon'
import { Button } from '@common/Button'
import { css } from 'styled-components'

const FileLocation = ({
  id,
  title,
  path,
  children,
  enableExpand,
  resetPadding,
  isExpanded,
  extend,
  callback = () => {},
}) => {
  const [state, setState] = useState({
    isEditEnabled: false,
  })

  const onChangeToggle = ({ name, value }) => {
    setState((state) => ({
      ...state,
      [name]: value,
    }))
  }

  // const varMode = `isEditMode-${id}`
  // const isEditEnabled = state[varMode]

  return (
    <>
      <LocationHeader extend={extend} className="LocationHeader">
        {title && <h2 className="title">{title || 'File Path'}</h2>}
        {!!path && (
          <>
            {/* <Toggle
              className="Toggle"
              label="Settings"
              isActive={state.isEditEnabled}
              onChange={onChangeToggle}
              name={'isEditEnabled'}
              mr={8}
            /> */}
            <Toggle
              className="Toggle"
              label="Path"
              extend={css`
                .label {
                  color: #67717c;
                }
              `}
              isActive={state.isEditEnabled}
              onChange={onChangeToggle}
              name={'isEditEnabled'}
            />
            {enableExpand ? (
              <Button
                ml={16}
                variant="Grey"
                extend={LocationExpandButton}
                onClick={() => callback({ action: 'EXPAND' })}
              >
                <Icon
                  name={isExpanded ? 'COLLAPSE' : 'EXPAND'}
                  size={16}
                  stroke={`rgb(56 63 69)`}
                />
              </Button>
            ) : (
              <div style={{ height: '32px', marginBottom: '8px' }}></div>
            )}
          </>
        )}
      </LocationHeader>
      {!!path && state.isEditEnabled && (
        <LocationWrapper
          className={resetPadding ? 'LocationWrapper reset' : 'LocationWrapper'}
        >
          <LocationExpander isExpanded={state.isEditEnabled}>
            <CopyValue
              label="Source"
              value={path}
              config={{ isValueVisible: true, isLabelVisible: true }}
            />
            {children}
          </LocationExpander>
        </LocationWrapper>
      )}
    </>
  )
}

FileLocation.defaultProps = {
  id: 'file-location',
  title: '',
  enableExpand: true,
}

export { FileLocation }
