import styled, { css } from 'styled-components'

const TabList = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  padding: 0;
  margin: 0;
`

const TabButton = styled.button`
  background: #f1f3f6;
  box-shadow: none;
  line-height: 18px;
  font-size: 14px;
  font-weight: 500;
  padding: 5px 12px;
  border: 1px solid transparent;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
  color: #a9aeb9;
  ${(props) =>
    props.isActive &&
    css`
      background: white;
      box-shadow: 0px 2px 2px 0px rgba(28, 17, 44, 0.1);
      line-height: 18px;
      color: #1d2a43;
      font-size: 14px;
      font-weight: 500;
    `}
`

export { TabList, TabButton }
