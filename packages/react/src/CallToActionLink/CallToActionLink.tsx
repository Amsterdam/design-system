/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type CallToActionLinkProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

/**
 * A link that stands out and encourages the user to take action, such as starting to fill in a form.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-call-to-action-link--docs CallToActionLink docs at Amsterdam Design System}
 */
export const CallToActionLink = forwardRef(
  ({ children, className, ...restProps }: CallToActionLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <a {...restProps} className={clsx('ams-call-to-action-link', className)} ref={ref}>
      {children}
    </a>
  ),
)

CallToActionLink.displayName = 'CallToActionLink'
