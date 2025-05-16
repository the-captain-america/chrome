import styled, { css } from 'styled-components'
import { colors } from '@common/Theme'

const TabButtonUnderlined = styled.button`
  background: none;
  border: none;
  line-height: 18px;
  font-size: 14px;
  font-weight: 500;
  padding: 7px 12px;
  outline: none;
  position: relative;

  &:after {
    content: none;
  }
  cursor: pointer;
  &:focus {
    outline: none;
  }
  color: #a9aeb9;
  ${(props) =>
    props.isActive &&
    css`
      background: transparent;
      line-height: 18px;
      color: #1d2a43;
      font-size: 14px;
      font-weight: 500;
      &:after {
        content: '';
        position: absolute;
        bottom: -2px;
        width: calc(100% - 24px);
        transform: translate(-50%, 0);
        height: 2px;
        background-color: ${colors.orange};
        left: 50%;
      }
    `}
`

const TabUnderlineList = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  padding: 0;
  margin: 0;
  padding-left: 4px;
  padding-right: 4px;
  background-color: none;
`

export { TabButtonUnderlined, TabUnderlineList }
