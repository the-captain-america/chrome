import styled from 'styled-components'
import { colors } from '@common/Theme'

const DeleteButton = styled.button`
  border: 1px solid ${colors.purple};
  padding: 8px;
  background: ${colors.purple};
  border-radius: 4px;
  &:hover {
    border: 1px solid ${colors.purple};
    background: ${colors.purple};
  }
`

const ListContainer = styled.div`
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 16px;
`

const ListControls = styled.div`
  padding: 24px;
  border-top: 1px solid #313133;
  width: 100%;
  display: flex;
  flex-direction: row;
`

const UpdateButton = styled.button`
  border: 1px solid ${colors.purple};
  padding: 8px;
  background: ${colors.purple};
  border-radius: 4px;
  &:hover {
    border: 1px solid ${colors.purple};
    background: ${colors.purple};
  }
`

const Title = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #121b2d;
  display: flex;
  margin-right: 8px;
`

const Content = styled.span`
  text-align: left;
  color: #545454;
  font-size: 14px;
  font-weight: 300;
`

const Group = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;

  &::-webkit-scrollbar-track {
    transition: all 0.2s ease-in-out;
    opacity: 0;
    background: none;
    border: none;
    box-shadow: none;
    width: 14px;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    transition: all 0.2s ease-in-out;
    opacity: 0;
    background: #eeeff1;
    border: none;
    box-shadow: none;
    border-radius: 4px;
  }
  &:hover {
    &::-webkit-scrollbar-track {
      opacity: 1;
    }
    &::-webkit-scrollbar-thumb {
      opacity: 1;
    }
  }
`

export {
  Group,
  Title,
  ListControls,
  Content,
  DeleteButton,
  UpdateButton,
  ListContainer,
}
