/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import { FooterBottom } from './FooterBottom'
import { FooterTop } from './FooterTop'

export type FooterProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

type FooterComponent = {
  Top: typeof FooterTop
  Bottom: typeof FooterBottom
} & ForwardRefExoticComponent<FooterProps & RefAttributes<HTMLElement>>

export const Footer = forwardRef(
  ({ children, className, ...restProps }: FooterProps, ref: ForwardedRef<HTMLElement>) => (
    <footer {...restProps} ref={ref} className={clsx('ams-footer', className)}>
      {children}
    </footer>
  ),
) as FooterComponent

Footer.Top = FooterTop
Footer.Bottom = FooterBottom

Footer.displayName = 'Footer'
Footer.Top.displayName = 'Footer.Top'
Footer.Bottom.displayName = 'Footer.Bottom'
