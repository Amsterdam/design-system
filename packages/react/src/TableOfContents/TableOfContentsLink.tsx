/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { clsx } from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef } from 'react'

type BackgroundName = 'default' | 'light' | 'dark'

export type TableOfContentsLinkProps = {
  label: string
  /** Describes the underlying background colour. Allows the text to provide visual contrast. */
  onBackground?: BackgroundName
} & AnchorHTMLAttributes<HTMLAnchorElement>

export const TableOfContentsLink = forwardRef(
  (
    { children, className, label, onBackground, ...restProps }: TableOfContentsLinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <li className="ams-table-of-contents__item">
      <a
        {...restProps}
        className={clsx(
          'ams-table-of-contents__link',
          onBackground && `ams-table-of-contents__link--on-background-${onBackground}`,
          className,
        )}
        ref={ref}
      >
        {label}
      </a>
      {children}
    </li>
  ),
)

TableOfContentsLink.displayName = 'TableOfContents.Link'
