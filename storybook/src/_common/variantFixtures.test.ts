/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { StrictInputType } from 'storybook/internal/csf'

import { ChevronDownIcon } from '@amsterdam/design-system-react-icons'
import { describe, expect, it } from 'vitest'

import { fixtureValuesFor, HEADING_SAMPLE, NUMBER_SAMPLE, STRING_SAMPLE } from './variantFixtures'

const argType = (overrides: { name: string } & Partial<StrictInputType>): StrictInputType => ({ ...overrides })

describe('fixtureValuesFor', () => {
  it('returns the icon as a single value for an icon prop', () => {
    expect(fixtureValuesFor(argType({ name: 'icon' }))).toEqual({ hasIcon: null, values: [ChevronDownIcon] })
  })

  it('attaches the icon fixture for iconBefore', () => {
    expect(fixtureValuesFor(argType({ name: 'iconBefore' }))).toEqual({
      hasIcon: { icon: ChevronDownIcon },
      values: [true],
    })
  })

  it('returns three sample image URLs for an imageSrc prop', () => {
    const result = fixtureValuesFor(argType({ name: 'imageSrc' }))
    expect(result?.values).toHaveLength(3)
    expect(result?.values[0]).toMatch(/^https:\/\/picsum\.photos\//)
  })

  it('returns the Amsterdam heading sample for a heading prop', () => {
    expect(fixtureValuesFor(argType({ name: 'heading' }))).toEqual({
      hasIcon: null,
      values: [HEADING_SAMPLE],
    })
  })

  it('merges the color enum with the default sentinel', () => {
    const result = fixtureValuesFor(argType({ name: 'color', type: { name: 'enum', value: ['inverse', 'contrast'] } }))
    expect(result).toEqual({ hasIcon: null, values: ['contrast', 'default', 'inverse'] })
  })

  it('returns just the default sentinel for a non-enum color prop', () => {
    expect(fixtureValuesFor(argType({ name: 'color' }))).toEqual({ hasIcon: null, values: ['default'] })
  })

  it('returns the number sample for a number-typed prop without a name match', () => {
    expect(fixtureValuesFor(argType({ name: 'count', type: { name: 'number' } }))).toEqual({
      hasIcon: null,
      values: [NUMBER_SAMPLE],
    })
  })

  it('returns the string sample for a string-typed prop without a name match', () => {
    expect(fixtureValuesFor(argType({ name: 'label', type: { name: 'string' } }))).toEqual({
      hasIcon: null,
      values: [STRING_SAMPLE],
    })
  })

  it('returns undefined for props that have neither a name match nor a primitive type', () => {
    expect(fixtureValuesFor(argType({ name: 'onClick', type: { name: 'function' } }))).toBeUndefined()
  })
})
