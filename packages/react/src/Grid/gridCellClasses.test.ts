const { gridCellClasses } = require('./gridCellClasses')

describe('gridCellClasses', () => {
  it('should return an empty array when no parameters are provided', () => {
    const result = gridCellClasses()
    expect(result).toEqual([])
  })

  it('should return an empty array when undefined parameters are provided', () => {
    const result = gridCellClasses(undefined, undefined)
    expect(result).toEqual([])
  })

  it('should generate class names for single number values for start and span', () => {
    const result = gridCellClasses(4, 2)
    expect(result).toEqual(['amsterdam-grid-cell--span-4', 'amsterdam-grid-cell--start-2'])
  })

  it('should generate class names for a single number value for start', () => {
    const result = gridCellClasses(8, undefined)
    expect(result).toEqual(['amsterdam-grid-cell--span-8'])
  })

  it('should generate class names for an invalid number value for start', () => {
    const result = gridCellClasses(13, undefined)
    expect(result).toEqual(['amsterdam-grid-cell--span-13'])
  })

  it('should generate class names for a single number value for span', () => {
    const result = gridCellClasses(undefined, 6)
    expect(result).toEqual(['amsterdam-grid-cell--start-6'])
  })

  it('should generate class names for a single number for span and array values for start', () => {
    const result = gridCellClasses(8, { narrow: 2, medium: 4, wide: 6 })
    expect(result).toEqual([
      'amsterdam-grid-cell--span-8',
      'amsterdam-grid-cell--start-2',
      'amsterdam-grid-cell--start-4-medium',
      'amsterdam-grid-cell--start-6-wide',
    ])
  })

  it('should generate class names for a single number for span and array values for start', () => {
    const result = gridCellClasses({ narrow: 3, medium: 5, wide: 7 }, 2)
    expect(result).toEqual([
      'amsterdam-grid-cell--span-3',
      'amsterdam-grid-cell--span-5-medium',
      'amsterdam-grid-cell--span-7-wide',
      'amsterdam-grid-cell--start-2',
    ])
  })

  it('should generate class names for an array of three numbers for start and span', () => {
    const result = gridCellClasses({ narrow: 2, medium: 4, wide: 6 }, { narrow: 1, medium: 3, wide: 5 })
    expect(result).toEqual([
      'amsterdam-grid-cell--span-2',
      'amsterdam-grid-cell--span-4-medium',
      'amsterdam-grid-cell--span-6-wide',
      'amsterdam-grid-cell--start-1',
      'amsterdam-grid-cell--start-3-medium',
      'amsterdam-grid-cell--start-5-wide',
    ])
  })
})
