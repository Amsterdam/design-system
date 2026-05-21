/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { StrictInputType } from 'storybook/internal/csf'

import { ChevronDownIcon } from '@amsterdam/design-system-react-icons'

import type { PropWithValues, VariantValue } from './renderComponentVariantTypes'

const hasIconFixture = { icon: ChevronDownIcon }

export const HEADING_SAMPLE = 'Gemeente Amsterdam'
export const STRING_SAMPLE = 'Heldhaftig, vastberaden, barmhartig'
export const NUMBER_SAMPLE = 20

const byPropName: Record<string, Omit<PropWithValues, 'name'>> = {
  color: {
    hasIcon: null,
    values: ['default'],
  },
  heading: {
    hasIcon: null,
    values: [HEADING_SAMPLE],
  },
  icon: {
    hasIcon: null,
    values: [ChevronDownIcon],
  },
  iconBefore: {
    hasIcon: hasIconFixture,
    values: [true],
  },
  iconOnly: {
    hasIcon: hasIconFixture,
    values: [true],
  },
  imageSrc: {
    hasIcon: null,
    values: [
      'https://picsum.photos/id/64/128/128',
      'https://picsum.photos/id/64/128/64',
      'https://picsum.photos/id/64/16/16',
    ],
  },
}

const mergeEnumWithFixture = (fixture: Omit<PropWithValues, 'name'>, enumValues: VariantValue[]) => ({
  hasIcon: fixture.hasIcon,
  values: [...new Set([...enumValues, ...fixture.values])].sort(),
})

const primitiveFixture = (scalarName: string): Omit<PropWithValues, 'name'> | undefined => {
  if (scalarName === 'number') return { hasIcon: null, values: [NUMBER_SAMPLE] }
  if (scalarName === 'string') return { hasIcon: null, values: [STRING_SAMPLE] }
  return undefined
}

/**
 * Returns design-system specific test values for a prop, or undefined when
 * the prop has no fixture (so the parser can fall back to argType.type).
 *
 * Storybook represents non-trivial unions in two different shapes:
 *
 *   • `SBUnionType` — explicit member array. Resolve by preferring the
 *     string fixture when present, otherwise number.
 *   • `SBOtherType` (`name: 'other'`, `value: '<raw type string>'`) —
 *     used when the underlying analyser couldn't classify the union
 *     into discrete members. In practice `react-docgen-typescript`
 *     emits this for `string | number`, with `value === 'string | number'`.
 *     Pattern-match the raw string to recover the same behaviour the old
 *     `__docgenInfo`-based parser had.
 */
export const fixtureValuesFor = (argType: StrictInputType): Omit<PropWithValues, 'name'> | undefined => {
  const fixture = byPropName[argType.name]

  if (fixture) {
    if (argType.type?.name === 'enum') {
      return mergeEnumWithFixture(fixture, argType.type.value)
    }
    return fixture
  }

  const type = argType.type
  if (!type) return undefined

  if (type.name === 'union') {
    const memberNames = new Set(type.value.map((member) => member.name))
    if (memberNames.has('string')) return primitiveFixture('string')
    if (memberNames.has('number')) return primitiveFixture('number')
    return undefined
  }

  if (type.name === 'other' && typeof type.value === 'string') {
    if (/\bstring\b/.test(type.value)) return primitiveFixture('string')
    if (/\bnumber\b/.test(type.value)) return primitiveFixture('number')
    return undefined
  }

  return primitiveFixture(type.name)
}
