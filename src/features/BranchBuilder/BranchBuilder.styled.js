import styled, { css } from 'styled-components'
import { colors, responsiveProps } from '@common/Theme'

const Section = styled.div`
  display: flex;
  background: #282e33;
  flex-direction: column;
  padding: 12px;
  max-height: 420px;
  min-height: 420px;
  height: 100%;
  position: relative;
  overflow: auto;
  box-shadow: rgb(1 1 1 / 22%) 0px 2px 4px, rgba(28, 17, 44, 0.15) 0px 5px 12px;
`

const Panel = styled.div`
  background: #282e33;
  display: none;
  width: 100%;
  flex-direction: column;
  ${({ minHeight }) => responsiveProps('min-height', minHeight)};
  ${({ flexDirection }) => responsiveProps('flex-direction', flexDirection)};
  ${({ justifyContent }) => responsiveProps('justifyContent', justifyContent)};
  ${({ gap }) => responsiveProps('gap', gap)};
  ${(props) =>
    props.isActive &&
    css`
      display: flex;
    `}
`

const SectionContent = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  padding-bottom: 40px;
  flex-direction: column;
`

const SectionFooter = styled.div`
  display: flex;
  background: #282e33;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  position: sticky;
  padding: 8px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px, rgba(0, 0, 0, 0.1) 0px 4px 12px, rgba(0, 0, 0, 0.1) 0px 6px 10px;
  border-top: 1.5px solid rgb(52, 59, 68);
  left: 0;
`
const SectionHeader = styled.div`
  display: flex;
  padding-top: 8px;
  padding-bottom: 8px;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    margin: 0;
  }
`

export { Section, SectionContent, SectionFooter, SectionHeader, Panel }
