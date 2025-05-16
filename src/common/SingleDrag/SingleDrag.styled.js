import styled, { css } from 'styled-components'

const DroppableGroup = styled.div`
  padding: grid;
  background: transparent;
  border: 1px dashed transparent;
  transition: all 0.1s ease-in-out;
  border-radius: 4px;
  margin: 0;
  ${(props) =>
    props.isDraggingOver &&
    css`
      border: 1px dashed transparent;
    `}
`

const DragContainer = styled.div`
  width: 100%;
  margin-top: 8px;
`

const LabelIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: 8px;
  margin-right: 8px;
  width: 48px;
`

const DraggableItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  user-select: none;
  display: inline-flex;
  padding: 16px 16px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid rgb(51, 59, 68);
  &:first-child {
    margin-top: 0;
  }
  ${(props) =>
    props.isDragging &&
    css`
      background: transparent;
    `}
`

const DraggableItemHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0px;
  position: relative;
  h3 {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: 600;
    margin-left: 4px;
  }
  .secondary {
    left: 0px;
    top: 0px;
  }
`

const LabelRow = styled.div`
  justify-content: space-between;
  display: flex;
  width: calc(100% - 48px);
`

const Label = styled.div`
  display: flex;
  align-items: center;
  min-width: 45%;
  span.key {
    display: none;
    margin-left: 8px;
    font-weight: 300;
    white-space: nowrap;
    color: white;
  }
  span.value {
    margin-left: 8px;
    font-weight: 600;
    white-space: nowrap;
    color: white;
  }
`

const LabelId = styled.span`
  align-items: center;
  font-weight: 600;
  color: white;
`

const DraggableRemove = styled.button`
  cursor: pointer;
  margin: 0;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: 6px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4px;
`

export {
  DroppableGroup,
  LabelId,
  DragContainer,
  DraggableItem,
  DraggableRemove,
  DraggableItemHeader,
  LabelIcon,
  LabelRow,
  Label,
}
