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

interface FooterHeadingProps extends HTMLAttributes<HTMLDivElement> {
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

/** Renders a heading for screen readers at the top of both Footer sections. */
const FooterHeading = ({ heading, headingLevel }: FooterHeadingProps) => {
  if (!heading) {
    return undefined
  }

  return (
    <VisuallyHidden>
      <Heading level={headingLevel}>{heading}</Heading>
    </VisuallyHidden>
  )
}

FooterHeading.displayName = 'FooterHeading'

export const FooterTop = forwardRef(
  (
    { children, className, heading = 'Colofon', headingLevel = 2, ...restProps }: PropsWithChildren<FooterHeadingProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <>
      <Footer.Heading heading={heading} headingLevel={headingLevel} />
      <PageGrid className={clsx('amsterdam-footer__top', className)} ref={ref} {...restProps}>
        {children}
      </PageGrid>
    </>
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
    { children, className, heading = 'Over deze website', headingLevel = 2 }: PropsWithChildren<FooterHeadingProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div className={clsx('amsterdam-footer__bottom', className)} ref={ref}>
      <Footer.Heading heading={heading} headingLevel={headingLevel} />
      {children}
    </div>
  ),
)

FooterBottom.displayName = 'FooterBottom'

interface FooterComponent
  extends ForwardRefExoticComponent<PropsWithChildren<HTMLAttributes<HTMLElement>> & RefAttributes<HTMLElement>> {
  Bottom: typeof FooterBottom
  Column: typeof FooterColumn
  Heading: typeof FooterHeading
  Top: typeof FooterTop
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
Footer.Heading = FooterHeading

Footer.displayName = 'Footer'
Footer.Top.displayName = 'Footer.Top'
Footer.Bottom.displayName = 'Footer.Bottom'
Footer.Column.displayName = 'Footer.Column'
Footer.Heading.displayName = 'Footer.Heading'
