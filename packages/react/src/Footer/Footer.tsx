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
import { Heading } from '../Heading'
import { HeadingLevel } from '../Heading/Heading'
import { VisuallyHidden } from '../VisuallyHidden'

export const FooterTop = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <PageGrid {...restProps} ref={ref} className={clsx('amsterdam-footer__top', className)}>
      {children}
    </PageGrid>
  ),
)

FooterTop.displayName = 'FooterTop'

export type FooterColumnProps = HTMLAttributes<HTMLDivElement> & GridCellProps

export const FooterColumn = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<FooterColumnProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <GridCell {...restProps} ref={ref} className={clsx('amsterdam-footer__column', className)}>
      {children}
    </GridCell>
  ),
)

FooterColumn.displayName = 'FooterColumn'

interface FooterBottomProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Describes the scope of the footer menu to users of assistive technologies.
   * @default 'Over deze website'
   */
  heading?: string
  /**
   * The hierarchical level of the heading.
   * @default 2
   */
  headingLevel?: HeadingLevel
}

export const FooterBottom = forwardRef(
  (
    { children, className, heading = 'Over deze website', headingLevel = 2 }: PropsWithChildren<FooterBottomProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div ref={ref} className={clsx('amsterdam-footer__bottom', className)}>
      {!!heading && (
        <VisuallyHidden>
          <Heading level={headingLevel}>{heading}</Heading>
        </VisuallyHidden>
      )}
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
    <footer {...restProps} ref={ref} className={clsx('amsterdam-footer', className)}>
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
