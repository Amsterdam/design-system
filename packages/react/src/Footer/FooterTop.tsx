/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type FooterTopProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const FooterTop = forwardRef(
  ({ children, className, ...restProps }: FooterTopProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('ams-footer__top', className)}>
      {children}
    </div>
  ),
)

FooterTop.displayName = 'Footer.Top'
