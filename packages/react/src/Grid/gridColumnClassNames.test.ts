const { gridColumnClassNames } = require('./gridColumnClassNames')

describe('gridColumnClassNames', () => {
  it('should return an empty array when no parameters are provided', () => {
    const result = gridColumnClassNames()
    expect(result).toEqual([])
  })

  it('should generate class names for single number values for start and span', () => {
    const result = gridColumnClassNames(3, 5)
    expect(result).toEqual(['amsterdam-grid-span-3', 'amsterdam-grid-start-5'])
  })

  it('should generate class names for an array of three numbers for start and span', () => {
    const result = gridColumnClassNames({ narrow: 2, medium: 4, wide: 6 }, { narrow: 1, medium: 3, wide: 5 })
    expect(result).toEqual([
      'amsterdam-narrow-grid-span-2',
      'amsterdam-medium-grid-span-4',
      'amsterdam-wide-grid-span-6',
      'amsterdam-narrow-grid-start-1',
      'amsterdam-medium-grid-start-3',
      'amsterdam-wide-grid-start-5',
    ])
  })

  it('should generate class names for a mix of single number and array values for start and span', () => {
    const result = gridColumnClassNames(8, { narrow: 2, medium: 4, wide: 6 })
    expect(result).toEqual([
      'amsterdam-grid-span-8',
      'amsterdam-narrow-grid-start-2',
      'amsterdam-medium-grid-start-4',
      'amsterdam-wide-grid-start-6',
    ])
  })

  it('should generate class names for a single number value for start', () => {
    const result = gridColumnClassNames(8, undefined)
    expect(result).toEqual(['amsterdam-grid-span-8'])
  })

  it('should generate class names for an array of three numbers for span', () => {
    const result = gridColumnClassNames(undefined, { narrow: 2, medium: 4, wide: 6 })
    expect(result).toEqual([
      'amsterdam-narrow-grid-start-2',
      'amsterdam-medium-grid-start-4',
      'amsterdam-wide-grid-start-6',
    ])
  })
})
