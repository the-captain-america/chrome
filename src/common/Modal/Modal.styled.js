import {
  media,
  scrollBarStyleBlue,
  mbFn,
  mtFn,
  paddingFn,
  justifyContentFn,
} from '@common/Theme'

import styled, { css } from 'styled-components'

const Heading = styled.h2`
  font-size: 20px;
  line-height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  margin: 0;
  text-transform: none;
  color: white;
  line-height: 24px;
  font-weight: 600;
`

const configLevel = {
  1: 100,
  2: 200,
  3: 300,
  9: 999,
}

const ModalWrapper = styled.div.attrs({ className: 'ModalContainer' })`
  background: #1f2429;
  border-radius: 4px 4px 0 0;
  box-shadow: 0px 4px 54px 0px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border: none;
  width: 100%;
  left: 0;
  top: 0;
  transition: all 0.2s ease-in-out;
  z-index: 999;
  position: fixed;
  display: flex;
  flex-direction: row;
  ${(props) =>
    props.maxHeight &&
    css`
      height: ${props.maxHeight};
      max-height: ${props.maxHeight};
    `};
  ${(props) =>
    props.position &&
    css`
      position: ${props.position};
    `}
  .confirm-button {
    span {
      display: none;
    }
  }
  ${media.xs`
    .confirm-button {
      span {
        display: inline-block;
      }
    }
  `}
  ${media.md`

    .confirm-button {
      span {
        display: inline-block;
      }
    }
  `};

  ${(props) =>
    props.level &&
    css`
      z-index: ${configLevel[props.level] || 9};
    `}
`

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const ModalStyledContent = styled.div`
  padding: 0px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  transition: all 0.4s ease-in-out;
  ${scrollBarStyleBlue}

  ${(props) =>
    props.isExpanded &&
    css`
      max-height: 1100px;
    `};
`

const ModalContent = styled.div`
  padding: 8px 24px 24px 24px;
  width: 100%;

  height: calc(100vh - 160px);
  overflow: auto;
`

const ModalFooter = styled.div`
  padding: 16px 0px 16px 0;
  width: 100%;
`

const Controls = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const ExpandButton = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  margin-right: 16px;
  border: none;
  display: flex;
  background: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    path {
      transition: all 0.2s ease-in-out;
    }
  }
  &:hover {
    svg {
      path {
        stroke: #e0e0e0;
      }
    }
  }
`

const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  border: none;
  display: flex;
  background: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    path {
      transition: all 0.2s ease-in-out;
    }
  }
  &:hover {
    svg {
      path {
        stroke: #e0e0e0;
      }
    }
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: none;
  ${(props) =>
    props.level &&
    css`
      z-index: ${configLevel[props.level] || 9};
    `}
  ${(props) =>
    props.isActive &&
    css`
      display: block;
    `};
  ${(props) =>
    props.position &&
    css`
      position: ${props.position};
    `};
  ${(props) =>
    props.dev &&
    css`
      z-index: 0;
      position: relative;
    `}
`

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  ${mbFn};
  ${mtFn};
  ${paddingFn};
  ${justifyContentFn};
`

const SideElement = styled.div``

const FooterElement = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`

const ModalContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export {
  Heading,
  SideElement,
  ExpandButton,
  FooterElement,
  ModalFooter,
  configLevel,
  ModalWrapper,
  ModalContainer,
  ModalContent,
  ModalForm,
  Controls,
  ModalStyledContent,
  CloseButton,
  Overlay,
  Block,
}
