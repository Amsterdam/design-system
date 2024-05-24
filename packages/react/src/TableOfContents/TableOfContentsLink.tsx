/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { clsx } from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef } from 'react'

export type TableOfContentsLinkProps = {
  label: string
  active?: boolean
} & AnchorHTMLAttributes<HTMLAnchorElement>

export const TableOfContentsLink = forwardRef(
  (
    { children, className, label, active, ...restProps }: TableOfContentsLinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <li className="ams-table-of-contents__item">
      <a
        {...restProps}
        className={clsx('ams-table-of-contents__link', active && 'ams-table-of-contents__link--active', className)}
        ref={ref}
      >
        {label}
      </a>
      {children}
    </li>
  ),
)

TableOfContentsLink.displayName = 'TableOfContents.Link'
