const isDefined = (value) =>
  value !== undefined && value !== null && value !== '' && value !== false

const pickByRequiredKeys = (props) => {
  const notNullFieldValues = Object.fromEntries(
    Object.entries(props).filter(([_, value]) => isDefined(value)),
  )

  const firstMatch = Object.keys(notNullFieldValues)[0]
  return firstMatch
}
