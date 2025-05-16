import { css } from 'styled-components'

const hiddenFn = ({ isHidden }) =>
  isHidden &&
  css`
    display: none;
  `

const widthFnPx = ({ width }) =>
  width &&
  css`
    max-width: ${width}px;
  `

const enableEllipsisFn = ({ enableEllipsis }) =>
  enableEllipsis &&
  css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `

const maxWidthFn = ({ maxWidth }) => {
  if (maxWidth === 'auto') {
    return css`
      max-width: auto;
    `
  }
  if (maxWidth === '100%') {
    return css`
      max-width: 100%;
    `
  }
  if (typeof maxWidth === 'string' && maxWidth.includes('px')) {
    return css`
      max-width: ${maxWidth};
    `
  }
  if (typeof maxWidth === 'string' && maxWidth.includes('%')) {
    return css`
      max-width: ${maxWidth};
    `
  }
  if (typeof maxWidth === 'number') {
    return css`
      max-width: ${maxWidth}px;
    `
  }
  return (
    maxWidth &&
    css`
      max-width: ${maxWidth};
    `
  )
}

const mtFn = ({ mt }) => {
  const specialValues = {
    unset: 'unset',
    auto: 'auto',
    '100%': '100%',
    0: '0',
  }

  if (mt !== 0 && !mt) {
    return css``
  }

  const mtValue =
    specialValues[mt] || (mt.toString().includes('px') ? mt : `${mt}px`)

  return css`
    margin-top: ${mtValue};
  `
}

const mbFn = ({ mb }) => {
  const specialValues = {
    unset: 'unset',
    auto: 'auto',
    '100%': '100%',
    0: '0',
  }

  if (mb !== 0 && !mb) {
    return css``
  }

  const mbValue =
    specialValues[mb] || (mb.toString().includes('px') ? mb : `${mb}px`)

  return css`
    margin-bottom: ${mbValue};
  `
}

const pbFn = ({ pb }) =>
  pb &&
  css`
    padding-bottom: ${pb}px;
  `

const ptFn = ({ pt }) =>
  pt &&
  css`
    padding-top: ${pt}px;
  `

const mlFn = ({ ml }) => {
  if (ml === 'unset') {
    return css`
      margin-left: unset;
    `
  }
  if (ml === 'auto') {
    return css`
      margin-left: auto;
    `
  }
  if (ml === '100%') {
    return css`
      margin-left: 100%;
    `
  }
  if (typeof ml === 'string' && ml.includes('px')) {
    return css`
      margin-left: ${ml};
    `
  }
  if (typeof ml === 'string' && ml.includes('%')) {
    return css`
      margin-left: ${ml};
    `
  }
  if (typeof ml === 'number') {
    return css`
      margin-left: ${ml}px;
    `
  }
  return (
    ml &&
    css`
      margin-left: ${ml};
    `
  )
}

const mrFn = ({ mr }) =>
  mr &&
  css`
    margin-right: ${mr}px;
  `

const bgColorFn = ({ bgColor }) =>
  bgColor &&
  css`
    background: ${bgColor};
  `

const preventSelectFn = ({ preventSelect }) =>
  preventSelect &&
  css`
    user-select: none;
  `

const borderColorFn = ({ color }) =>
  color &&
  css`
    border-color: color;
  `

const plFn = ({ pl }) =>
  (pl || pl === 0) &&
  css`
    padding-left: ${pl}px;
  `

const prFn = ({ pr }) =>
  (pr || pr === 0) &&
  css`
    padding-right: ${pr}px;
  `

const lineHeightFn = ({ lineHeight }) =>
  lineHeight &&
  css`
    line-height: ${lineHeight}px;
  `

const heightFn = ({ height }) =>
  height &&
  css`
    height: ${height};
  `

const fontSizeFn = ({ size }) =>
  size &&
  css`
    font-size: ${size}px;
  `

const weightFn = ({ weight = 500 }) =>
  weight &&
  css`
    font-weight: ${weight};
  `

const widthFn = ({ width }) => {
  if (width === 'unset') {
    return css`
      width: unset;
    `
  }
  if (width === 'auto') {
    return css`
      width: auto;
    `
  }
  if (width === '100%') {
    return css`
      width: 100%;
    `
  }
  if (typeof width === 'string' && width.includes('px')) {
    return css`
      width: ${width};
    `
  }
  if (typeof width === 'string' && width.includes('%')) {
    return css`
      width: ${width};
    `
  }
  if (typeof width === 'number') {
    return css`
      width: ${width}px;
    `
  }
  return (
    width &&
    css`
      width: ${width};
    `
  )
}

const linkFn = ({ link }) =>
  link &&
  css`
    text-decoration: underline;
    cursor: pointer;
  `

const flipFn = ({ flip }) =>
  flip &&
  css`
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: 'FlipH';
  `

const rotateFn = ({ rotate }) => css`
  transition: transform 0.3s ease;
  ${rotate &&
  css`
    transform: rotate(${rotate}deg);
  `}
`

const centerFn = ({ center }) =>
  center &&
  css`
    text-align: center;
  `

const colorFn = ({ color }) =>
  color &&
  css`
    color: ${color};
  `

const paddingFn = ({ padding }) =>
  padding &&
  css`
    padding: ${padding};
  `

const maxHeightFn = ({ maxHeight }) => {
  const checkPx = maxHeight && maxHeight.toString().includes('px')
  if (checkPx) {
    return css`
      max-height: ${maxHeight};
    `
  }

  return css`
    max-height: ${maxHeight}px;
  `
}

const flexDirectionFn = ({ direction }) => css`
  flex-direction: ${direction};
`

const justifyContentFn = ({ justifyContent }) => css`
  justify-content: ${justifyContent};
`

export {
  weightFn,
  linkFn,
  widthFn,
  centerFn,
  colorFn,
  heightFn,
  flexDirectionFn,
  justifyContentFn,
  maxHeightFn,
  bgColorFn,
  paddingFn,
  lineHeightFn,
  preventSelectFn,
  maxWidthFn,
  fontSizeFn,
  mtFn,
  mbFn,
  mlFn,
  mrFn,
  pbFn,
  ptFn,
  plFn,
  prFn,
  flipFn,
  rotateFn,
  hiddenFn,
  borderColorFn,
  widthFnPx,
  enableEllipsisFn,
}
