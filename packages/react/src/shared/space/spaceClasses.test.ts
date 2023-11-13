import { spaceClasses } from './spaceClasses'

describe('spaceClasses function', () => {
  it('should return an empty array when no space values are provided', () => {
    const result = spaceClasses()
    expect(result).toEqual([])
  })

  it('should return the correct classes for bottom space', () => {
    const result = spaceClasses('small')
    expect(result).toEqual(['amsterdam-space-bottom--small'])
  })

  it('should return the correct classes for top space', () => {
    const result = spaceClasses(undefined, 'medium')
    expect(result).toEqual(['amsterdam-space-top--medium'])
  })

  it('should return the correct classes for vertical space', () => {
    const result = spaceClasses(undefined, undefined, 'large')
    expect(result).toEqual(['amsterdam-space-vertical--large'])
  })

  it('should prioritize vertical space over bottom and top space', () => {
    const result = spaceClasses('small', 'medium', 'large')
    expect(result).toEqual(['amsterdam-space-vertical--large'])
  })

  it('should handle multiple space values correctly', () => {
    const result = spaceClasses('small', 'medium')
    expect(result).toEqual(['amsterdam-space-bottom--small', 'amsterdam-space-top--medium'])
  })
})
