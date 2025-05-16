/**
 * filterOptions
 *
 * This function filters a list of options based on a provided search query.
 *
 * @param {Array} options - An array of option objects or strings.
 * @param {string} query - The search query used to filter the options.
 * @param {function} [matcher] - Optional custom matcher function that receives (option, query) and returns a boolean.
 * @returns {Array} - A filtered array of options that match the query.
 */
function filterOptions(options, query, matcher) {
  if (!query) return options

  const lowerCaseQuery = query.toLowerCase()

  return options.filter((option) => {
    if (typeof matcher === 'function') {
      return matcher(option, query)
    }

    if (typeof option === 'string') {
      return option.toLowerCase().includes(lowerCaseQuery)
    }

    if (option && typeof option === 'object' && option.label) {
      return option.label.toLowerCase().includes(lowerCaseQuery)
    }

    return false
  })
}

export default filterOptions
