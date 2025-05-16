import styled, { css } from 'styled-components'
import { colGutterSize } from './gridUtils'
import { mtFn, mbFn, responsiveProps } from '@common/Theme'
import { Col } from './Col'

const Row = styled.div.attrs({ className: 'Row' })`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => (props.shouldWrap ? 'column' : 'row')};
  margin-right: -${(props) => (props.noGutters ? 0 : colGutterSize / 2)}px;
  margin-left: -${(props) => (props.noGutters ? 0 : colGutterSize / 2)}px;
  box-sizing: border-box;
  ${(props) =>
    props.noGutters &&
    css`
      gap: 16px;
    `};
  ${(props) =>
    props.fluid &&
    css`
      width: 100%;
    `}
  ${Col} {
    padding-left: ${(props) => (props.noGutters ? 0 : colGutterSize / 2)}px;
    padding-right: ${(props) => (props.noGutters ? 0 : colGutterSize / 2)}px;
  }

  ${({ gap }) => responsiveProps('gap', gap)};

  ${mtFn};
  ${mbFn};

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`

export { Row }
