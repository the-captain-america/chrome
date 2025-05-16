function transmuteArrayToObject(items) {
  const result = {}
  for (const item of items) {
    result[item.key] = item.value
  }
  return result
}

export { transmuteArrayToObject }
