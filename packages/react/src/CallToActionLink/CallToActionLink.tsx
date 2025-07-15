/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'

export type CallToActionLinkProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

/**
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
