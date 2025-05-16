import styled, { css } from 'styled-components'

const ValidateContainer = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 999;
  max-width: 292px;
  width: 100%;
  padding: 8px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
`

const ValidateGroup = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
`

const ValidateItem = styled.div`
  background: #b8e3b8;
  padding: 4px 6px;
  position: relative;
  height: 32px;
  display: flex;
  flex: 1 1 0%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #4da54d;
  border-radius: 4px;
  margin-top: 5px;
  max-width: 100%;
  margin-left: 8px;
  span.label {
    overflow: hidden;
    max-width: 200px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &:first-child {
    margin-left: 0;
  }
  ${(props) =>
    props.disabled &&
    css`
      background: #f6afaf;
      border: 1px solid red;
    `}
  svg {
    margin-left: 4px;
  }
`

const SectionContainer = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const SectionHeader = styled.div`
  width: 100%;
  padding: 4px 16px;
  background: #535353;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 4px 4px 0 0;
  h3 {
    font-size: 18px;
    color: white;
    margin: 0;
    padding: 0;
    line-height: 20px;
  }
`

const SectionContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-left: 1px solid #cfcfcf;
  border-right: 1px solid #cfcfcf;
  border-bottom: 1px solid #cfcfcf;
  border-top: 1px solid #cfcfcf;
  border-radius: 4px;
  background: #e8e8e8;
  margin-bottom: 16px;
  padding: 16px;
  overflow: hidden;
  ${(props) =>
    props.hasTitle &&
    css`
      border-top: none;
      border-radius: 0 0 4px 4px;
    `}
    &:first-child {
      margin-left: 0;
    }
  }
`

const NoteContainer = styled.div`
  padding: 8px;
  border: 1px solid #ceb8ff;
  background: #e7dffc;
  color: #806baf;
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 8px;
  border-radius: 4px;
  span.prefix {
    font-weight: 600;
    color: #442d79;
  }
`

export {
  ValidateContainer,
  ValidateGroup,
  ValidateItem,
  SectionContainer,
  SectionHeader,
  SectionContent,
  NoteContainer,
}
