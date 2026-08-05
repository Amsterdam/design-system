/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { clsx } from 'clsx'

import type { BuildComponentPropsParams, VariantMatrixEntry, VariantValue } from './renderComponentVariantTypes'

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
 * Names a cell of the variant matrix, uniquely among its siblings, to serve as its
 * React key.
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
 */
export const buildComponentProps = ({
  args,
  hasIcon,
  propName,
  size,
  sizePropName,
  state,
  variant,
}: BuildComponentPropsParams) => ({
  ...args,
  ...(state === 'disabled' && { [state]: true }),
  ...(hasIcon ?? {}),
  ...(sizePropName && { [sizePropName]: size }),
  className: clsx(
    state === 'hovered' && 'hover',
    typeof variant === 'string' && variant === 'inverse' && state !== 'disabled' && '_ams-page-background--dark',
  ),
  ...(propName && propName !== sizePropName && { [propName]: variant }),
})
