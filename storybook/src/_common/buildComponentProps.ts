/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { clsx } from 'clsx'

import type { BuildComponentPropsParams, VariantMatrixEntry, VariantValue } from './renderComponentVariantTypes'

/**
 * The props the matrix sets from the cell itself, whatever a story’s args hold.
 * Varying one on the prop axis shows nothing: the value below wins over it.
 */
export const DERIVED_PROP_NAMES = ['accessibleName', 'accessibleNameId']

/**
 * Names the value a cell varies, for the key below.
 *
 * An icon is a component or a React element, and stringifying either gives something
 * useless: the component’s whole source, over 300 characters of it for a Design System
 * icon, or `[object Object]` for an element. Take the name instead, which reads as a name
 * and keeps two different icons apart.
 */
const nameOf = (variant: VariantValue | undefined): string => {
  if (typeof variant === 'function') return variant.name || 'component'

  if (typeof variant === 'object' && variant !== null) {
    const { type } = variant as { type?: { name?: string } | string }

    return (typeof type === 'string' ? type : type?.name) || 'element'
  }

  return String(variant)
}

/**
 * Names a cell of the variant matrix, uniquely among its siblings. Serves as the
 * React key and as the accessible name for the components that take one.
 */
export const variantKeyFor = ({
  propName,
  size,
  state,
  variant,
}: Pick<VariantMatrixEntry, 'propName' | 'size' | 'state' | 'variant'>): string =>
  propName ? `${size ?? 'none'}-${propName}-${nameOf(variant)}-${state}` : `${size ?? 'none'}-baseline-${state}`

/**
 * Assembles the props for a single component instance in the variant matrix.
 * Handles state classes (`hover`), disabled flag, size routing and the
 * inverse background trigger defined in authoring.css.
 *
 * A cell without a `propName` is the baseline, which varies no prop at all and so
 * shows the component as the story's own args leave it, in this state and size.
 *
 * For components that render an ARIA landmark and expose `accessibleName`
 * / `accessibleNameId` props, a per-variant value is injected so each
 * landmark in the matrix has a unique accessible name and id. This avoids
 * axe's `landmark-unique` and duplicate-id violations in Chromatic.
 */
export const buildComponentProps = ({
  acceptsAccessibleName,
  acceptsAccessibleNameId,
  args,
  hasIcon,
  propName,
  size,
  sizePropName,
  state,
  variant,
}: BuildComponentPropsParams) => {
  const variantKey = variantKeyFor({ propName, size, state, variant })

  return {
    ...args,
    ...(state === 'disabled' && { [state]: true }),
    ...(hasIcon ?? {}),
    ...(sizePropName && { [sizePropName]: size }),
    className: clsx(
      state === 'hovered' && 'hover',
      typeof variant === 'string' && variant === 'inverse' && state !== 'disabled' && '_ams-page-background--dark',
    ),
    ...(propName && propName !== sizePropName && { [propName]: variant }),
    ...(acceptsAccessibleName && { accessibleName: variantKey }),
    ...(acceptsAccessibleNameId && { accessibleNameId: `variant-${variantKey}` }),
  }
}
