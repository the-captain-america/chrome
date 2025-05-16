import styled from 'styled-components'
import { responsiveProps } from '@common/Theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  ${({ $mt }) => responsiveProps('margin-top', $mt)};
  ${({ $mb }) => responsiveProps('margin-bottom', $mb)};
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
`

const ScreenReaderText = styled.span`
  position: absolute;
  top: -2000em;
  left: -3000em;
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  width: 1px;
`

export { Container, Wrapper, ScreenReaderText }
