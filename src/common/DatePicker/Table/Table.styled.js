import styled from 'styled-components'
import { colors } from '@common/Theme'

const Table = styled.table`
  width: 100%;
  min-width: 300px;
  border-collapse: collapse;
  border-spacing: 0;
  outline: none;
  background: transparent;
  &:focus {
    outline: none;
  }
  abbr {
    text-decoration: none;
  }
`

const mappingGuide = {
  focused: '#b03bee',
  hover: '#E1FAF9',
  selected: '#8DE2E0',
}

const CalendarDay = styled.td`
  cursor: pointer;
  padding: 0;
  text-align: center;
  position: relative;
  color: ${colors.white};
  height: 47px;
  width: 40px;
  background: #282e32;
  border: 1px solid rgb(51, 59, 68);
  outline: none;
  &:hover {
    background: rgb(61 73 81);
  }
  &[aria-current='date'] {
    background: rgb(176 59 238 / 32%);
    font-weight: 700;
  }
  &[data-selected='true'] {
    background: #282e32;
    &:after {
      content: '';
      position: absolute;
      z-index: 2;
      border: 3px dotted ${mappingGuide.focused};
      width: 100%;
      height: 100%;
      left: 0px;
      top: 0px;
    }
  }
  &[data-focused='true'] {
    background: ${mappingGuide.focused};
  }

  &.focused {
    &:focus-visible {
      outline: none;
      &:after {
        content: '';
        position: absolute;
        z-index: 2;
        background: transparent;
        transition: none;
        border: 3px solid ${mappingGuide.focused};
        width: calc(100%);
        height: calc(100%);
        border-radius: 0px;
        left: 0px;
        top: 0px;
      }
    }
  }
`

export { Table, CalendarDay }
