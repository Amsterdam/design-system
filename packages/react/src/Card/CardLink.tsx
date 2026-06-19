/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ElementType, ForwardedRef, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type CardLinkProps = {
  /**
   * The React component to use for the link.
   * Refs are not forwarded to custom link components.
   */
  readonly linkComponent?: ElementType
} & PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

/**
 * The link within a Card that makes the heading and card area navigable.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-card--docs Card docs at Amsterdam Design System}
 */
export const CardLink = forwardRef(
  ({ children, className, linkComponent, ...restProps }: CardLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    const Tag = linkComponent || 'a'

    return (
      <Tag {...restProps} className={clsx('ams-card__link', className)} {...(!linkComponent && { ref })}>
        {children}
      </Tag>
    )
  },
)

CardLink.displayName = 'Card.Link'
