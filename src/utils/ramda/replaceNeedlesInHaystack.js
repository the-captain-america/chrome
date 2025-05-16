function typeIs(expected) {
  return function (original) {
    return Object.prototype.toString.call(original) === `[object ${expected}]`
  }
}

function isObjectLiteral(original) {
  return typeIs('Object')(original)
}

function replaceNeedlesInHaystack(needleKeys, dataToReplaceNeedleKey) {
  const lowerCaseNeedleKeys = needleKeys.map((key) => key.toLowerCase())

  function walkBackwards(haystack) {
    const result = {}
    for (const [key, value] of Object.entries(haystack)) {
      const isNestedHaystack = isObjectLiteral(value)
      const isMatchingNeedle = lowerCaseNeedleKeys.includes(key.toLowerCase())

      if (isNestedHaystack) {
        result[key] = walkBackwards(value)
      } else if (isMatchingNeedle) {
        result[key] = dataToReplaceNeedleKey
      } else {
        result[key] = value
      }
    }
    return result
  }

  return walkBackwards
}

export { replaceNeedlesInHaystack }
