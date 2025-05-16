import styled, { css } from 'styled-components'

const TabContainer = styled.div`
  align-items: flex-start;
  display: flex;
  ${(props) => {
    const { variant } = props
    if (variant === 'BORDER') {
      return css`
        width: 100%;
      `
    }
  }}
`

const TabGroup = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  padding: 6px;
  padding: 4px;
  flex-direction: row;
  box-sizing: border-box;
  align-self: flex-start;
  ${(props) => {
    const { variant } = props
    if (variant === 'PRIMARY') {
      return css`
        padding: 4px;
        width: 100%;
        background: #f1f3f6;

        border-radius: 4px;
      `
    }
    if (variant === 'SECONDARY') {
      return css`
        padding: 0px;
        background: #f1f2f6;
        border-radius: 4px;
        background: #1f2428;
      `
    }
    if (variant === 'BORDER') {
      return css`
        padding: 0;
        background: none;
        width: 100%;
        padding-left: 6px;
        border-bottom: 1px solid #e3e5eb;
      `
    }
    if (variant === 'DEFAULT') {
      return css`
        padding: 0;
        background: none;
      `
    }
  }}
`

export { TabContainer, TabGroup }
