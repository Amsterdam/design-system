/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef } from 'react'

type LinkOnBackground = 'default' | 'light' | 'dark'
type LinkVariant = 'standalone' | 'inline'

export type LinkProps = {
  variant?: LinkVariant
  onBackground?: LinkOnBackground
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
        'amsterdam-link',
        {
          'amsterdam-link--standalone': variant === 'standalone',
          'amsterdam-link--inline': variant === 'inline',
          'amsterdam-link--on-background-light': onBackground === 'light',
          'amsterdam-link--on-background-dark': onBackground === 'dark',
        },
        className,
      )}
    >
      {children}
    </a>
  ),
)

Link.displayName = 'Link'
