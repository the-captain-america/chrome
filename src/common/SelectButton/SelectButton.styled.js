import styled, { css } from 'styled-components'
import { mtFn, mbFn } from '@common/Theme'

const green = '#3AEEB8'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-top: 16px;

  ${mtFn};
  ${mbFn};
`

const Label = styled.span`
  font-weight: 300;
  font-size: 14px;
  padding-bottom: 8px;
  color: rgb(178, 178, 178);
  line-height: 20px;
`

const Group = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ${(props) =>
    props.isActive &&
    css`
      grid-template-columns: repeat(2, 1fr);
    `}
  gap: 8px;
`

const Option = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 12px 16px;
  border: 1.5px solid #343b44;
  flex-direction: row;
  min-width: 100px;
  border-radius: 4px;
  background: #282e32;
  position: relative;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
    `};
  span.label {
    color: #aeaeae;
    white-space: nowrap;
    line-height: 20px;
    user-select: none;
  }
  svg {
    path {
      stroke: #aeaeae;
    }
  }

  ${(props) =>
    props.isActive &&
    css`
      background: ${green};
      border: 1.5px solid rgb(58, 238, 184);
      background: rgba(58, 238, 184, 0.36);
      span.label {
        color: white;
      }
      svg {
        path {
          stroke: white;
        }
      }
    `};
`

export { Option, Label, Group, Container }
