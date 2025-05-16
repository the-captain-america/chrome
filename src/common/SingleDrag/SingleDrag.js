import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Icon } from '@common/Icon'
import { IconContainer } from '@common/IconContainer'
import { data as localData } from './data'

import {
  DroppableGroup,
  DragContainer,
  DraggableItem,
  DraggableItemHeader,
  LabelRow,
  Label,
  DraggableRemove,
  LabelId,
  LabelIcon,
} from './SingleDrag.styled'

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

// Ability to edit on selection
const applySequenceByMap = (items = []) =>
  items.map((m, i) => ({ ...m, sequence: i + 1 }))

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',

  // change background colour if dragging
  background: isDragging ? '#02afec' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
})

const SingleDrag = ({ label = '', callback = () => {}, data = [] }) => {
  const [state, setState] = useState({
    items: [],
  })

  useEffect(() => {
    if (!data || data.length <= 0) {
      setState((state) => ({ ...state, items: [] }))
      return
    }
    setState((state) => ({ ...state, items: data }))
  }, [data])

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return
    }
    const sourceIndex = result.source.index
    const destIndex = result.destination.index

    if (result.type === 'droppableItem') {
      const items = reorder(state.items, sourceIndex, destIndex)

      setState({
        items: applySequenceByMap(items),
      })
    }
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  return (
    <DragContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" type="droppableItem">
          {(provided, snapshot) => (
            <DroppableGroup
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {state.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div>
                      <DraggableItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        isDragging={snapshot.isDragging}
                      >
                        <DraggableItemHeader>
                          <IconContainer
                            className="secondary"
                            {...provided.dragHandleProps}
                          >
                            <Icon name="DRAG" size={20} />
                          </IconContainer>

                          {/* {item.sequence && <LabelId>{item.sequence}.</LabelId>} */}
                          <LabelRow>
                            <Label>
                              <span className="key">key:</span>
                              {item.key && (
                                <span className="value">{item.key}</span>
                              )}
                            </Label>
                            <LabelIcon style={{ margin: 0, height: '32px' }}>
                              <Icon name="CHEVRON" rotate={90} size={24} />
                            </LabelIcon>
                            <Label>
                              <span className="key"> value:</span>
                              {item.value && (
                                <span className="value">{item.value}</span>
                              )}
                            </Label>
                          </LabelRow>
                          <DraggableRemove
                            onClick={(e) =>
                              callback({
                                type: 'REMOVE_LIST_ITEM',
                                data: item.id,
                                event: e,
                              })
                            }
                          >
                            <Icon name="TRASH" stroke="white" size={20} />
                          </DraggableRemove>
                        </DraggableItemHeader>
                      </DraggableItem>
                      {provided.placeholder}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </DroppableGroup>
          )}
        </Droppable>
      </DragDropContext>
    </DragContainer>
  )
}

export { SingleDrag }
