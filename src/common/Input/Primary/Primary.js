import styled, { css } from 'styled-components'
import { colors, mbFn, mtFn } from '@common/Theme'

const srOnly = css`
  outline: none;
  &:active {
    &:after {
      display: none;
    }
  }
  &:focus-visible {
    outline: none;
    box-shadow: 0px 0px 0px 1px #9a9a9a;
    &::placeholder {
      color: transparent;
    }
  }
`

const Primary = styled.input`
  outline: none;
  border-radius: 4px;
  background: #282e33;
  font-size: 16px;
  padding: 13px 10px 12px 11px;
  color: white;
  width: 100%;
  appearance: none;
  box-sizing: border-box;
  border: 1.5px solid #333b44 !important;
  position: relative;
  transition: all 0.2s ease-in-out;
  appearance: none;

  ${(props) =>
    props.isDate &&
    css`
      &[type='date']::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
      }
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"><path fill="%23bbbbbb" d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg>');
      background-repeat: no-repeat;
      background-position: right 10px center;
    `};

  ${(props) =>
    props.isTime &&
    css`
      &[type='time']::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
      }
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"><path fill="%23bbbbbb" d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg>');
      background-repeat: no-repeat;
      background-position: right 10px center;
    `};

  ${srOnly};

  &:focus {
    border: 1.5px solid rgb(115 121 128) !important;
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.12);
  }

  &::placeholder {
    color: #b2b2b2;
  }
  &:disabled {
    border: 1.5px solid #333b44 !important;
    color: #a9aeb9;
    cursor: not-allowed;
  }

  ${(props) =>
    props.isMatched &&
    css`
      border: 1.5px solid #26a982 !important;
      background: #282e32;
      color: #26a982;
      &:hover {
        border: 1.5px solid #26a982 !important;
        background: #282e32;
      }
      &:focus {
        border: 1.5px solid #26a982 !important;
        background: #282e32;
      }
      &:active {
        border: 1.5px solid #26a982 !important;
        background: #282e32;
      }
    `};

  ${(props) =>
    props.isCopied &&
    css`
      border: 1.5px solid #53b353;
      background: ${colors.green};
      &:focus {
        border: 1.5px solid #53b353;
        background: ${colors.green};
      }
    `};

  ${(props) =>
    props.variant === 'warning' &&
    css`
      background: transparent;

      color: white;
      border: 1.5px solid ${colors.red};
      &:focus {
        border: 1.5px solid #d28533;
        box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.12);
      }
    `};

  ${mbFn};
  ${mtFn};
`

export { Primary }
