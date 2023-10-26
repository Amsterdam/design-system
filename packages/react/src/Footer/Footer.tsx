/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import {
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
  PropsWithChildren,
  RefAttributes,
} from 'react'
import { GridCell, GridCellProps, PageGrid } from '../Grid'

export const FooterTop = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <PageGrid className={clsx('amsterdam-footer__top', className)} ref={ref} {...restProps}>
      {children}
    </PageGrid>
  ),
)

FooterTop.displayName = 'FooterTop'

export type FooterColumnProps = HTMLAttributes<HTMLDivElement> & GridCellProps

export const FooterColumn = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<FooterColumnProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <GridCell className={clsx('amsterdam-footer__column', className)} ref={ref} {...restProps}>
      {children}
    </GridCell>
  ),
)

FooterColumn.displayName = 'FooterColumn'

export const FooterBottom = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div className={clsx('amsterdam-footer__bottom', className)} ref={ref} {...restProps}>
      {children}
    </div>
  ),
)

FooterBottom.displayName = 'FooterBottom'

interface FooterComponent
  extends ForwardRefExoticComponent<PropsWithChildren<HTMLAttributes<HTMLElement>> & RefAttributes<HTMLElement>> {
  Top: typeof FooterTop
  Bottom: typeof FooterBottom
  Column: typeof FooterColumn
}

export const Footer = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLElement>>,
    ref: ForwardedRef<HTMLElement>,
  ) => (
    <footer className={clsx('amsterdam-footer', className)} ref={ref} {...restProps}>
      {children}
    </footer>
  ),
) as FooterComponent

Footer.Top = FooterTop
Footer.Bottom = FooterBottom
Footer.Column = FooterColumn

Footer.displayName = 'Footer'
Footer.Top.displayName = 'Footer.Top'
Footer.Bottom.displayName = 'Footer.Bottom'
Footer.Column.displayName = 'Footer.Column'
