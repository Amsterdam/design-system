/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef } from 'react'

type LinkVariant = 'standalone' | 'inline'

export type LinkProps = {
  /** Changes the text colour for readability on a light background. */
  contrastColor?: boolean
  /** Changes the text colour for readability on a dark background. */
  inverseColor?: boolean
  /** Whether the link is inline or stands alone. */
  variant?: LinkVariant
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'placeholder'>

export const Link = forwardRef(
  (
    { children, className, contrastColor, inverseColor, variant = 'standalone', ...restProps }: LinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <a
      {...restProps}
      ref={ref}
      className={clsx(
        'ams-link',
        contrastColor && 'ams-link--contrast-color',
        inverseColor && 'ams-link--inverse-color',
        variant === 'inline' && 'ams-link--inline',
        variant === 'standalone' && 'ams-link--standalone',
        className,
      )}
    >
      {children}
    </a>
  ),
)

Link.displayName = 'Link'
