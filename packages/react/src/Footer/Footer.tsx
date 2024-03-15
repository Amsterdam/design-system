/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { FooterBottom } from './FooterBottom'
import { FooterTop } from './FooterTop'

export type FooterProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const FooterRoot = forwardRef(
  ({ children, className, ...restProps }: FooterProps, ref: ForwardedRef<HTMLElement>) => (
    <footer {...restProps} ref={ref} className={clsx('ams-footer', className)}>
      {children}
    </footer>
  ),
)

FooterRoot.displayName = 'Footer'

export const Footer = Object.assign(FooterRoot, { Bottom: FooterBottom, Top: FooterTop })
