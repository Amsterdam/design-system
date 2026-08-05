/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { IconProps } from '@amsterdam/design-system-react'
import type { Meta } from '@storybook/react-vite'

export type VariantValue = string | number | boolean | IconProps['svg']

/**
 * The modifiers the matrix can put on its state axis. Closed on purpose: each one
 * needs buildComponentProps to apply it, and a prop named here leaves the prop axis,
 * so a name the props builder ignores would drop that prop from the matrix instead
 * of varying it.
 */
export type VariantState = 'disabled' | 'hovered'

/** The state a cell renders in: the component as it stands, or under one modifier. */
export type CellState = 'default' | VariantState

export type PropWithValues = {
  /** The value the prop takes when a story leaves it out, as far as the arg types declare one. */
  defaultValue: VariantValue | undefined
  hasIcon: { icon: IconProps['svg'] } | null
  name: string
  values: VariantValue[]
}

/**
 * One cell of the variant matrix, holding everything that sets a single component
 * instance apart from the others. A cell without a `propName` is the baseline: the
 * component as the story’s own args leave it, with no prop varied.
 */
export type VariantMatrixEntry = {
  hasIcon: { icon: IconProps['svg'] } | null
  propName?: string
  size: string | undefined
  state: CellState
  variant?: VariantValue
}

export type renderComponentVariantsParams = {
  args: Meta['args']
  layout?: 'flex' | 'grid'
  variants?: VariantState[]
}

export type BuildVariantMatrixParams = {
  args?: Meta['args']
  variants?: VariantState[]
}

export type BuildComponentPropsParams = {
  args: Meta['args']
  hasIcon?: { icon: IconProps['svg'] } | null
  propName?: string
  size?: string | undefined
  sizePropName: string
  state: CellState
  variant?: VariantValue
}
