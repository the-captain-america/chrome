import { getLabel } from '.'
const getLabel = require('./getLabel')

describe('getLabel function', () => {
  // Test case 1: labelKey found in props
  it('should return value corresponding to labelKey if found in props', () => {
    const props = {
      label: 'Example Label',
      value: 'Example Value',
      feature: 'Example Feature',
    }
    const labelKeys = ['feature', 'value']
    expect(getLabel({ props, labelKeys })).toBe('Example Feature')
  })

  // Test case 2: labelKey not found in props, but label is present
  it('should return label value if labelKey not found in props but label is present', () => {
    const props = {
      label: 'Example Label',
      value: 'Example Value',
      feature: 'Example Feature',
    }
    const labelKeys = ['nonExistentKey']
    expect(getLabel({ props, labelKeys })).toBe('Example Label')
  })

  // Test case 3: no labelKey, label, or value is present in props
  it('should return feature value if no labelKey, label, or value is present in props', () => {
    const props = {
      feature: 'Example Feature',
    }
    const labelKeys = []
    expect(getLabel({ props, labelKeys })).toBe('Example Feature')
  })

  // Test case 4: no props provided
  it('should return default error message if no props provided', () => {
    const props = null
    const labelKeys = ['feature', 'value']
    expect(getLabel({ props, labelKeys })).toBe(
      'label, feature, or value has not been provided',
    )
  })

  // Additional test case: No labelKey provided
  it('should return default error message if no labelKey provided and no label or value in props', () => {
    const props = {
      feature: 'Example Feature',
    }
    const labelKeys = []
    expect(getLabel({ props, labelKeys })).toBe(
      'label, feature, or value has not been provided',
    )
  })
})
