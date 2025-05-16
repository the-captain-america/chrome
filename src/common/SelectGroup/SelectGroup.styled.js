import styled, { css } from 'styled-components'
import { scrollStylePrimary } from '@common/Theme'
import { colors } from '@common/Theme'

const HeaderContainer = styled.div`
  margin: 16px 0 0 0;
  border: 2px solid #dadada;
  display: flex;
  padding: 16px;
  border-radius: 4px;
  flex-direction: column;
  width: 100%;
`

const Group = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  margin: 0;
  margin-top: 16px;
  flex-direction: row;
  padding: 0 0 16px 0;
  overflow-x: auto;
  ${scrollStylePrimary}
`

const Custom = styled.div`
  span {
    font-size: 14px;
    margin-left: 8px;
    color: grey;
  }
`

const Success = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-left: auto;
`

const SelectedItemContainer = styled.li`
  list-style: none;
  padding: 16px 12px 16px 16px;
  background: white;
  border-radius: 4px;
  margin-left: 8px;
  border-style: dashed;
  max-width: 164px;
  min-width: 164px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  word-wrap: break-word;
  width: 100%;
  cursor: pointer;
  border: 2px solid rgb(204, 204, 204);
  button {
    margin: 0;
    padding: 0;
    width: 32px;
    height: 32px;
    min-width: 32px;
    border-radius: 4px;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #dadada;
    margin-left: auto;
    background: transparent;
    &:hover {
      cursor: pointer;
      background: ${colors.orange};
      svg {
        path,
        line {
          stroke: white;
        }
      }
    }
  }
  &:first-child {
    margin-left: 0;
  }
  ${(props) =>
    props.isActive &&
    css`
      border: 2px solid ${colors.orange};
    `}
`

export { HeaderContainer, Success, Custom, Group, SelectedItemContainer }
