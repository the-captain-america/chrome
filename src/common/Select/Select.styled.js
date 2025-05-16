import styled, { css } from 'styled-components'
import { mbFn, mtFn, responsiveProps } from '@common/Theme/styles'
const borderWidth = '1.5px'

const SelectOuterContainer = styled.div`
  background: #282e33;
  position: absolute;
  top: calc(100% + 8px);
  z-index: 999;
  width: 100%;
  border: ${borderWidth} solid rgb(51, 59, 68);
  border-radius: 4px;
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  &:focus-visible {
    outline: none;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
  }
`

const SelectOuter = styled.div`
  max-height: 250px;
  overflow-y: auto;
  width: 100%;
  margin-right: 4px;
  margin-bottom: 4px;
`

const SelectContainerGroup = styled.ul`
  margin: 0;
  padding: 0;
  margin-right: 4px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: #282e33;
  border-radius: 8px;
  padding: 4px 1px 6px 6px;
  box-sizing: border-box;
`

const SelectStyle = styled.div`
  width: 100%;
  ${mbFn};
  ${mtFn};
  border: ${borderWidth} solid #333b44;
  border-radius: 4px;
  cursor: pointer;
`

const SelectOption = styled.li`
  margin: 0;
  list-style: none;
  display: block;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  border: ${borderWidth} solid transparent;
  transition: all 0.2s ease-in-out;
  padding: 10px 15px;
  color: #909090;
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.isFocused &&
    css`
      &:after {
        content: '';
        position: absolute;
        z-index: 2;
        background: transparent;
        transition: none;
        border: 2px solid #368e8c;
        width: calc(100% + 11px);
        height: calc(100% + 11px);
        border-radius: 8px;
        left: -5px;
        top: -5px;
      }

      &:after {
        content: '';
        position: absolute;
        z-index: 2;
        background: transparent;
        transition: none;
        border: 2px solid #368e8c;
        width: calc(100% + 11px);
        height: calc(100% + 11px);
        border-radius: 8px;
        left: -5px;
        top: -5px;
      }
    `};

  &:hover {
    background: #1f2428;
    border: ${borderWidth} solid #1f2428;
    span.option-label {
      color: white;
    }
  }
  &:nth-child(1) {
    margin-top: 0px;
  }

  ${(props) =>
    props.isActive &&
    css`
      background: #1f2428;
      border: 1px solid #1f2428;
      span.option-label {
        max-width: calc(100% - 20px);
        color: white;
      }
      &:hover {
        background: #1f2428;
        border: 1px solid #1f2428;
      }
    `}
`

const SelectChevron = styled.span`
  position: absolute;
  right: 0;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  pointer-events: inherit;
  margin: 0;
  padding: 0;
`

const SelectedItem = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  background: transparent;
  border-radius: 4px;
  position: relative;
  border: ${borderWidth} solid transparent;
  &:focus {
    outline: none;
    border: none;
    &:after {
      content: '';
      position: absolute;
      z-index: 2;
      background: transparent;
      transition: none;
      border: 2px solid rgb(54, 142, 140);
      width: calc(100% + 12px);
      height: calc(100% + 12px);
      border-radius: 4px;
      left: -6px;
      top: -6px;
    }
  }

  ${(props) =>
    props.isDisabled &&
    css`
      cursor: not-allowed;
      user-select: none;
      span.option-label {
        color: white;
        font-style: normal;
      }
      &:focus {
        outline: none;
        box-shadow: none;
      }
      ${SelectChevron} {
        svg {
          path {
            stroke: #dcdcdc;
            fill: #dcdcdc;
          }
        }
      }
    `}

  ${(props) =>
    props.isActive &&
    css`
      span.option-label {
        color: white;
        user-select: none;
        font-style: normal;
      }
    `}
`

const SelectFieldElement = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  ${({ mt }) => responsiveProps('margin-top', mt)};
  ${({ mb }) => responsiveProps('margin-bottom', mb)};
`

const SelectLabel = styled.span`
  text-align: left;
  font-size: 15px;
  line-height: 21px;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  user-select: none;
  display: block;
  ${(props) =>
    props.isSelected &&
    css`
      padding-left: 14px;
      max-width: calc(100% - 24px);
    `};
`

const SelectIcon = styled.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 8px;
  svg {
    circle {
      fill: rgb(25, 178, 68);
      stroke: white;
    }
    path {
      stroke: white;
    }
    rect {
      stroke: white;
    }
  }
`

const Label = styled.div`
  color: white;
  font-weight: 300;
  font-size: 14px;
  padding-bottom: 8px;
  color: #b2b2b2;
  line-height: 20px;
`

const SelectContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  background: #1f2428;
  min-width: 162px;
  height: 48px;
  display: block;
  width: 100%;
  border-radius: 4px;
`

export {
  SelectChevron,
  SelectContainerGroup,
  SelectOuter,
  SelectStyle,
  SelectOption,
  SelectedItem,
  SelectIcon,
  SelectContainer,
  SelectOuterContainer,
  Label,
  SelectLabel,
  SelectFieldElement,
}
