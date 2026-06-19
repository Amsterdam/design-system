/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ElementType, ForwardedRef } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type TableOfContentsLinkProps = {
  /** The text for the link. */
  readonly label: string
  /**
   * The React component to use for the link.
   * Refs are not forwarded to custom link components.
   */
  readonly linkComponent?: ElementType
} & Readonly<AnchorHTMLAttributes<HTMLAnchorElement>>

/**
 * A link to a section of the current page within a Table of Contents.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-table-of-contents--docs Table of Contents docs at Amsterdam Design System}
 */
export const TableOfContentsLink = forwardRef(
  (
    { children, className, label, linkComponent, ...restProps }: TableOfContentsLinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const Tag = linkComponent || 'a'

    return (
      <li className="ams-table-of-contents__item">
        <Tag {...restProps} className={clsx('ams-table-of-contents__link', className)} {...(!linkComponent && { ref })}>
          {label}
        </Tag>
        {children}
      </li>
    )
  },
)

TableOfContentsLink.displayName = 'TableOfContents.Link'
