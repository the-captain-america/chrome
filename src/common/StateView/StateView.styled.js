import styled, { css } from 'styled-components'
import { colors, mbFn, mtFn, responsiveProps } from '@common/Theme'

const Container = styled.div`
  position: relative;
  ${(props) =>
    props.maxHeight &&
    css`
      overflow-y: auto;
      height: 400px;
      max-height: ${props.maxHeight}px;
    `};
  ${(props) =>
    props.minHeight &&
    css`
      min-height: ${props.minHeight}px;
      height: 400px;
    `};

  ${({ $maxWidth }) => responsiveProps('max-width', $maxWidth)};
  ${(props) =>
    props.$width &&
    css`
      width: ${props.$width};
    `};
  ${(props) => props.extend};
`

const Wrapper = styled.div`
  width: 100%;
  border: none;
  box-shadow: none;
  border-radius: 4px;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  min-height: 100px;

  ${mbFn};
  ${mtFn};
  pre {
    padding: 7px;
    overflow-x: auto;
    border-radius: 4px;
    min-height: 100px;
    background: #1b2025;
  }

  ${(props) =>
    props.maxHeight &&
    css`
      overflow-y: auto;
      height: 400px;
      max-height: ${props.maxHeight}px;
    `};
  ${(props) =>
    props.minHeight &&
    css`
      min-height: ${props.minHeight}px;
      height: 400px;
    `};
  textarea {
    position: absolute;
    left: -9999px;
    top: -9999px;
  }
`

const StateViewCopyButton = styled.button`
  padding: 10px 14px;
  background: transparent;
  border-radius: 4px;
  border: 1.5px solid ${colors.blue};
  margin: 0;
  cursor: pointer;
  color: white;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 16px;
  right: 16px;
  span.label {
    font-size: 16px;
    line-height: 21px;
    color: ${colors.blue};
  }
  svg.COPY {
    rect {
      stroke: ${colors.blue};
    }
    path {
      stroke: ${colors.blue};
    }
  }
  &.is-active {
    background: transparent;
    border: 1.5px solid ${colors.green};
    span.label {
      font-size: 16px;
      line-height: 21px;
      color: ${colors.green};
    }
    svg.COPY {
      rect {
        stroke: ${colors.green};
      }
      path {
        stroke: ${colors.green};
      }
    }
  }
`

export { Wrapper, StateViewCopyButton, Container }
