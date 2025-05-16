import { colors } from '@common/Theme'
import styled, { css } from 'styled-components'

const LocationWrapper = styled.div`
  &.reset {
    margin-top: 0px;
    padding: 0px !important;
  }
`

const LocationExpandButton = css`
  padding: 0px;
  min-width: 34px;
  min-height: 34px;
  max-height: 34px;
  margin-left: 8px;
  background: transparent;
  border-color: transparent;
  justify-content: center;
  svg.EXPAND {
    path {
      stroke: rgb(103 113 124);
    }
  }
  svg.COLLAPSE {
    path {
      stroke: rgb(103 113 124);
    }
  }
`

const LocationHeader = styled.div`
  display: flex;
  padding: 16px 16px 16px 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  overflow: hidden;

  h2 {
    color: white;
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    font-size: 20px;
    margin: 0;
    color: #f3f3f4;
    display: flex;
    flex-basis: 100%;
    margin: 0;
    padding: 0;
  }
  .Toggle {
    margin-left: auto;
  }

  ${(props) => props.extend};
`

const LocationExpander = styled.div`
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  margin-bottom: 16px;
  height: 0;

  ${(props) =>
    props.isExpanded &&
    css`
      flex: 1;
      height: auto;
    `}
`

export {
  LocationWrapper,
  LocationHeader,
  LocationExpander,
  LocationExpandButton,
}
