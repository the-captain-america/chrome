const removeWhiteSpace = (str) => str.replaceAll(' ', '_')

const generateKey = (item, index) => {
  const itemKey = item.id || item.value || item.feature || item.label
  const splitIt = !!itemKey ? removeWhiteSpace(itemKey) : index
  return `checklist-${splitIt}-${index}`
}

export { generateKey }
