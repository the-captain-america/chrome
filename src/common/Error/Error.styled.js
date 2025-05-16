import styled from 'styled-components'
import { font, colors, responsiveProps } from '@common/Theme/styles'

const ErrorContainer = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: row;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 4px;
  border: none;
  border: 1.5px solid ${colors.red};
  box-sizing: border-box;
  width: 100%;

  &.warning {
    background: #ffe6b0;
    background: rgba(255, 87, 87, 0.08);
    color: rgb(251, 250, 251);
    color: ${colors.red};
    line-height: 24px;
  }

  &.error {
    background: #ffe1e1;
  }

  &.info {
    background: #bff4f2;
  }

  &.success {
    background: #d5f2ca;
  }

  ${({ mt }) => responsiveProps('margin-top', mt)}
  ${({ mb }) => responsiveProps('margin-bottom', mb)}
`

const ErrorIcon = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  .warning & {
    svg.WARNING {
      path {
        fill: ${colors.charcoal};
        fill: ${colors.red};
      }
    }
  }
  .error & {
    svg.WARNING {
      path {
        fill: ${colors.maroon};
      }
    }
  }
`

const ErrorContent = styled.div`
  margin-left: 8px;
  h3,
  p.error-text,
  span {
    font-family: ${font.fontFamilyDefault};
    font-weight: ${font.fontWeightDefault};
    color: ${colors.white};
  }
  span.error-title {
    margin: 0;
    padding: 0;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 4px;
    color: ${colors.charcoal};
    .error & {
      color: ${colors.maroon};
    }
    .warning & {
      color: ${colors.charcoal};
    }
    .info & {
      color: ${colors.charcoal};
    }
    .success & {
      color: ${colors.charcoal};
    }
    &:only-child {
      margin-bottom: 0;
    }
  }
  p.error-text {
    margin: 0;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.grey};
    .error & {
      color: ${colors.maroon};
    }
    .warning & {
      color: ${colors.charcoal};
    }
    &:only-child {
      margin-bottom: 0;
    }
  }
  span {
    padding: 0;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.charcoal};
    .error & {
      color: ${colors.maroon};
    }
    .warning & {
      color: ${colors.charcoal};
    }
    .info & {
      color: ${colors.grey};
    }
  }
`

export { ErrorContainer, ErrorIcon, ErrorContent }
