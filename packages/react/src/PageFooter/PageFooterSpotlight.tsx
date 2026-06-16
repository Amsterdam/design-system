/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type PageFooterSpotlightProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

/**
 * A visually distinct section within a Page Footer for featured content.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-page-footer--docs Page Footer docs at Amsterdam Design System}
 */
export const PageFooterSpotlight = forwardRef(
  ({ children, className, ...restProps }: PageFooterSpotlightProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-page-footer__spotlight', className)} ref={ref}>
      {children}
    </div>
  ),
)

PageFooterSpotlight.displayName = 'PageFooter.Spotlight'
