// Import the functions to be tested
import { isDefined, pickByRequiredKeys } from './pickByRequiredKeys'

// Test isDefined function
test('isDefined returns true for defined values', () => {
  expect(isDefined(true)).toBe(true)
  expect(isDefined(42)).toBe(true)
  expect(isDefined('Hello')).toBe(true)
})

test('isDefined returns false for undefined, null, empty string, and false', () => {
  expect(isDefined(undefined)).toBe(false)
  expect(isDefined(null)).toBe(false)
  expect(isDefined('')).toBe(false)
  expect(isDefined(false)).toBe(false)
})

// Test pickByRequiredKeys function
test('pickByRequiredKeys returns the first defined key', () => {
  const result = pickByRequiredKeys({
    primary: true,
    secondary: undefined,
    tertiary: 'value',
  })

  expect(result).toBe('primary')
})

test('pickByRequiredKeys returns undefined if all values are undefined, null, empty string, or false', () => {
  const result = pickByRequiredKeys({
    primary: undefined,
    secondary: null,
    tertiary: '',
    quaternary: false,
  })

  expect(result).toBeUndefined()
})
