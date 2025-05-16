/**
 * fetchOptions
 *
 * This utility function fetches dropdown options based on a query.
 * It accepts a query string and a fetch function (which could be an API call
 * or a function that returns a static list of options).
 *
 * @param {string} query - The search query used to filter options.
 * @param {function} fetchFn - A function that takes the query and returns a promise that resolves to an array of options.
 * @returns {Promise<Array>} - A promise that resolves with the array of dropdown options.
 * @throws {Error} - If fetchFn is not provided or fails.
 */
async function fetchOptions(query, fetchFn) {
  if (typeof fetchFn !== 'function') {
    throw new Error('A valid fetch function must be provided')
  }

  try {
    const options = await fetchFn(query)
    // Optionally transform or filter the options here if necessary
    return options
  } catch (error) {
    console.error('Error fetching options:', error)
    throw error
  }
}

export default fetchOptions
