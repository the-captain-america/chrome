import styled, { css, keyframes } from 'styled-components'
import { mtFn, mbFn, paddingFn, maxWidthFn } from '@common/Theme'
import { bgColorFn } from '@common/Theme'

const widthFn = ({ $width }) => {
  if ($width === 'unset') {
    return css`
      width: unset;
    `
  }
  if ($width === 'auto') {
    return css`
      width: auto;
    `
  }
  if ($width === '100%') {
    return css`
      width: 100%;
    `
  }
  if (typeof $width === 'string' && $width.includes('px')) {
    return css`
      width: ${$width};
    `
  }
  if (typeof $width === 'string' && $width.includes('%')) {
    return css`
      width: ${$width};
    `
  }
  if (typeof $width === 'number') {
    return css`
      width: ${$width}px;
    `
  }
  return (
    $width &&
    css`
      width: ${$width};
    `
  )
}

const SectionContainer = styled.div`
  border-radius: 6px;
  display: flex;
  background: #282e33;
  flex-direction: column;
  box-shadow: rgb(1 1 1 / 22%) 0px 2px 4px, rgba(28, 17, 44, 0.15) 0px 5px 12px;
  width: 100%;
  max-width: 100%;
  position: relative;
  margin-bottom: 24px;
  scroll-margin: 20px;
  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: none;
  }

  ${widthFn};
  ${maxWidthFn};
  ${mtFn};
  ${mbFn};
  ${bgColorFn};
  ${(props) => props.extend};
  ${(props) =>
    props.isExpanded &&
    css`
      height: 100vh;
      width: 100vw;
      position: fixed;
      top: 0;
      left: 0;
      border-radius: 0;
      z-index: 9999;
      overflow: auto;
    `};
  &:hover {
    .Dragger {
      opacity: 1;
    }
  }
`

const SectionControl = styled.div`
  position: relative;
  width: 100%;
  .LocationWrapper {
    padding: 0 16px;
  }
  .LocationWeader {
    padding: 16px;
  }
`

const SectionHeaderContainer = styled.div`
  padding: 16px 16px 16px 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  overflow: hidden;
  border-radius: 8px 8px 0 0px;
  h2 {
    font-weight: 600;
    font-size: 20px;
    margin: 0;
    color: #f3f3f4;
    display: flex;
    flex-basis: 100%;
  }
  div {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`

const SectionTypeGroup = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 30px;
  right: 52px;
`

const pulseBorder = keyframes`
  0% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  100% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: .4;
  }
`
const SectionDragger = styled.div`
  position: absolute;
  top: 0;
  right: -10px;
  overflow: hidden;
  width: 11px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  cursor: ew-resize;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  z-index: 1;
  .SVG {
    min-width: 20px;
    min-height: 20px;
    justify-content: flex-end;
    align-items: flex-end;
  }
`

const SectionTypeItem = styled.li`
  list-style: none;
  position: relative;
  display: flex;
  width: 20px;
  height: 20px;
  max-height: 20px;
  max-width: 20px;
  border-radius: 50%;
  border: 2px solid #3a393e;
  transition: all 0.2s ease-in-out;
  margin-left: auto;
  animation: ${pulseBorder} 1500ms ease-in 0s infinite alternate;
  ${(props) =>
    props.bgColor &&
    css`
      background: ${props.bgColor};
    `}
  ${(props) =>
    props.variant === 'low' &&
    css`
      box-shadow: 0px 0px 0px 2px rgb(238 204 76 / 36%);
    `}
  ${(props) =>
    props.variant === 'fair' &&
    css`
      box-shadow: 0px 0px 0px 2px rgba(114, 206, 188, 0.5);
    `}
${(props) =>
    props.variant === 'high' &&
    css`
      box-shadow: 0px 0px 0px 2px rgba(226, 78, 51, 0.5);
    `}
${(props) =>
    props.variant === 'medium' &&
    css`
      box-shadow: 0px 0px 0px 2px hsl(28deg 77% 57% / 52%);
    `}

  
padding: 0;
  margin: 0;
`

const SectionFooter = styled.div`
  width: 100%;
  border-top: 1px solid #373639;
  height: 20px;
  padding-top: 16px;
  margin-top: 16px;
  padding-bottom: 16px;
  background: #343a40;
  border-radius: 0 0 6px 6px;
`

export {
  SectionContainer,
  SectionControl,
  SectionHeaderContainer,
  SectionTypeGroup,
  SectionTypeItem,
  SectionFooter,
  SectionDragger,
}
