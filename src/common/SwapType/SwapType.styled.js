import styled, { css } from 'styled-components'

const Container = styled.ul`
  background: transparent;
  border-radius: 6px;
  list-style: none;
  box-sizing: border-box;
  flex-direction: row;
  margin: 0;
  padding: 0;
  margin-left: 16px;
`

const SwapItem = styled.li`
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9fafc;
  border: 1px solid #e3e5eb;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  min-width: 32px;
  padding: 5px 8px;
  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #a9aeb9;
  }
`

export { Container, SwapItem }
