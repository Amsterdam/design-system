/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { type AnchorHTMLAttributes, type ForwardedRef, forwardRef, type PropsWithChildren } from 'react'

export interface SkipLinkProps extends PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> {}

export const SkipLink = forwardRef(
  ({ children, className, ...restProps }: SkipLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <a {...restProps} ref={ref} className={clsx('amsterdam-skip-link', 'amsterdam-visually-hidden', className)}>
      {children}
    </a>
  ),
)

SkipLink.displayName = 'SkipLink'
