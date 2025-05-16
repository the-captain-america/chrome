const transform = (input, parents = []) => {
  if (!Array.isArray(input)) {
    return []
  }

  return input.reduce((output, item) => {
    if (typeof item === 'string') {
      return [...output, item]
    }

    if ('ref' in item) {
      const refIndex = Number.parseInt(item.ref.substr(1), 10)
      const referencedItem = output[refIndex]
      return [...output, referencedItem]
    }

    if ('seq' in item) {
      const { start, end } = item.seq
      const seqArray = Array.from(
        { length: end - start + 1 },
        (_, index) => `'${start + index}'`,
      )
      return [...output, ...seqArray]
    }

    if (Array.isArray(item)) {
      return [...output, transform(item, [...parents, output])]
    }

    // **Fix: Return output if no conditions match**
    return output
  }, [])
}

export { transform }
