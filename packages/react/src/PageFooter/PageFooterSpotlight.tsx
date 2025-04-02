/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type PageFooterSpotlightProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const PageFooterSpotlight = forwardRef(
  ({ children, className, ...restProps }: PageFooterSpotlightProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-page-footer__spotlight', className)} ref={ref}>
      {children}
    </div>
  ),
)

PageFooterSpotlight.displayName = 'PageFooter.Spotlight'
