import styled, { css } from 'styled-components'
import { mtFn, mbFn } from '@common/Theme'
import { colors } from '@common/Theme'

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  ${mbFn};
  ${mtFn};
`

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px 12px 10px 16px;
  min-height: 48px;
  background: rgba(238, 58, 58, 0.51);
  border-radius: 4px;
  border: 1px solid ${colors.red};
  margin-bottom: 16px;
  box-sizing: border-box;
  ${mbFn};
  ${mtFn};
`

const ErrorContent = styled.div`
  line-height: 28px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  ${(props) =>
    props.hasClose &&
    css`
      p {
        padding-right: 8px;
      }
    `}
  p {
    font-size: 16px;
    color: white;
    line-height: 21px;
    margin: 0;
    padding: 0;
  }
`

const ErrorClose = styled.button`
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  padding: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  background: ${colors.red};
  border-radius: 4px;
  margin-left: auto;
  padding: 6px;
  transition: all 0.2s ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #4d3365;
  }
`

const ErrorIcon = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export { Container, ErrorWrapper, ErrorContent, ErrorClose, ErrorIcon }
