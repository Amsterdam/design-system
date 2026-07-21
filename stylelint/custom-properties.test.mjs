/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { getReferencedCustomProperty, parseFontStack, resolveValue } from './custom-properties.mjs'

const customProperties = new Map([
  ['--ambiguous', null],
  ['--cycle-a', 'var(--cycle-b)'],
  ['--cycle-b', 'var(--cycle-a)'],
  ['--maximum', '2rem'],
  ['--minimum', '1rem'],
  ['--one-hop', 'var(--minimum)'],
  ['--self', 'var(--self)'],
  ['--two-hops', 'var(--one-hop)'],
])

describe('resolveValue', () => {
  it('returns a value that holds no custom property unchanged', () => {
    expect(resolveValue('1rem', customProperties)).toBe('1rem')
  })

  it('resolves a single reference', () => {
    expect(resolveValue('var(--minimum)', customProperties)).toBe('1rem')
  })

  it('follows a chain of references', () => {
    expect(resolveValue('var(--two-hops)', customProperties)).toBe('1rem')
  })

  it('resolves every reference in a composite value', () => {
    expect(resolveValue('clamp(var(--minimum), 5vw, var(--maximum))', customProperties)).toBe('clamp(1rem, 5vw, 2rem)')
  })

  it('uses the fallback when the custom property is undefined', () => {
    expect(resolveValue('var(--undefined, 3rem)', customProperties)).toBe('3rem')
  })

  it('ignores the fallback when the custom property is defined, matching the cascade', () => {
    expect(resolveValue('var(--minimum, 9rem)', customProperties)).toBe('1rem')
  })

  it('resolves a reference nested in a fallback', () => {
    expect(resolveValue('var(--undefined, var(--minimum))', customProperties)).toBe('1rem')
  })

  it('returns null for an undefined custom property without a fallback', () => {
    expect(resolveValue('var(--undefined)', customProperties)).toBeNull()
  })

  it('returns null for a custom property declared with conflicting values', () => {
    expect(resolveValue('var(--ambiguous)', customProperties)).toBeNull()
  })

  it('returns null for a reference cycle instead of recursing forever', () => {
    expect(resolveValue('var(--cycle-a)', customProperties)).toBeNull()
  })

  it('returns null for a custom property that references itself', () => {
    expect(resolveValue('var(--self)', customProperties)).toBeNull()
  })

  it('returns null when one part of a composite value is unresolvable', () => {
    expect(resolveValue('clamp(var(--minimum), 5vw, var(--undefined))', customProperties)).toBeNull()
  })
})

describe('getReferencedCustomProperty', () => {
  it.each([
    ['var(--minimum)', '--minimum'],
    ['  var(--minimum)  ', '--minimum'],
    ['var(--minimum, 1rem)', '--minimum'],
  ])('names the custom property in %s', (value, expected) => {
    expect(getReferencedCustomProperty(value)).toBe(expected)
  })

  it.each([['1rem'], ['var(--a) var(--b)'], ['clamp(var(--a), 5vw, 2rem)']])(
    'returns null for %s, which is more than one reference',
    (value) => {
      expect(getReferencedCustomProperty(value)).toBeNull()
    },
  )
})

describe('parseFontStack', () => {
  it('splits a stack and strips quotes', () => {
    expect(parseFontStack(`'Amsterdam Sans', Arial, sans-serif`)).toEqual(['Amsterdam Sans', 'Arial', 'sans-serif'])
  })

  it('keeps a comma inside a quoted family name', () => {
    expect(parseFontStack(`"Foo, Bar", serif`)).toEqual(['Foo, Bar', 'serif'])
  })

  it('returns a single family', () => {
    expect(parseFontStack('inherit')).toEqual(['inherit'])
  })
})
