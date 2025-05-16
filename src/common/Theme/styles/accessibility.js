import { css } from 'styled-components'

// The srOnly requires it's parent to have position: relative

const srOnly = css`
  outline: none;
  &:active {
    &:after {
      display: none;
    }
  }
  &:focus-visible {
    outline: none;
    &:after {
      content: '';
      position: absolute;
      z-index: 2;
      background: transparent;
      transition: none;
      border: 2px solid #368e8c;
      width: calc(100% + 12px);
      height: calc(100% + 12px);
      border-radius: 4px;
      left: -6px;
      top: -6px;
    }
  }
`

const resetSrOnly = css`
  &:focus-visible {
    outline: none;
    &:after {
      content: '';
      display: none;
    }
  }
`

const visuallyHidden = css`
  position: absolute;
  overflow: hidden;
  padding: 0;
  border: 0;
  margin: -1px;
  block-size: 1px;
  clip: rect(0, 0, 0, 0);
  inline-size: 1px;
  visibility: inherit;
  white-space: nowrap;
`

export { srOnly, resetSrOnly, visuallyHidden }
