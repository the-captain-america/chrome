import { css } from 'styled-components'
import { colors } from './colors'

const config = {
  horizonalScrollbarHeight: 8,
}

const trackStyles = css`
  &::-webkit-scrollbar-track {
    background: #eff1f5;
    border: none;
    box-shadow: none;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e3e5eb;
    border: none;
    box-shadow: none;
    border-radius: 4px;
  }
`

const scrollStyleSecondary = css`
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  &::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    background: #a1a1a1;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #878787;
  }
  &::-webkit-scrollbar-thumb:active {
    background: #808080;
  }
  &::-webkit-scrollbar-track {
    background: #e0dfdf;
    border: 0px none #ffffff;
    border-radius: 42px;
  }
  &::-webkit-scrollbar-track:hover {
    background: #e0dfdf;
  }
  &::-webkit-scrollbar-track:active {
    background: #e0dfdf;
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`

const scrollStylePrimary = css`
  &::-webkit-scrollbar-track {
    background: #1f2428;
    border: 0px none #ffffff;
    border-radius: 42px;
  }
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  &::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    background: #4c3aee;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #4c3aee;
  }
  &::-webkit-scrollbar-thumb:active {
    background: #808080;
  }

  &::-webkit-scrollbar-track:hover {
    background: #1f2428;
  }
  &::-webkit-scrollbar-track:active {
    background: #1f2428;
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`

const scrollBarStyle = css`
  &::-webkit-scrollbar {
    width: ${config.horizonalScrollbarHeight}px;
    height: ${config.horizonalScrollbarHeight}px;
  }
  &::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
    cursor: move;
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
  }
  &::-webkit-scrollbar-thumb {
    background: #a1a1a1;
    border: 0px none #ffffff;
    border-radius: 50px;
    cursor: move;
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #878787;
    cursor: move;
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
  }
  &::-webkit-scrollbar-thumb:active {
    background: #808080;
  }
  &::-webkit-scrollbar-track {
    background: #e0dfdf;
    border: 0px none #ffffff;
    border-radius: 42px;
  }
  &::-webkit-scrollbar-track:hover {
    background: #e0dfdf;
  }
  &::-webkit-scrollbar-track:active {
    background: #e0dfdf;
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`

const trackHoverStyle = css`
  &::-webkit-scrollbar-track {
    transition: all 0.2s ease-in-out;
    opacity: 0;
    background: none;
    border: none;
    box-shadow: none;
    width: 14px;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    transition: all 0.2s ease-in-out;
    opacity: 0;
    background: #eeeff1;
    border: none;
    box-shadow: none;
    border-radius: 4px;
  }
  &:hover {
    &::-webkit-scrollbar-track {
      opacity: 1;
    }
    &::-webkit-scrollbar-thumb {
      opacity: 1;
    }
  }
`

const scrollBarStyleBlue = css`
  &::-webkit-scrollbar-track {
    border: 0px none #ffffff;
    border-radius: 42px;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar {
    width: 5px;
    height: 10px;
  }
  &::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
    cursor: grabbing;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.blue};
    border: 0px none #ffffff;
    border-radius: 50px;
    height: 16px;
    width: 10px;
    transition: all 0.2s ease-in-out;
    cursor: grabbing;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.blue};
    transform: scale(1.03);
  }
  &::-webkit-scrollbar-thumb:active {
    background: ${colors.blue};
  }
`

export {
  trackStyles,
  trackHoverStyle,
  scrollBarStyle,
  scrollStylePrimary,
  scrollBarStyleBlue,
  scrollStyleSecondary,
}
