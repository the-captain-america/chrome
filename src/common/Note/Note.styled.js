import styled, { css } from 'styled-components'
import { colors, mbFn, mtFn, responsiveProps } from '@common/Theme'

const NoteContent = styled.div`
  ${mbFn};
  ${mtFn};
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    margin-left: 2em;
    li {
      &:before {
        content: '-';
        color: #fbfbfb;
        display: inline-block;
        width: 1em;
      }
      position: relative;
      font-size: 14px;
      line-height: 24px;
      color: #fbfbfb;
      list-style: none;
      padding: 0;
      margin-bottom: 8px;
      span {
        color: #fbfbfb;
        padding: 3px 6px;
        border-radius: 4px;
        background: #333b44;
        font-size: 14px;
      }
      strong {
        color: black;
        padding: 3px 6px;
        border-radius: 4px;
        background: #3aeeb8;
        font-weight: 300;
        font-size: 14px;
      }
      a {
        color: #3aeeb8;
        text-decoration: underline;
      }
    }
  }
`

const NoteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  ul {
    margin: 0;
    padding: 0 0 0 16px;
  }
  ul li {
    margin: 0px;
    text-transform: none;
    line-height: 24px;
    font-size: 14px;
    font-weight: 400;
    color: rgb(251, 250, 251);
  }
  ${(props) =>
    props.$isNode &&
    css`
      display: flex;
      color: #fbfbfb;
      line-height: 24px;
      font-size: 14px;
      span.pill {
        color: #fbfbfb;
        padding: 3px 6px;
        border-radius: 4px;
        background: #333b44;
        font-size: 14px;
      }
    `}
`

const NoteContainer = styled.div`
  width: 100%;
  padding: 11px;
  border: 1px solid #333b44;
  border-radius: 4px;
  background: #282e32;
  ${mbFn};
  ${mtFn};
  display: flex;
  flex-direction: column;
  ${({ $maxWidth }) => responsiveProps('max-width', $maxWidth)};
  ${(props) => {
    const { variant: preType } = props
    const type = preType.toUpperCase()
    if (type === 'NOTE') {
      return css`
        background: #282e32;
      `
    }
    if (type === 'UPDATE') {
      return css`
        border: 1.5px solid rgb(176, 58, 238);
        background: rgb(176 58 238 / 13%);
        .Text {
          color: rgb(176, 58, 238);
        }
      `
    }
    if (type === 'ISSUE') {
      return css`
        background: ${colors.red};
        .Text {
          color: #e7e6e9;
        }
      `
    }
    if (type === 'RESOLVED') {
      return css`
        background: ${colors.green};
        .Text {
          color: #305b4e;
        }
      `
    }
  }}
`

const IconContainer = styled.div`
  display: flex;
  margin: 0;
  height: 20px;
  width: 20px;
  justify-content: center;
  align-items: center;
  flex-basis: 20px;
  margin-right: 8px;

  ${(props) => {
    const { type: preType } = props
    const type = preType.toUpperCase()
    if (type === 'ISSUE') {
      return css`
        background: ${colors.red};
        svg > path {
          fill: #e7e6e9;
        }
      `
    }
    if (type === 'UPDATE') {
      return css`
        svg > path {
          fill: rgb(176, 58, 238);
        }
      `
    }
    if (type === 'RESOLVED') {
      return css`
        svg > path {
          fill: #305b4e;
        }
      `
    }
  }}
`

export { NoteContent, NoteWrapper, NoteContainer, IconContainer }
