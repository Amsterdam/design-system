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
 * The value a prop falls back to when a story doesn’t set it, so the matrix can
 * leave that value out: the baseline instance already shows it.
 *
 * The docgen analyzer reports the default as a display string — the source text of
 * the destructured default, so `'primary'` arrives as `primary` and `CheckboxIcon`
 * as the identifier. Booleans rarely declare one, since a component reads them
 * straight from the rest props; an absent boolean is `false`.
 */
const defaultValueOf = (argType: StrictInputType): VariantValue | undefined => {
  const summary = argType.table?.defaultValue?.summary

  if (summary === undefined) {
    return argType.type?.name === 'boolean' ? false : undefined
  }

  const unquoted = summary.replace(/^(['"])(.*)\1$/, '$2')

  if (unquoted === 'true' || unquoted === 'false') return unquoted === 'true'

  return unquoted
}

/**
 * Pure parser: turns Storybook's normalized argTypes into the
 * { name, values, hasIcon, defaultValue } shape consumed by buildVariantMatrix.
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
      const defaultValue = defaultValueOf(argType)
      const fixture = fixtureValuesFor(argType)
      if (fixture) return { ...fixture, defaultValue, name: argType.name }

      return { defaultValue, hasIcon: null, name: argType.name, values: valuesFromType(argType) ?? [] }
    })
