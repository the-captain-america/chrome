import styled, { css } from 'styled-components'
import { responsiveProps, colors } from '@common/Theme'

const InputDescription = styled.span`
  color: #adadad;
`

const InputElement = styled.input`
  outline: none;
  font-size: 18px;
  /* border: 2px solid rgb(221, 221, 221); */
  border: 1.5px solid rgb(51, 59, 68) !important;
  transition: border 0.2s;
  width: 100%;
  padding: 8px 9px;
  height: 48px;
  border-radius: 4px 0 0 4px;
  /* background-color: ${colors.white} !important; */
  background-color: rgb(40, 46, 51);
  background-image: none !important;
  color: rgb(221, 221, 221);

  &::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }

  -moz-appearance: textfield;

  &:focus {
    border: 2px solid #368e8c;
  }
  ${(props) =>
    props.error &&
    css`
      border: 2px solid ${colors.warning};
    `};
`

const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: rgb(178, 178, 178);
  font-size: 14px;
  line-height: 20px;
  ${({ $pb }) => responsiveProps('padding-bottom', $pb)};
  ${({ $mt }) => responsiveProps('margin-top', $mt)};
  ${({ $mb }) => responsiveProps('margin-bottom', $mb)};
`

export { InputElement, InputDescription, Label }
