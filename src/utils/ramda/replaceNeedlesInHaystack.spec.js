import { replaceNeedlesInHaystack } from './replaceNeedlesInHaystack'

describe('replaceNeedlesInHaystack', () => {
  it('should replace needles in haystack', () => {
    const haystack = {
      key1: 'value1',
      key2: {
        subKey1: 'subValue1',
        subKey2: 'subValue2',
      },
      key3: 'value3',
    }
    const needles = ['subKey1', 'subKey2']
    const dataToReplaceNeedleKey = 'replacedValue'
    const expected = {
      key1: 'value1',
      key2: {
        subKey1: 'replacedValue',
        subKey2: 'replacedValue',
      },
      key3: 'value3',
    }
    const result = replaceNeedlesInHaystack(
      needles,
      dataToReplaceNeedleKey,
    )(haystack)
    expect(result).toEqual(expected)
  })
})
