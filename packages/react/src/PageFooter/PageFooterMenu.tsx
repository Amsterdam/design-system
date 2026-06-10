/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { HeadingProps } from '../Heading'

import { getHeadingTag } from '../Heading/getHeadingTag'

export type PageFooterMenuProps = {
  /**
   * Describes the menu for users of assistive technology.
   * The heading gets visually hidden – sighted users can infer the meaning of the menu from its appearance.
   * @default Over deze website
   */
  readonly heading?: string
  /**
   * The hierarchical level of the Footer Menu’s Heading within the document.
   * The default value is 2. This will almost always be correct – but verify this yourself.
   */
  readonly headingLevel?: HeadingProps['level']
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLUListElement>>>

/**
 * The link menu within a Page Footer, with a visually hidden heading for screen readers.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-page-footer--docs Page Footer docs at Amsterdam Design System}
 */
export const PageFooterMenu = forwardRef(
  (
    { children, className, heading = 'Over deze website', headingLevel = 2, ...restProps }: PageFooterMenuProps,
    ref: ForwardedRef<HTMLUListElement>,
  ) => {
    const HeadingTag = getHeadingTag(headingLevel)

    return (
      <>
        <HeadingTag className="ams-visually-hidden">{heading}</HeadingTag>
        <ul {...restProps} className={clsx('ams-page-footer__menu', className)} ref={ref}>
          {children}
        </ul>
      </>
    )
  },
)

PageFooterMenu.displayName = 'PageFooter.Menu'
