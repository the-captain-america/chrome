import styled, { css } from 'styled-components'
import { colors, media, font } from '@common/Theme'

const srOnly = css`
  outline: none;
  &:active {
    &:after {
      display: none;
    }
  }
  &:focus-visible {
    outline: none;
    &:after {
      content: '';
      position: absolute;
      z-index: 2;
      background: transparent;
      transition: none;
      border: 2px solid #368e8c;
      width: calc(100% + 12px);
      height: calc(100% + 12px);
      border-radius: 4px;
      left: -6px;
      top: -6px;
    }
  }
`

const extendStyleFn = ({ extend }) =>
  css`
    ${extend};
  `

const TabContainer = styled.div`
  align-items: flex-start;
  display: flex;
  width: 100%;
  flex-direction: column;
  ${extendStyleFn};
`

const TabList = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-self: flex-start;
  width: 100%;
  background: transparent;
  ${(props) =>
    props.isLoading &&
    css`
      li {
        pointer-events: none;
        user-select: none;
        &:only-child {
          border-bottom: 2px solid ${colors.transparent};
        }
        .tab-item {
          &.active {
            border-bottom: 2px solid #999999;
            &:only-child {
              border-bottom: 2px solid ${colors.transparent};
            }
          }
          span {
            color: #999999;
          }
        }
      }
    `}
`
const TabButton = styled.button`
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 16px 0;
  width: 100%;
  cursor: pointer;
  outline: none;
  background: ${colors.transparent};
  ${srOnly};
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    position: relative;
    line-height: 27px;
    &:after {
      content: '';
      position: absolute;
      bottom: -16px;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${colors.transparent};
    }
  }
  ${media.sm`
    width: unset;
    padding: 16px;
  `};
  &:first-child {
    margin-left: 0;
  }
  &:only-child {
    pointer-events: none;
    width: unset;
    padding-top: 24px;
    padding-bottom: 0;
    span {
      font-weight: 400;
      line-height: 30px;
      color: ${colors.charcoal};
      &:after {
        background: ${colors.transparent};
      }
    }
  }
  &.active {
    span {
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: ${font.fontWeightSemiBold};
      line-height: 27px;
      color: ${colors.green};
      &:after {
        background: ${colors.charcoal};
      }
    }
    &:only-child {
      pointer-events: none;
      padding-top: 24px;
      padding-bottom: 0;
      span {
        font-weight: 400;
        line-height: 30px;
        color: ${colors.charcoal};
        &:after {
          background: ${colors.transparent};
        }
      }
    }
  }
  ${(props) =>
    props.isLoading &&
    css`
      pointer-events: none;
      span {
        font-weight: 400;
        color: ${colors.charcoal};
        &:after {
          background: ${colors.transparent};
        }
      }
    `}
`

const TabPanelGroup = styled.div``
const TabPanel = styled.section``

export { TabContainer, TabList, TabButton, TabPanelGroup, TabPanel }
