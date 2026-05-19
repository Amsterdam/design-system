/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { StrictArgTypes, StrictInputType } from 'storybook/internal/csf'

import type { PropWithValues, VariantValue } from './renderComponentVariantTypes'

import { fixtureValuesFor } from './variantFixtures'

const valuesFromType = (argType: StrictInputType): VariantValue[] | undefined => {
  const type = argType.type
  if (!type) return undefined

  if (type.name === 'enum') {
    return [...type.value].sort()
  }

  if (type.name === 'boolean') {
    return [true, false]
  }

  return undefined
}

/**
 * Pure parser: turns Storybook's normalized argTypes into the
 * { name, values, hasIcon } shape consumed by renderComponentVariants.
 *
 * Props disabled in the controls table (e.g. children, className, style)
 * are skipped — they're noise in the visual matrix.
 */
export const extractVariantsFromArgTypes = (argTypes: StrictArgTypes): PropWithValues[] =>
  Object.values(argTypes)
    .filter((argType) => !argType.table?.disable)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((argType) => {
      const fixture = fixtureValuesFor(argType)
      if (fixture) return { ...fixture, name: argType.name }

      return { hasIcon: null, name: argType.name, values: valuesFromType(argType) ?? [] }
    })
