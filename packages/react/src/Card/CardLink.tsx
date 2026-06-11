/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type CardLinkProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

/**
 * The link within a Card that makes the heading and card area navigable.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-card--docs Card docs at Amsterdam Design System}
 */
export const CardLink = forwardRef(
  ({ children, className, ...restProps }: CardLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <a {...restProps} className={clsx('ams-card__link', className)} ref={ref}>
      {children}
    </a>
  ),
)

CardLink.displayName = 'Card.Link'
