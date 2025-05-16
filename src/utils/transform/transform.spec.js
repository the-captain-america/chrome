import { transform } from './transform'

describe('transform function', () => {
  it('should transform a simple array with strings correctly', () => {
    const input = ['A', 'B', 'C']
    expect(transform(input)).toEqual(['A', 'B', 'C'])
  })

  it('should replace a ref object with the referenced item', () => {
    const input = ['A', { ref: '/0' }]
    expect(transform(input)).toEqual(['A', 'A'])
  })

  it('should generate a sequence correctly', () => {
    const input = [{ seq: { start: 1, end: 3 } }]
    expect(transform(input)).toEqual(["'1'", "'2'", "'3'"])
  })

  it('should replace multiple refs correctly', () => {
    const input = ['A', { ref: '/0' }, { ref: '/1' }]
    expect(transform(input)).toEqual(['A', 'A', 'A'])
  })

  it('should handle nested arrays correctly', () => {
    const input = ['A', ['B', { ref: '/0' }]]
    expect(transform(input)).toEqual(['A', ['B', 'B']])
  })

  it('should handle multiple sequences correctly', () => {
    const input = [{ seq: { start: 1, end: 2 } }, { seq: { start: 3, end: 4 } }]
    expect(transform(input)).toEqual(["'1'", "'2'", "'3'", "'4'"])
  })

  it('should handle a reference to a sequence', () => {
    const input = [{ seq: { start: 1, end: 3 } }, { ref: '/0' }]
    expect(transform(input)).toEqual(["'1'", "'2'", "'3'", "'1'"])
  })

  it('should handle an empty input array', () => {
    expect(transform([])).toEqual([])
  })

  it('should return an empty array if input is null or undefined', () => {
    expect(transform(null)).toEqual([])
    expect(transform(undefined)).toEqual([])
  })

  it('should return the input unchanged if it contains only primitive values', () => {
    const input = ['A', 'B', 'C', 'D']
    expect(transform(input)).toEqual(['A', 'B', 'C', 'D'])
  })

  it('should return an empty array if all elements are invalid', () => {
    const input = [{}, { unknown: 'test' }]
    expect(transform(input)).toEqual([])
  })
})
