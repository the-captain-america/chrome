import styled, { css, keyframes } from 'styled-components'
import { media, responsiveProps } from '@common/Theme'
import { gridStyles } from '@common/Grid'

const slideUp = keyframes`
  from {
    margin-bottom: -900px;
  }
  to {
    margin-bottom: 0;
  }
`

const slideDown = keyframes`
  from {
    margin-bottom: 0;
  }
  to {
    margin-bottom: -900px;
  }
`

const TrayContainer = styled.dialog`
  ${gridStyles};
  z-index: 1000;
  gap: 16px;
  border-radius: 8px 8px 0px 0px;
  display: flex;
  flex-direction: column;
  background: rgb(31, 36, 41);
  border: none;
  overflow: hidden;
  outline: none;
  padding: 30px 16px 34px 16px;
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.15);
  border: 1.5px solid rgb(51, 59, 68);
  margin-bottom: 0;

  &::backdrop {
    background-color: transparent;
    pointer-events: none;
  }

  animation: ${slideDown} 0.5s ease-out;

  &.is-open {
    animation: ${slideUp} 0.5s ease-out;
  }

  ${media.sm`
    max-width: 600px;
    animation: none;
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 8px;
    &.is-open {
      animation: none;
    }
  `};

  ${({ $maxHeight }) => responsiveProps('max-height', $maxHeight)};
  ${({ $minHeight }) => responsiveProps('min-height', $minHeight)};
  ${({ $height }) => responsiveProps('height', $height)};
`

const TrayHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
`

const TrayContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  max-height: calc(100% - 139px);
`

const TrayOverlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  position: fixed;
  display: none;
  &.is-open {
    display: block;
  }
`

export { TrayContainer, TrayHeader, TrayContent, TrayOverlay }
