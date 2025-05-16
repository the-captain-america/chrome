import styled, { css } from 'styled-components'
import { mbFn, mtFn } from '@common/Theme'

const Label = styled.span`
  font-weight: 300;
  font-size: 14px;
  padding-bottom: 8px;
  color: rgb(178, 178, 178);
  line-height: 20px;
`

const ToggleSwitchContainer = styled.div`
  ${mtFn};
  ${mbFn};
  ${(props) =>
    props.text &&
    css`
      .switch-button {
        &:before {
          font-size: 16px;
          color: white;
          padding: 5px;
          font-family: 'IBM Plex Sans', sans-serif;
          content: '${props.text}';
        }
      }
    `}
  .switch-button-label-span {
    color: #f8f7fa;
    font-size: 16px;
    padding: 5px;
    font-family: 'IBM Plex Sans', sans-serif;
  }
  ${(props) =>
    props.isActive &&
    css`
      .switch-button-label-span {
        position: relative;
        color: #a39faa;
      }
    `}

  .switch-button {
    background: #282e33;
    border-radius: 4px;
    overflow: hidden;
    width: 240px;
    text-align: center;
    letter-spacing: 1px;
    position: relative;
    padding-right: 120px;
    position: relative;
    border: 1.5px solid #333b44;
    &:before {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 3;
      pointer-events: none;
    }

    .switch-button-checkbox {
      cursor: pointer;
      position: absolute;
      top: 0;
      margin: 0 !important;
      left: 0;
      &:focus {
        outline: none;
        border: none;
      }
      bottom: 0;
      width: 100%;
      opacity: 0;
      z-index: 2;

      &:checked + .switch-button-label:before {
        transform: translateX(120px);
        transition: transform 200ms linear;
        .switch-button-label-span {
          position: relative;
          color: #a39faa;
        }
      }

      & + .switch-button-label {
        position: relative;
        padding: 13px 0;
        display: block;
        user-select: none;
        pointer-events: none;
        font-size: 13px;
        &:before {
          content: '';
          background: #202428;
          border-top: 1.5 solid #202428;
          height: calc(100% - 8px);
          width: calc(100% - 8px);
          position: absolute;
          left: 4px;
          top: 4px;
          border-radius: 4px;
          transform: translateX(0);
          transition: transform 200ms;
        }

        .switch-button-label-span {
          position: relative;
        }
      }
    }
  }
`

export { ToggleSwitchContainer, Label }
