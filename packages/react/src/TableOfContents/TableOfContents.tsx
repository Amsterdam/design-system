/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { TableOfContentsLink } from './TableOfContentsLink'
import { TableOfContentsList } from './TableOfContentsList'
import { Heading } from '../Heading'
import type { HeadingProps } from '../Heading'

export type TableOfContentsProps = {
  /** The text for the Heading. */
  heading?: string
  /**
   * The hierarchical level of the Heading within the document.
   * Note: this intentionally does not change the font size.
   */
  headingLevel?: HeadingProps['level']
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

const TableOfContentsRoot = forwardRef(
  (
    { children, className, heading, headingLevel = 2, ...restProps }: TableOfContentsProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    return (
      <nav {...restProps} className={clsx('ams-table-of-contents', className)} ref={ref}>
        {heading && (
          <Heading className="ams-table-of-contents__heading" level={headingLevel} size="level-4">
            {heading}
          </Heading>
        )}
        {children}
      </nav>
    )
  },
)

TableOfContentsRoot.displayName = 'TableOfContents'

export const TableOfContents = Object.assign(TableOfContentsRoot, {
  Link: TableOfContentsLink,
  List: TableOfContentsList,
})
