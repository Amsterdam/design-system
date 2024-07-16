/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'

export type CardLinkProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

export const CardLink = forwardRef(
  ({ children, className, ...restProps }: CardLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <a {...restProps} ref={ref} className={clsx('ams-card__link', className)}>
      {children}
    </a>
  ),
)

CardLink.displayName = 'Card.Link'
