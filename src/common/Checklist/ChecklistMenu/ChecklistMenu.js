import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '@common/Icon'
import { colors, maxHeightFn } from '@common/Theme'
import { Button } from '@common/Button'
import { Line } from '@common/Line'
import { isEmptyObject } from '@utils/ramda'
import { CHECKITEM_MENU_ACTIONS } from '../constants'
import { StateView } from '@common/StateView'
import { CopyValue } from '@common/CopyValue'

import { getLabel } from '../utils'

const ExtendState = css`
  pre {
    overflow-x: unset !important;
  }
`

const CheclistMenuHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const CheckCodeContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  position: relative;
  min-height: 400px;
  max-height: 400px;
  .StateView {
    position: absolute;
  }
`

const ChecklistMenuContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 16px;
  span.title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    color: white;
    margin-left: 0px;
    font-size: 11px;
  }
  span.id {
    font-size: 11px;
    color: black;
    font-weight: 600;
    line-height: 16px;
    padding: 1px 6px;
    border-radius: 4px;
    background: rgb(58, 238, 184);
  }
`
const Container = styled.div`
  width: 100%;
  ${maxHeightFn};
  background: #282e32;

  display: flex;
  flex-direction: column;
  padding: 20px 16px 16px 16px;
  border: 1px solid #333b44;
  justify-content: flex-start;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  h3 {
    color: #fff;
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
    margin-bottom: 16px;
  }
`

const ChecklistMenu = ({ callback = () => {}, data = null }) => {
  const localRef = useRef()
  const isCodeOutputEnabled = false
  if (isEmptyObject(data)) return null

  return (
    <Container ref={localRef}>
      <CheclistMenuHeader>
        <Button
          variant="green"
          onClick={() =>
            callback({ action: CHECKITEM_MENU_ACTIONS.SET_VIEW_CLOSE })
          }
        >
          <span>Back</span>
          <Icon ml={5} stroke={colors.green} name="RETURN" size={20} />
        </Button>
      </CheclistMenuHeader>
      <ChecklistMenuContent>
        <Line mt={0} mb={16} />
        {!!data.id && (
          <CopyValue
            mb={8}
            label="ID:"
            config={{ isLabelVisible: true, isValueVisible: true }}
            value={data.id}
          />
        )}
        {!!data.value && (
          <CopyValue
            mb={8}
            label="Value:"
            config={{ isLabelVisible: true, isValueVisible: true }}
            value={data.value}
          />
        )}
        {!!data.label && (
          <CopyValue
            mb={8}
            label="Label:"
            config={{ isLabelVisible: true, isValueVisible: true }}
            value={data.label}
          />
        )}
        {!!data.start && (
          <CopyValue
            mb={8}
            label="Start:"
            config={{ isLabelVisible: true, isValueVisible: true }}
            value={data.start}
          />
        )}
        {!!data.end && (
          <CopyValue
            mb={8}
            label="End:"
            config={{ isLabelVisible: true, isValueVisible: true }}
            value={data.end}
          />
        )}
        {!!data.completed && (
          <CopyValue
            mb={8}
            label="Completed:"
            config={{ isLabelVisible: true, isValueVisible: true }}
            value={data.completed}
          />
        )}
        {!!data.skipped && (
          <CopyValue
            mb={8}
            label="Skipped:"
            config={{ isLabelVisible: true, isValueVisible: true }}
            value={data.skipped}
          />
        )}
        {!!data.feature && (
          <CopyValue
            label="Feature"
            config={{ isLabelVisible: true, isValueVisible: true }}
            value={getLabel({ props: data, labelKeys: ['feature'] })}
          />
        )}
        {isCodeOutputEnabled && (
          <CheckCodeContainer>
            <StateView
              state={data}
              minHeight={400}
              maxHeight={400}
              extend={ExtendState}
            />
          </CheckCodeContainer>
        )}
      </ChecklistMenuContent>
    </Container>
  )
}

export { ChecklistMenu }
