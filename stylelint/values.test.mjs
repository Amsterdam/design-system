/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import {
  calculateRatio,
  findFunction,
  hasInterpolation,
  hasViewportUnit,
  parseLength,
  splitTopLevelParts,
} from './values.mjs'

describe('splitTopLevelParts', () => {
  it('splits on commas', () => {
    expect(splitTopLevelParts('a, b, c')).toEqual(['a', 'b', 'c'])
  })

  it('keeps commas nested in a function together', () => {
    expect(splitTopLevelParts('clamp(1rem, 5vw, 2rem), b')).toEqual(['clamp(1rem, 5vw, 2rem)', 'b'])
  })

  it('keeps commas inside a quoted family name together', () => {
    expect(splitTopLevelParts(`'Foo, Bar', sans-serif`)).toEqual([`'Foo, Bar'`, 'sans-serif'])
  })

  it('returns the whole value when there is no top level comma', () => {
    expect(splitTopLevelParts('1rem')).toEqual(['1rem'])
  })
})

describe('findFunction', () => {
  it('finds a call and its arguments', () => {
    expect(findFunction('clamp(1rem, 5vw, 2rem)', 'clamp')).toMatchObject({
      args: ['1rem', '5vw', '2rem'],
      end: 22,
      start: 0,
    })
  })

  it('keeps a nested call intact', () => {
    expect(findFunction('clamp(var(--a), 5vw, 2rem)', 'clamp').args).toEqual(['var(--a)', '5vw', '2rem'])
  })

  it('finds a call that starts partway through a value', () => {
    expect(findFunction('calc(2 * var(--a))', 'var')).toMatchObject({ args: ['--a'], start: 9 })
  })

  it('ignores a name that is the tail of a longer identifier', () => {
    expect(findFunction('my-var(--a)', 'var')).toBeNull()
  })

  it('returns null when the function is absent', () => {
    expect(findFunction('1rem', 'var')).toBeNull()
  })

  it('returns null when the parentheses are unbalanced', () => {
    expect(findFunction('var(--a', 'var')).toBeNull()
  })
})

describe('parseLength', () => {
  it.each([
    ['1rem', { number: 1, unit: 'rem' }],
    ['.5rem', { number: 0.5, unit: 'rem' }],
    ['-2px', { number: -2, unit: 'px' }],
    ['16PX', { number: 16, unit: 'px' }],
    ['50%', { number: 50, unit: '%' }],
  ])('parses %s', (value, expected) => {
    expect(parseLength(value)).toEqual(expected)
  })

  it.each([['0'], ['auto'], ['1rem + 2vw']])('returns null for %s', (value) => {
    expect(parseLength(value)).toBeNull()
  })
})

describe('calculateRatio', () => {
  it('divides two lengths that share a unit', () => {
    expect(calculateRatio('1rem', '2rem')).toBe(2)
  })

  it('compares units that both have a fixed pixel size', () => {
    expect(calculateRatio('16px', '4rem')).toBe(4)
  })

  it('compares percentages to each other', () => {
    expect(calculateRatio('50%', '200%')).toBe(4)
  })

  it('compares two em values to each other, since the parent font size cancels out', () => {
    expect(calculateRatio('1em', '3em')).toBe(3)
  })

  it('returns null when em is mixed with another unit, since the parent font size is unknown', () => {
    expect(calculateRatio('1em', '2rem')).toBeNull()
  })

  it('returns null when the minimum is zero, to avoid dividing by it', () => {
    expect(calculateRatio('0rem', '2rem')).toBeNull()
  })

  it('returns null when a value is not a length', () => {
    expect(calculateRatio('auto', '2rem')).toBeNull()
  })
})

describe('hasViewportUnit', () => {
  it.each([['5vw'], ['1.0893rem + 0.1786vw'], ['100dvh'], ['10svmin']])('detects %s', (value) => {
    expect(hasViewportUnit(value)).toBe(true)
  })

  it.each([['2rem'], ['var(--foo-vw)'], ['16px']])('does not detect %s', (value) => {
    expect(hasViewportUnit(value)).toBe(false)
  })
})

describe('hasInterpolation', () => {
  it('detects Sass interpolation', () => {
    expect(hasInterpolation('#{$ams-size}')).toBe(true)
  })

  it('ignores a plain value', () => {
    expect(hasInterpolation('1rem')).toBe(false)
  })
})
