const regexRequest = (value) => {
  const initialReplace = value.replace(/[0-9.]/g, '')
  const result = initialReplace.replace(/[^a-zA-Z0-9.]/g, '')
  return result
}

const alphaNumericSpace = (value) => {
  const result = value.replace(/[^a-zA-Z0-9 ]/g, '')
  return result
}

export { regexRequest, alphaNumericSpace }
