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
 * Props that only set an accessible name. Varying one produces a cell that looks
 * identical to the baseline, so they stay off the prop axis.
 */
export const ARIA_ONLY_PROP_NAMES = ['accessibleName', 'accessibleNameId']

/**
 * Props whose controls offer a choice the matrix leaves alone on purpose, so that the check
 * below reads them as a decision rather than as an axis that fell away. `svg` is the icon
 * itself, and its options are every icon in the package: Icon snapshots the whole set in a
 * block of its own, and an Icon Button is the chrome around a glyph rather than the glyph.
 */
export const UNVARIED_PROP_NAMES = ['svg']

/**
 * The props whose control offers a choice of values that the matrix found none of.
 *
 * `valuesFromType` reads an `enum` or a `boolean` and nothing else, so a prop the docgen
 * analyser cannot resolve — it reports `type: none` — leaves the axis it belongs to without
 * a word. The story still renders, the unit tests and `tsc` still pass, and the only symptom
 * is a shorter Chromatic snapshot, which reads as an intended change. Breakout rendered 24
 * instances at 8710px until it silently rendered 5 at 1622px, and nothing failed.
 */
const collapsedPropsIn = (axisProps: PropWithValues[], argTypes: StrictArgTypes): string[] => {
  const offersOptions = new Set(
    Object.values(argTypes)
      .filter((argType) => (argType.options?.length ?? 0) > 0)
      .map(({ name }) => name),
  )

  return axisProps.filter(({ name, values }) => values.length === 0 && offersOptions.has(name)).map(({ name }) => name)
}

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
 * • The prop axis carries every other prop, bar the aria-only ones, and shows only
 *   the values the baseline doesn’t already show.
 * • Each state opens with the baseline, so the component as a story’s own args
 *   leave it is snapshotted once per state rather than once per prop.
 *
 * The crosses that matter survive: `disabled` still meets `checked` and
 * `indeterminate`, which have disabled fills of their own, and an enum still shows
 * its non-default members in every state.
 *
 * Throws when an axis has fallen away rather than laying out the smaller matrix that
 * remains, for the reason `collapsedPropsIn` gives.
 */
export const buildVariantMatrix = (
  argTypes: StrictArgTypes,
  { args, variants = [] }: BuildVariantMatrixParams = {},
): VariantMatrixEntry[] => {
  const propsWithValues = extractVariantsFromArgTypes(argTypes)

  // Everything that feeds an axis: the prop axis below, and the size axis through `sizesOf`.
  const axisProps = propsWithValues.filter(
    ({ name }) =>
      !ARIA_ONLY_PROP_NAMES.includes(name) &&
      !UNVARIED_PROP_NAMES.includes(name) &&
      !variants.some((variant) => variant === name),
  )

  const collapsed = collapsedPropsIn(axisProps, argTypes)

  if (collapsed.length > 0) {
    throw new Error(
      `The variant matrix found no values for ${collapsed.join(', ')}, though the controls offer a choice, so this ` +
        `story snapshots its baseline alone. Either resolve the type to an enum or a boolean, give the prop a ` +
        `fixture in variantFixtures.ts, name it in UNVARIED_PROP_NAMES when leaving it out is the intention, or ` +
        `drop renderComponentVariants and snapshot one composition on purpose, the way Breakout does.`,
    )
  }

  const sizes = sizesOf(propsWithValues)
  const matrixProps = axisProps.filter(({ name }) => name !== SIZE_PROP_NAME)

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
