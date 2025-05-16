import { uuid } from '@utils/uuid'

const toKebabCase = (str) => str.trim().toLowerCase().replace(/\s+/g, '-') // Converts string to kebab-case

const getComponentId = (title) => {
  if (!title || typeof title !== 'string') {
    return uuid() // Generate UUID if no title is provided
  }

  const words = title.trim().split(/\s+/) // Split by spaces
  if (/^feature$/i.test(words[0])) {
    words.shift() // Remove first word if it's "Feature"
  }

  return words.length ? toKebabCase(words.join(' ')) : uuid() // Convert to kebab-case or return UUID
}

export default getComponentId
