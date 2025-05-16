import styled, { css } from 'styled-components'
import { mtFn, mbFn, colors, heightFn, maxHeightFn, media } from '@common/Theme'

const baseSize = {
  size: 18,
}

const CheckHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${mtFn};
  h2 {
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    padding: 0;
    align-self: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: white;
  }
`

const HeaderControlGroup = styled.div`
  margin-left: auto;
  display: flex;
`

const HeaderControl = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  button {
    justify-content: center;
    span.label {
      font-size: 14px;
    }
  }
  .view-mode {
    display: none;
  }
  ${media.lg`
    .view-mode {
      display: flex;
    }
  `};
`

const CheckCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  padding: 20px 16px 16px 16px;
  border: 1px solid #333b44;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  border-radius: 8px;
  background: #282e32;
  position: relative;
  transition: all 0.3s ease-in-out;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-bottom: 16px;
  ${(props) =>
    props.containerOffsetTop &&
    css`
      top: ${props.containerOffsetTop};
    `}
  ${(props) =>
    props.isActive &&
    css`
      ${maxHeightFn};
    `};

  ${mtFn};
  ${mbFn};
`

const IndicatorContainer = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 16px;
  gap: 8px;
`

const CheckItemWrapper = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
`

const Button = styled.button`
  background: ${colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  margin-right: 4px;
  padding: 12px;
  color: white;
  border-radius: 12px;
  border: 2px solid transparent;
  width: 100%;
  cursor: pointer;
  &:hover {
    background: #7ad0ef;
  }
`

const CheckCount = styled.span`
  position: absolute;
  top: 3px;
  width: ${baseSize.size}px;
  height: ${baseSize.size}px;
  max-height: ${baseSize.size}px;
  max-width: ${baseSize.size}px;
  border-radius: 50%;
  background: ${colors.red};
  border: 2px solid #a41212;
  text-align: center;
  right: 5px;
  z-index: 1;
  line-height: 14px;
  font-size: 10px;
`

const CheckGroup = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  display: flex;
  padding: 20px 16px 16px 16px;
  border: 1px solid #333b44;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  border-radius: 8px;
  background: #282e32;
  position: relative;
  ${(props) => props.extend && props.extend};
  transition: all 0.3s ease-in-out;
  ${(props) =>
    props.isOverflow &&
    css`
      overflow-y: auto;
    `};
`

export {
  IndicatorContainer,
  Button,
  CheckItemWrapper,
  Container,
  CheckHeader,
  CheckGroup,
  CheckCount,
  HeaderControl,
  CheckCodeContainer,
  HeaderControlGroup,
}
