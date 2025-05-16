import styled, { css } from 'styled-components'

import {
  mtFn,
  mbFn,
  colors,
  heightFn,
  scrollStylePrimary,
  maxHeightFn,
} from '@common/Theme'
import { bgColorFn } from '@common/Theme'

const elementStyles = css`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 12px;
  border-radius: 4px;
  border: 2px solid transparent;
  transition: all 0.2s ease-in-out;
`

const textStyles = css`
  line-height: 14px;
  font-size: 14px;
  font-weight: 400;
  color: #171717;
`

const pseudoStyles = css`
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`

const FieldLabel = styled.div`
  color: white;
  font-weight: 300;
  font-size: 14px;
  padding-bottom: 8px;
  color: #b2b2b2;
  line-height: 20px;
  span {
    font-size: 11px;
    color: white;
  }
`

const TextAreaButton = styled.button`
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: rgb(176 58 238 / 8%);
  ${elementStyles};
  ${textStyles};
  ${pseudoStyles};
  transition: all 0.2s ease-in-out;
  border: 1.5px solid ${colors.purple};
  ${(props) =>
    props.isLoading &&
    css`
      width: 115px;
    `};
  span {
    color: ${colors.purple};
    transition: all 0.2s ease-in-out;
  }
  svg {
    path {
      stroke: ${colors.purple};
    }
    rect {
      stroke: ${colors.purple};
    }
  }
  &:hover {
    background: rgb(176 58 238 / 20%);
    span {
      color: #b681d2;
    }
    svg {
      path {
        transition: all 0.2s ease-in-out;
        stroke: #b681d2;
      }
      rect {
        transition: all 0.2s ease-in-out;
        stroke: #b681d2;
      }
    }
  }
`

const FieldForm = styled.div`
  position: relative;
  textarea {
    position: absolute;
    left: -9999px;
    top: -9999px;
  }
  button {
    position: absolute;
    right: 16px;
    bottom: 32px;
  }
`

const Primary = styled.textarea`
  line-height: 20px;
  box-sizing: border-box;
  padding: 14px 16px;
  display: block;
  width: 100%;
  resize: none;
  border: 1px solid #333b44;
  background: #282e33;
  border-radius: 4px;
  line-height: 24px;
  outline: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  ${bgColorFn};
  ${mbFn};
  ${mtFn};
  ${maxHeightFn}
  color: white;
  ${scrollStylePrimary};
  &::placeholder {
    color: #7e7e7e;
    font-size: 16px;
  }
  &:hover {
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    outline: none;
  }
  &:focus {
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    outline: none;
  }
  &:active {
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    outline: none;
  }
`

const Secondary = styled.textarea`
  max-height: 200px;
  height: 200px;
  line-height: 20px;
  box-sizing: border-box;
  padding: 14px 16px;
  display: block;
  width: 100%;
  resize: none;
  background: ${colors.blue};
  border: 2px solid ${colors.blue};
  outline: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.07);
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  border-radius: 4px;
  ${mbFn};
  ${mtFn};
  color: white;
  ${scrollStylePrimary};
  ${heightFn};
  &::placeholder {
    color: #797979;
    font-size: 16px;
  }
  &:hover {
    border-bottom: 2px solid transparent;
    outline: none;
  }
  &:focus {
    border-bottom: 2px solid transparent;
    outline: none;
  }
  &:active {
    border-bottom: 2px solid transparent;
    outline: none;
  }
`

export { Primary, Secondary, FieldLabel, FieldForm, TextAreaButton }
