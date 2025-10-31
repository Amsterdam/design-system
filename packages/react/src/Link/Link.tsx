/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ForwardedRef } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type LinkProps = {
  /** Changes the text colour for readability on a light or dark background. */
  color?: 'contrast' | 'inverse'
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'placeholder'>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-link--docs Link docs at Amsterdam Design System}
 */
export const Link = forwardRef(
  ({ children, className, color, ...restProps }: LinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <a {...restProps} className={clsx('ams-link', color && `ams-link--${color}`, className)} ref={ref}>
      {children}
    </a>
  ),
)

Link.displayName = 'Link'
