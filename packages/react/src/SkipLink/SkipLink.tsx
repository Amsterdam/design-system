/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'

export type SkipLinkProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-skip-link--docs Skip Link docs at Amsterdam Design System}
 */
export const SkipLink = forwardRef(
  ({ children, className, ...restProps }: SkipLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <a {...restProps} className={clsx('ams-skip-link', 'ams-visually-hidden', className)} ref={ref}>
      {children}
    </a>
  ),
)

SkipLink.displayName = 'SkipLink'
