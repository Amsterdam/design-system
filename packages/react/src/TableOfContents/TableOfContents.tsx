/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { HeadingProps } from '../Heading'

import { Heading } from '../Heading'
import { TableOfContentsLink } from './TableOfContentsLink'
import { TableOfContentsList } from './TableOfContentsList'

export type TableOfContentsProps = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
  /** The text for the Heading. */
  heading?: string
  /**
   * The hierarchical level of the Heading within the document.
   * Visually, it always has the size of a level 3 Heading.
   */
  headingLevel?: HeadingProps['level']
}

// The 'ams-table-of-contents__heading' class is @deprecated and will be removed in a future release.

const TableOfContentsRoot = forwardRef(
  (
    { children, className, heading, headingLevel = 2, ...restProps }: TableOfContentsProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    return (
      <nav {...restProps} className={clsx('ams-table-of-contents', className)} ref={ref}>
        {heading && (
          <Heading className="ams-table-of-contents__heading" level={headingLevel} size="level-3">
            {heading}
          </Heading>
        )}
        {children}
      </nav>
    )
  },
)

TableOfContentsRoot.displayName = 'TableOfContents'

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-table-of-contents--docs Table Of Contents docs at Amsterdam Design System}
 */
export const TableOfContents = Object.assign(TableOfContentsRoot, {
  Link: TableOfContentsLink,
  List: TableOfContentsList,
})
