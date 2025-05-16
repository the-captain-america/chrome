import { mbFn, mtFn, mrFn } from '@common/Theme'
import styled, { css } from 'styled-components'

const SpacerElement = styled.div`
  width: 100%;
  height: 2px;
  width: calc(100% - 32px);
  height: 2px;
  border-bottom: 1px solid #39414a;
  padding-bottom: 12px;
  margin: 16px 16px 24px 16px;
  ${(props) =>
    props.asFullWidth &&
    css`
      width: 100%;
      margin: 16px 0 24px 0;
    `}
  ${mbFn};
  ${mtFn};
  ${mrFn};
`

const Spacer = ({ mt, mb, mr, asFullWidth, ...props }) => {
  return (
    <SpacerElement
      mr={mr}
      mt={mt}
      mb={mb}
      asFullWidth={asFullWidth}
      {...props}
    />
  )
}

export { Spacer }
