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
  ...(propName !== sizePropName && { [propName]: variant }),
})
