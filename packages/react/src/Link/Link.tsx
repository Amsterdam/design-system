/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef } from 'react'

type LinkOnBackground = 'default' | 'light' | 'dark'
type LinkVariant = 'standalone' | 'inline'

export type LinkProps = {
  /** The background colour on which the link sits. Allows the text to provide visual contrast. */
  onBackground?: LinkOnBackground
  /** Whether the link is inline or stands alone. */
  variant?: LinkVariant
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'placeholder'>

export const Link = forwardRef(
  (
    { children, variant = 'standalone', onBackground, className, ...otherProps }: LinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <a
      {...otherProps}
      ref={ref}
      className={clsx(
        'ams-link',
        {
          'ams-link--standalone': variant === 'standalone',
          'ams-link--inline': variant === 'inline',
          'ams-link--on-background-light': onBackground === 'light',
          'ams-link--on-background-dark': onBackground === 'dark',
        },
        className,
      )}
    >
      {children}
    </a>
  ),
)

Link.displayName = 'Link'
