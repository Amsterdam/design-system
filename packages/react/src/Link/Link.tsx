/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef } from 'react'

type LinkVariant = 'standalone' | 'inline'

type LinkContrastColorProp = {
  /** Changes the text colour for readability on a light background. */
  contrastColor?: boolean
  inverseColor?: never
}

type LinkInverseColorProp = {
  /** Changes the text colour for readability on a dark background. */
  inverseColor?: boolean
  contrastColor?: never
}

export type LinkProps = {
  /** Whether the link is inline or stands alone. */
  variant?: LinkVariant
} & (LinkContrastColorProp | LinkInverseColorProp) &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'placeholder'>

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
