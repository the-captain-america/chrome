import styled from 'styled-components'
import { colors, responsiveProps } from '@common/Theme'

const ToggleWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${({ $mt }) => responsiveProps('margin-top', $mt)};
  ${({ $mr }) => responsiveProps('margin-right', $mr)};
  ${({ $mb }) => responsiveProps('margin-bottom', $mb)};
  ${({ $ml }) => responsiveProps('margin-left', $ml)};

  ${(props) => props.extend && props.extend};
`

const ToggleContent = styled.div`
  position: relative;
  height: 26px;
  width: 42px;
`

const ToggleTitle = styled.span`
  font-size: 16px;
  position: relative;
  color: white;
  padding-right: 6px;
  font-size: 14px;
  text-align: right;
  &.is-disabled {
    color: #4d4d4d;
  }
`

const ToggleLabel = styled.label`
  left: 0;
  width: 42px;
  height: 26px;
  position: absolute;
  display: block;
  border-radius: 15px;
  background: #202428;
  border: 1.5px solid #333b44;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 2.5px 3px;
    background: #282e33;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`
const ToggleCheckbox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  position: absolute;
  height: 26px;
  cursor: pointer;
  margin: 0;
  &:checked + .ToggleLabel {
    background: ${colors.green};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 19px;
      transition: 0.2s;
    }
  }
`

export {
  ToggleWrapper,
  ToggleTitle,
  ToggleLabel,
  ToggleCheckbox,
  ToggleContent,
}
