import styled, { keyframes } from 'styled-components'

const theme = {
  borderWidth: '10px solid',
  blue: '#1D2A43',
}

const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`

const TooltipContainer = styled.div`
  position: relative;
  display: inline-flex;
  user-select: none;
  cursor: pointer;
  max-width: 120px;
  /* -webkit-tap-highlight-color: transparent; */
`

const TooltipText = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  background: #1d2a43;
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  span {
    width: 100%;
    padding: 0;
    text-align: center;
    line-height: 20px;
    color: white;
    font-size: 12px;
    font-weight: 600;
  }
`

const TooltipContent = styled.div`
  &.tooltip-content {
    position: absolute;
    cursor: default;
    border-radius: 4px;
    min-width: 120px;
    border-radius: 4px;
    min-height: 32px;
    background: ${theme.blue};
    animation: ${fadeIn} ease-in-out 0.2s;

    .tooltip-icon {
      position: absolute;
      width: 0;
      height: 0;
    }

    &.top {
      bottom: calc(100% + 18px);
      left: 50%;
      transform: translateX(-50%);
      .tooltip-icon {
        bottom: -6px;
        left: calc(50% - 4px);
        transform: rotate(180deg) translate(calc(-50% - 10px), 0);
      }
    }

    &.right,
    &.left {
      top: 50%;
      transform: translateY(-50%);
      .tooltip-icon {
        top: calc(50% - 10px);
      }
    }

    &.right {
      left: calc(100% + 18px);
      .tooltip-icon {
        left: -10px;
      }
    }

    .left {
      right: calc(100% + 18px);
      .tooltip-icon {
        right: -10px;
      }
    }

    &.bottom {
      top: calc(100% + 18px);
      left: 50%;
      transform: translateX(-50%);

      .tooltip-icon {
        top: -10px;
        left: calc(50% - 10px);
      }
    }
  }
`

const TooltipPlaceholder = styled.div``

const TooltipIcon = styled.div`
  position: relative;
  background-color: ${theme.blue};
  text-align: left;
  transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866);

  &:before,
  &:after {
    content: '';
    position: absolute;
    background-color: inherit;
  }
  &,
  &:before,
  &:after {
    width: 10px;
    height: 10px;
    border-top-right-radius: 30%;
  }

  &:before {
    transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
      translate(0, -50%);
  }
  &:after {
    transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
  }
`

export {
  TooltipContent,
  TooltipText,
  TooltipContainer,
  TooltipPlaceholder,
  TooltipIcon,
}
