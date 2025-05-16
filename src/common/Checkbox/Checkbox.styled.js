import styled from 'styled-components'
import { mtFn, mbFn } from '@common/Theme'

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  ${HiddenCheckbox}:focus + & {
  }
`

const IconContainer = styled.span`
  width: 24px;
  height: 24px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const LabelStyle = styled.span.attrs({ className: 'label__style' })`
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  padding-left: 12px;
  display: inline-block;
  user-select: none;
  color: #95929e;
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`

const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${mbFn};
  ${mtFn};
`

export {
  HiddenCheckbox,
  StyledCheckbox,
  IconContainer,
  LabelStyle,
  Label,
  CheckboxContainer,
}
