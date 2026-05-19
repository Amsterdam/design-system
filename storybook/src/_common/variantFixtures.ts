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

/**
 * Returns design-system specific test values for a prop, or undefined when
 * the prop has no fixture (so the parser can fall back to argType.type).
 */
export const fixtureValuesFor = (argType: StrictInputType): Omit<PropWithValues, 'name'> | undefined => {
  const fixture = byPropName[argType.name]

  if (fixture) {
    if (argType.type?.name === 'enum') {
      return mergeEnumWithFixture(fixture, argType.type.value)
    }
    return fixture
  }

  const typeName = argType.type?.name
  if (typeName === 'number') {
    return { hasIcon: null, values: [NUMBER_SAMPLE] }
  }
  if (typeName === 'string') {
    return { hasIcon: null, values: [STRING_SAMPLE] }
  }

  return undefined
}
