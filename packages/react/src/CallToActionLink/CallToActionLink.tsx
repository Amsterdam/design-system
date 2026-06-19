/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ElementType, ForwardedRef, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type CallToActionLinkProps = {
  /**
   * The React component or intrinsic element to use for the link.
   * Refs are forwarded only to intrinsic elements, not to custom components.
   */
  readonly linkComponent?: ElementType
} & PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

/**
 * A link that stands out visually and encourages the user to take a specific action.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-call-to-action-link--docs CallToActionLink docs at Amsterdam Design System}
 */
export const CallToActionLink = forwardRef(
  (
    { children, className, linkComponent, ...restProps }: CallToActionLinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const Tag = linkComponent || 'a'

    return (
      <Tag
        {...restProps}
        className={clsx('ams-call-to-action-link', className)}
        {...((!linkComponent || typeof linkComponent === 'string') && { ref })}
      >
        {children}
      </Tag>
    )
  },
)

CallToActionLink.displayName = 'CallToActionLink'
