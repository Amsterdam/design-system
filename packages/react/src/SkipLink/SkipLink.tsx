/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ElementType, ForwardedRef, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type SkipLinkProps = {
  /**
   * The React component or intrinsic element to use for the link.
   * Refs are forwarded only to a plain anchor (the default, or `linkComponent="a"`), not to any other `linkComponent`.
   */
  readonly linkComponent?: ElementType
} & PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

/**
 * Allows skipping past recurring navigation blocks at the top of a page.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-skip-link--docs Skip Link docs at Amsterdam Design System}
 */
export const SkipLink = forwardRef(
  ({ children, className, linkComponent, ...restProps }: SkipLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    const Tag = linkComponent || 'a'

    return (
      <Tag
        {...restProps}
        className={clsx('ams-skip-link', 'ams-visually-hidden', className)}
        {...((!linkComponent || linkComponent === 'a') && { ref })}
      >
        {children}
      </Tag>
    )
  },
)

SkipLink.displayName = 'SkipLink'
