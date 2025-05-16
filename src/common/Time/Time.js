import styled from 'styled-components'
import { mtFn, mbFn } from '@common/Theme'
import { FieldGroup } from '@common/FieldGroup'

const TimeLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #95929e;
  display: flex;
  margin-right: 8px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  text-align: left;
  max-width: 130px;
  line-height: 20px;
  padding-bottom: 8px;
  ${(props) =>
    props.maxWidth &&
    css`
      max-width: 300px;
    `}
`

const TimeInput = styled.input.attrs({ type: 'time' })`
  padding: 12px;
  border-radius: 4px;
  border: none;
  transition: all 0.2s ease-in-out;
  width: 100%;
  outline: none;
  color: white;
  font-size: 16px;
  line-height: 16px;
  border: 1px solid #333b44;
  background: #282e33;
  ${mtFn};
  ${mbFn};
  &::-webkit-calendar-picker-indicator {
    background-color: white;
    border-radius: 4px;
  }
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`

const Time = ({ label = '', mb, mt, ...props }) => {
  return (
    <FieldGroup
      variant={label && label.length ? 'ELEMENT' : 'FRAGMENT'}
      mb={mb}
      mt={mt}
    >
      {label && <TimeLabel>{label}</TimeLabel>}
      <TimeInput {...props} />
    </FieldGroup>
  )
}

export { Time }
