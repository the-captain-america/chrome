import styled, { css } from 'styled-components'
import { colorFn, lineHeightFn } from '@common/Theme'

const widthFnPx = ({ width }) =>
  width &&
  css`
    width: ${width}px;
  `

const sizeFnPx = ({ size }) =>
  size &&
  css`
    font-size: ${size}px;
  `

const configStyles = css`
  ${colorFn};
  ${widthFnPx}
  ${sizeFnPx};
  ${lineHeightFn};
`

const EditInputGroup = styled.div``

const EditInputField = styled.input`
  font-size: 16px;
  font-weight: inherit;
  line-height: 20px;
  padding: 0;
  font-weight: 500;
  border: none;
  outline: none;
  width: 100px;
  background: transparent;
  &::selection {
    background: black;
    color: white;
  }
  ${configStyles};
`

const EditContainer = styled.div.attrs({ className: 'EditContainer__Edit' })`
  width: calc(100% - 20px);
`

const EditHeading = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  margin-left: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  ${configStyles}
`

export { EditInputGroup, EditInputField, EditContainer, EditHeading }
