const getClassName = (isExpanded, title) => {
  const baseString = `Section ${title}`
  return `${baseString} ${isExpanded ? 'is-expanded' : ''}`.trim()
}

export default getClassName
