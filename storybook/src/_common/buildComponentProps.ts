/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { clsx } from 'clsx'

import type { BuildComponentPropsParams } from './renderComponentVariantTypes'

/**
 * Assembles the props for a single component instance in the variant matrix.
 * Handles state classes (`hover`), disabled flag, size routing and the
 * inverse background trigger used in tests.css.
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
  const variantKey = `${size ?? 'none'}-${propName}-${String(variant)}-${state}`

  return {
    ...args,
    ...(state === 'disabled' && { [state]: true }),
    ...(hasIcon ?? {}),
    ...(sizePropName && { [sizePropName]: size }),
    className: clsx(
      state === 'hovered' && 'hover',
      typeof variant === 'string' && variant === 'inverse' && state !== 'disabled' && '_ams-page-background--dark',
    ),
    ...(propName !== sizePropName && { [propName]: variant }),
    ...(acceptsAccessibleName && { accessibleName: variantKey }),
    ...(acceptsAccessibleNameId && { accessibleNameId: `variant-${variantKey}` }),
  }
}
