/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'

export type SkipLinkProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

export const SkipLink = forwardRef(
  ({ children, className, ...restProps }: SkipLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <a {...restProps} ref={ref} className={clsx('amsterdam-skip-link', 'amsterdam-visually-hidden', className)}>
      {children}
    </a>
  ),
)

SkipLink.displayName = 'SkipLink'
