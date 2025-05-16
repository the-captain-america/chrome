const getItemById = (id) => (options) => {
  if (!id) return null

  const result = options.find((item) => item?.id === id)
  return result || null
}

export { getItemById }
