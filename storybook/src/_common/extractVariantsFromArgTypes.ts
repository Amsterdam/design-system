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
 * are skipped — they're noise in the visual matrix. `children` is also
 * skipped unconditionally: even when a meta re-enables it for the docs
 * panel, it's content, not a variant.
 */
const isMatrixProp = (argType: StrictInputType): boolean => argType.name !== 'children' && !argType.table?.disable

export const extractVariantsFromArgTypes = (argTypes: StrictArgTypes): PropWithValues[] =>
  Object.values(argTypes)
    .filter(isMatrixProp)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((argType) => {
      const fixture = fixtureValuesFor(argType)
      if (fixture) return { ...fixture, name: argType.name }

      return { hasIcon: null, name: argType.name, values: valuesFromType(argType) ?? [] }
    })
