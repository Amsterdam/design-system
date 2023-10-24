const { gridColumnClassNames } = require('./gridColumnClassNames')

describe('gridColumnClassNames', () => {
  it('should return an empty array when no parameters are provided', () => {
    const result = gridColumnClassNames()
    expect(result).toEqual([])
  })

  it('should generate class names for single number values for start and span', () => {
    const result = gridColumnClassNames(3, 5)
    expect(result).toEqual(['amsterdam-grid-start-3', 'amsterdam-grid-span-5'])
  })

  it('should generate class names for an array of three numbers for start and span', () => {
    const result = gridColumnClassNames([2, 4, 6], [1, 3, 5])
    expect(result).toEqual([
      'amsterdam-narrow-grid-start-2',
      'amsterdam-medium-grid-start-4',
      'amsterdam-wide-grid-start-6',
      'amsterdam-narrow-grid-span-1',
      'amsterdam-medium-grid-span-3',
      'amsterdam-wide-grid-span-5',
    ])
  })

  it('should generate class names for a mix of single number and array values for start and span', () => {
    const result = gridColumnClassNames(8, [2, 4, 6])
    expect(result).toEqual([
      'amsterdam-grid-start-8',
      'amsterdam-narrow-grid-span-2',
      'amsterdam-medium-grid-span-4',
      'amsterdam-wide-grid-span-6',
    ])
  })

  it('should generate class names for a single number value for start', () => {
    const result = gridColumnClassNames(8, undefined)
    expect(result).toEqual(['amsterdam-grid-start-8'])
  })

  it('should generate class names for an array of three numbers for span', () => {
    const result = gridColumnClassNames(undefined, [2, 4, 6])
    expect(result).toEqual([
      'amsterdam-narrow-grid-span-2',
      'amsterdam-medium-grid-span-4',
      'amsterdam-wide-grid-span-6',
    ])
  })
})
