import { paddingClasses } from './paddingClasses'

describe('paddingClasses function', () => {
  it('should return an empty array when no padding values are provided', () => {
    const result = paddingClasses()
    expect(result).toEqual([])
  })

  it('should return the correct classes when paddingBottom is provided', () => {
    const result = paddingClasses('small')
    expect(result).toEqual(['amsterdam-padding-bottom--small'])
  })

  it('should return the correct classes when paddingTop is provided', () => {
    const result = paddingClasses(undefined, 'medium')
    expect(result).toEqual(['amsterdam-padding-top--medium'])
  })

  it('should return the correct classes when paddingVertical is provided', () => {
    const result = paddingClasses(undefined, undefined, 'large')
    expect(result).toEqual(['amsterdam-padding-vertical--large'])
  })

  it('should prioritize paddingVertical over paddingBottom and paddingTop', () => {
    const result = paddingClasses('small', 'medium', 'large')
    expect(result).toEqual(['amsterdam-padding-vertical--large'])
  })

  it('should handle multiple padding values correctly', () => {
    const result = paddingClasses('small', 'medium')
    expect(result).toEqual(['amsterdam-padding-bottom--small', 'amsterdam-padding-top--medium'])
  })
})
