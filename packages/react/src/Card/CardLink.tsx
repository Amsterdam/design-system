/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'

export type CardLinkProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

export const CardLink = forwardRef(
  ({ children, className, ...otherProps }: CardLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <a {...otherProps} ref={ref} className={clsx('ams-card__link', className)}>
      {children}
    </a>
  ),
)

CardLink.displayName = 'CardLink'
