/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type FooterBottomProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const FooterBottom = forwardRef(
  ({ children, className, ...restProps }: FooterBottomProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('ams-footer__bottom', className)}>
      {children}
    </div>
  ),
)

FooterBottom.displayName = 'Footer.Bottom'
