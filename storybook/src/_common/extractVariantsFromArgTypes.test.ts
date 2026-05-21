/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { StrictArgTypes, StrictInputType } from 'storybook/internal/csf'

import { describe, expect, it } from 'vitest'

import { extractVariantsFromArgTypes } from './extractVariantsFromArgTypes'
import { HEADING_SAMPLE, NUMBER_SAMPLE, STRING_SAMPLE } from './variantFixtures'

const argType = (overrides: { name: string } & Partial<StrictInputType>): StrictInputType => ({
  ...overrides,
})

const argTypes = (entries: StrictInputType[]): StrictArgTypes =>
  Object.fromEntries(entries.map((entry) => [entry.name, entry])) as StrictArgTypes

describe('extractVariantsFromArgTypes', () => {
  it('expands an enum prop to its sorted literal values', () => {
    const result = extractVariantsFromArgTypes(
      argTypes([argType({ name: 'variant', type: { name: 'enum', value: ['secondary', 'primary'] } })]),
    )

    expect(result).toEqual([{ hasIcon: null, name: 'variant', values: ['primary', 'secondary'] }])
  })

  it('expands a boolean prop to [true, false]', () => {
    const result = extractVariantsFromArgTypes(argTypes([argType({ name: 'disabled', type: { name: 'boolean' } })]))

    expect(result).toEqual([{ hasIcon: null, name: 'disabled', values: [true, false] }])
  })

  it('substitutes the number fixture for a number prop', () => {
    const result = extractVariantsFromArgTypes(argTypes([argType({ name: 'count', type: { name: 'number' } })]))

    expect(result).toEqual([{ hasIcon: null, name: 'count', values: [NUMBER_SAMPLE] }])
  })

  it('substitutes the string fixture for a string prop', () => {
    const result = extractVariantsFromArgTypes(argTypes([argType({ name: 'label', type: { name: 'string' } })]))

    expect(result).toEqual([{ hasIcon: null, name: 'label', values: [STRING_SAMPLE] }])
  })

  it('returns empty values for types it cannot expand (e.g. ReactNode)', () => {
    const result = extractVariantsFromArgTypes(
      argTypes([argType({ name: 'content', type: { name: 'other', value: 'ReactNode' } })]),
    )

    expect(result).toEqual([{ hasIcon: null, name: 'content', values: [] }])
  })

  it('skips argTypes disabled in the controls table', () => {
    const result = extractVariantsFromArgTypes(
      argTypes([
        argType({ name: 'className', table: { disable: true }, type: { name: 'string' } }),
        argType({ name: 'size', type: { name: 'enum', value: ['s', 'm'] } }),
      ]),
    )

    expect(result).toEqual([{ hasIcon: null, name: 'size', values: ['m', 's'] }])
  })

  it('skips the children argType even when a meta re-enables it', () => {
    const result = extractVariantsFromArgTypes(
      argTypes([
        argType({ name: 'children', table: { disable: false }, type: { name: 'string' } }),
        argType({ name: 'color', type: { name: 'enum', value: ['inverse'] } }),
      ]),
    )

    expect(result.map((prop) => prop.name)).toEqual(['color'])
  })

  it('resolves a string | number union to the string fixture', () => {
    const result = extractVariantsFromArgTypes(
      argTypes([
        argType({
          name: 'label',
          type: { name: 'union', value: [{ name: 'string' }, { name: 'number' }] },
        }),
      ]),
    )

    expect(result).toEqual([{ hasIcon: null, name: 'label', values: [STRING_SAMPLE] }])
  })

  it('sorts entries alphabetically by name', () => {
    const result = extractVariantsFromArgTypes(
      argTypes([
        argType({ name: 'zebra', type: { name: 'boolean' } }),
        argType({ name: 'alpha', type: { name: 'boolean' } }),
      ]),
    )

    expect(result.map((prop) => prop.name)).toEqual(['alpha', 'zebra'])
  })

  it('returns an empty list when no argTypes are provided', () => {
    expect(extractVariantsFromArgTypes({} as StrictArgTypes)).toEqual([])
  })

  it('merges enum values with the color fixture, adding "default"', () => {
    const result = extractVariantsFromArgTypes(
      argTypes([argType({ name: 'color', type: { name: 'enum', value: ['inverse', 'contrast'] } })]),
    )

    expect(result).toEqual([{ hasIcon: null, name: 'color', values: ['contrast', 'default', 'inverse'] }])
  })

  it('returns the heading fixture for a heading prop', () => {
    const result = extractVariantsFromArgTypes(argTypes([argType({ name: 'heading', type: { name: 'string' } })]))

    expect(result).toEqual([
      {
        hasIcon: null,
        name: 'heading',
        values: [HEADING_SAMPLE],
      },
    ])
  })
})
