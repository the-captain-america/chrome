import styled, { css } from 'styled-components'

const Label = styled.div`
  color: white;
  font-weight: 300;
  font-size: 14px;
  padding-bottom: 8px;
  color: #b2b2b2;
  line-height: 20px;
  span {
    font-size: 11px;
    color: white;
  }
`

const InputContainer = styled.div`
  position: relative;
  margin-top: 1px;
  width: 100%;
  &:focus-within {
    .input-close {
      opacity: 1;
    }
  }
  ${(props) =>
    props.type &&
    props.type === 'number' &&
    css`
      input {
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
        }
      }
    `};
`

const InputClose = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  padding: 0;
  margin: 0;
  border: none;
  display: flex;
  background: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
  outline: none;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  &:hover {
    opacity: 1;
    background: rgb(76, 58, 238);
    border: 1.5px solid rgb(76, 58, 238);
  }
`

export { Label, InputClose, InputContainer }
