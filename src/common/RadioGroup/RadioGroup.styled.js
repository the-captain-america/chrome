import styled, { css } from 'styled-components'
import { mtFn, mbFn, maxWidthFn } from '@common/Theme'
import { colors } from '@common/Theme'

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  flex-direction: column;
  ${maxWidthFn};

  span.label {
    color: ${colors.white};
    font-size: 14px;
    margin-right: 8px;
    flex-shrink: 0;
    flex-basis: auto;
    justify-content: flex-start;
  }

  ${mbFn};
  ${mtFn};
  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
    `};
`

const RadioInput = styled.input.attrs({ type: 'radio' })`
  display: inline-block;
  box-sizing: border-box;
  border: 2px solid grey;
  color: black;
  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  background-color: ${colors.white};
  position: relative;
  min-width: 32px;
  min-height: 32px;
  border-radius: 50%;
  cursor: pointer;
  box-sizing: border-box;

  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 0;
  border-color: grey;
  background: rgb(25, 29, 34);

  &:checked {
    border-color: ${colors.yellow};
    background: rgb(25, 29, 34);
    &:before {
      background: ${colors.yellow};
    }
  }

  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 7px;
    height: 7px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
`

const Field = styled.div.attrs({ className: 'Field__Radio' })`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
  width: 100%;
  &:last-child {
    margin-bottom: 0;
    margin-right: 0;
  }
`

const Label = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 6px;
  justify-content: space-between;
  border: 1.5px solid rgb(52 59 68);
  transition: all 0.3s ease-in-out 0s;
  background: rgb(25, 29, 34);

  ${(props) =>
    props.isChecked &&
    css`
      border: 1.5px solid ${colors.yellow};
      &:hover {
        border: 1.5px solid ${colors.yellow};
      }
    `};
`

const RadioBox = styled.div``

export { Container, RadioInput, RadioBox, Field, Label }
