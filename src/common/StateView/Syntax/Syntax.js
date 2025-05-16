import { bgColorFn } from '@common/Theme'
import styled, { css } from 'styled-components'

const monokiTheme = css`
  span {
    font-size: 16px;
    line-height: 26px;
    line-height: 21px;
    display: inline-block;
    max-width: 200px;
    line-height: 20px;
    ${(props) =>
      props.enableElipsis &&
      css`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      `};
    &.string {
      color: rgb(247, 192, 58);
    }
    &.number {
      color: rgb(247, 192, 58);
      color: rgb(76, 58, 238);
    }
    &.boolean {
      color: rgb(238, 58, 58);
    }
    &.null {
      color: #f97e72;
    }
    &.key {
      color: rgb(58, 238, 184);
    }
  }
`

const greyTheme = css`
  span {
    font-size: 14px;
    line-height: 21px;
    ${(props) =>
      props.enableElipsis &&
      css`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      `};
    text-transform: capitalize;
    display: block;
    &.string {
      color: white;
    }
    &.number {
      color: white;
    }
    &.boolean {
      color: white;
    }
    &.null {
      color: white;
    }
    &.key {
      color: grey;
    }
  }
`
const getTheme = (val) => {
  if (!val) return 'DEFAULT'
  const resultTheme = val.toUpperCase()
  return resultTheme
}

const themePicker = (theme = '') => {
  const match = getTheme(theme)
  return {
    GREY: greyTheme,
    MONOKI: monokiTheme,
    DEFAULT: monokiTheme,
  }[match]
}

const SyntaxPre = styled.pre`
  outline: 1px solid transparent;
  padding: 8px;
  margin: 0px;
  color: white;
  ${bgColorFn};
  ${(props) =>
    props.themeType &&
    css`
      ${themePicker(props.themeType || 'DEFAULT')}
    `}
`

const syntaxHighlight = (json) => {
  const updateJson = json
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  return updateJson.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function (match) {
      let cls = 'number'
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'key'
        } else {
          cls = 'string'
        }
      } else if (/true|false/.test(match)) {
        cls = 'boolean'
      } else if (/null/.test(match)) {
        cls = 'null'
      }
      return '<span class="' + cls + '">' + match + '</span>'
    },
  )
}

export { SyntaxPre, syntaxHighlight }
