/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type FooterSpotlightProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const FooterSpotlight = forwardRef(
  ({ children, className, ...restProps }: FooterSpotlightProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-footer__spotlight', className)} ref={ref}>
      {children}
    </div>
  ),
)

FooterSpotlight.displayName = 'Footer.Spotlight'
