const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  display: 'flex',
  // change background colour if dragging

  // styles we need to apply on draggables
  ...draggableStyle,
})

export { getItemStyle }
