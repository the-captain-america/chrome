const items = [{ label: '', value: '' }]

const result = items.reduce((prev, curr, index) => {
  const item = {
    id: curr.label,
    label: curr.value,
    index,
  }
  return [...prev, item]
}, [])
