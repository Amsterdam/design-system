/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { StrictArgTypes } from 'storybook/internal/csf'

import type {
  BuildVariantMatrixParams,
  CellState,
  PropWithValues,
  VariantMatrixEntry,
  VariantValue,
} from './renderComponentVariantTypes'

import { extractVariantsFromArgTypes } from './extractVariantsFromArgTypes'

/** The prop that drives the size axis, rather than a row of its own on the prop axis. */
export const SIZE_PROP_NAME = 'size'

/**
 * Props that cannot change how a component looks: `accessibleName` and `accessibleNameId`
 * only name it for assistive technology, and `as` only swaps the element it renders, which
 * the stylesheet makes look the same. Varying one produces a cell that looks identical to
 * the baseline, so they stay off the prop axis.
 *
 * `ol` and `ul` are the tags that could differ, a browser indenting a list and drawing
 * markers. The Grid test story checks that reset by putting a list Grid and Subgrid beside
 * plain ones, which a row of the matrix could never do, having nothing to compare against.
 */
export const NON_VISUAL_PROP_NAMES = ['accessibleName', 'accessibleNameId', 'as']

const sizesOf = (propsWithValues: PropWithValues[]): (string | undefined)[] => {
  const sizeProp = propsWithValues.find((prop) => prop.name === SIZE_PROP_NAME)

  if (!sizeProp || sizeProp.values.length === 0) {
    return [undefined]
  }

  // Every size the component doesn’t name in words comes down to the same rendering: its own default.
  return [...new Set(sizeProp.values.map((value) => (typeof value === 'string' ? value : undefined)))]
}

/**
 * Lays out the matrix of component instances a test story renders for Chromatic:
 * every prop value the arg types offer, in every size, in every state.
 *
 * Each axis has exactly one job, so that no two cells describe the same component:
 *
 * • The state axis carries the modifiers a story asks for through `variants`,
 *   being `disabled` and `hovered`. A prop that is also a state therefore leaves
 *   the prop axis: `disabled` would otherwise vary against the state that already
 *   sets it, rendering both values twice over.
 * • The prop axis carries every other prop, bar the ones no cell can show, and gives
 *   only the values the baseline doesn’t already show.
 * • Each state opens with the baseline, so the component as a story’s own args
 *   leave it is snapshotted once per state rather than once per prop.
 *
 * The crosses that matter survive: `disabled` still meets `checked` and
 * `indeterminate`, which have disabled fills of their own, and an enum still shows
 * its non-default members in every state.
 */
export const buildVariantMatrix = (
  argTypes: StrictArgTypes,
  { args, variants = [] }: BuildVariantMatrixParams = {},
): VariantMatrixEntry[] => {
  const propsWithValues = extractVariantsFromArgTypes(argTypes)
  const sizes = sizesOf(propsWithValues)
  const matrixProps = propsWithValues.filter(
    ({ name }) =>
      name !== SIZE_PROP_NAME && !NON_VISUAL_PROP_NAMES.includes(name) && !variants.some((variant) => variant === name),
  )

  // What the baseline cell already shows for a prop: the story’s own arg where it holds
  // a value, and the value the arg types declare where it doesn’t. A meta that spells out
  // `markers: undefined` leaves the choice to the component, so the default still stands.
  const baselineValueOf = ({ defaultValue, name }: PropWithValues): VariantValue | undefined =>
    (args?.[name] as VariantValue | undefined) ?? defaultValue

  const states: CellState[] = ['default', ...variants]

  return states.flatMap((state) =>
    sizes.flatMap((size) => [
      { hasIcon: null, size, state },
      ...matrixProps.flatMap((prop) =>
        prop.values
          .filter((value) => value !== baselineValueOf(prop))
          .map((variant) => ({ hasIcon: prop.hasIcon, propName: prop.name, size, state, variant })),
      ),
    ]),
  )
}
