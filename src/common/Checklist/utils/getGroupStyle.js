const getGroupStyle = (isDraggingOver, height, draggingColor) => ({
  transition: 'all .3s ease-in-out',
  maxHeight: `${height}`,
  background: isDraggingOver
    ? draggingColor
      ? draggingColor
      : '#1f2428'
    : '#282e32',
})

export { getGroupStyle }
