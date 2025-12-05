/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { HeadingProps } from '../Heading'

import { Heading } from '../Heading'

export type PageFooterMenuProps = {
  /**
   * Describes the menu for users of assistive technology.
   * The heading gets visually hidden – sighted users can infer the meaning of the menu from its appearance.
   * @default Over deze website
   */
  heading?: string
  /**
   * The hierarchical level of the Footer Menu’s Heading within the document.
   * The default value is 2. This will almost always be correct – but verify this yourself.
   */
  headingLevel?: HeadingProps['level']
} & PropsWithChildren<HTMLAttributes<HTMLUListElement>>

export const PageFooterMenu = forwardRef(
  (
    { children, className, heading = 'Over deze website', headingLevel = 2, ...restProps }: PageFooterMenuProps,
    ref: ForwardedRef<HTMLUListElement>,
  ) => (
    <>
      <Heading className="ams-visually-hidden" level={headingLevel}>
        {heading}
      </Heading>
      <ul {...restProps} className={clsx('ams-page-footer__menu', className)} ref={ref}>
        {children}
      </ul>
    </>
  ),
)

PageFooterMenu.displayName = 'PageFooter.Menu'
