import { isKeyMatch } from './keyboardUtils'

describe('isKeyMatch function', () => {
  // Example event object
  const event = {
    key: 'Enter',
    keyCode: 13,
    charCode: 13,
  }

  it('should return true for a matching key configuration', () => {
    // Test with a valid key configuration ('ENTER')
    expect(isKeyMatch(event, 'ENTER')).toBe(true)
  })

  it('should handle the absence of keyMatchers[type]', () => {
    // Test with a type that does not exist in keyMatchers
    expect(isKeyMatch(event, 'NON_EXISTENT_TYPE')).toBe(false)
  })
})
