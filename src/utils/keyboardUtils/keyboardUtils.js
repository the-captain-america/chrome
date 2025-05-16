import { KEYS } from './keys'
/**
 * Check if the given event matches a predefined key configuration.
 *
 * @param {Object} event - The event object representing a keyboard event.
 * @param {string} type - The type of key configuration to check against.
 * @returns {boolean} - True if the event matches the specified key configuration, otherwise false.
 */
const isKeyMatch = (event, type) => {
  // Ensure the type is a string and corresponds to a defined key configuration
  if (KEYS[type]) {
    // Convert the key configuration object into an array of key-value pairs
    const keyConfigArray = Object.entries(KEYS[type])

    // Check if any key property in the configuration matches the corresponding value in the event
    return keyConfigArray.some(([property, value]) => event[property] === value)
  }

  // If the type is not a valid string or doesn't correspond to a key configuration, return false
  return false
}

export { isKeyMatch }
