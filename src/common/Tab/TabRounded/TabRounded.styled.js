import styled, { css } from 'styled-components'

const basicListStyles = css`
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 4px;
  overflow: hidden;
`

const basicStyles = css`
  border-radius: 0px;
  cursor: pointer;
  line-height: 21px;
  font-weight: 500;
  font-size: 16px;
  max-width: 100%;
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 8px;
  outline: none;
`

const Primary = styled.li`
  ${basicListStyles};
  ${basicStyles};
  box-shadow: none;
  color: #a9aeb9;
  border-radius: 4px;
  background: transparent;
  text-transform: capitalize;
  border: 1px solid transparent;
  background: #f4f4f4;
  ${(props) =>
    props.isActive &&
    css`
      background: #f4f4f4;
      color: #1d2a43;
    `}
`

const Secondary = styled.li`
  ${basicStyles};
  color: #a9aeb9;
  border-radius: 4px;
  background: transparent;
  text-transform: capitalize;
  border: 1px solid transparent;

  user-select: none;
  font-size: 14px;
  padding: 0;
  display: flex;
  padding: 4px;
  span {
    padding: 6px;
    display: flex;
    align-items: center;
    background: transparent;
    border-radius: 4px;
  }
  ${(props) =>
    props.isActive &&
    css`
      span {
        padding: 6px;
        display: flex;
        align-items: center;
        color: white;
        background: #333b44;
        background: #282e32;
        border-radius: 4px;
      }
      color: #1d2a43;
    `}
`

export { Primary, Secondary }
