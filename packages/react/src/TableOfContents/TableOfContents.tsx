/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useEffect } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { TableOfContentsLink } from './TableOfContentsLink'

export type TableOfContentsProps = {
  title?: string
  startLevel?: 'h1' | 'h2' | 'h3'
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const TableOfContentsRoot = forwardRef(
  (
    { children, className, startLevel, title, ...restProps }: TableOfContentsProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    useEffect(() => {
      const observer =
        startLevel &&
        new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const id = entry.target.getAttribute('id')
              if (entry.intersectionRatio > 0) {
                document.querySelector(`nav a[href="#${id}"]`)?.classList.add('ams-table-of-contents__link--active')
              } else {
                document.querySelector(`nav a[href="#${id}"]`)?.classList.remove('ams-table-of-contents__link--active')
              }
            })
          },
          { threshold: 0 },
        )

      document.querySelectorAll(`${startLevel}[id]`).forEach((section) => {
        observer?.observe(section)
      })
    }, [startLevel])

    return (
      <nav {...restProps} ref={ref} className={clsx('ams-table-of-contents', className)}>
        {title && <div className="ams-table-of-contents__title">{title}</div>}
        <ol className="ams-table-of-contents__list">{children}</ol>
      </nav>
    )
  },
)

TableOfContentsRoot.displayName = 'TableOfContents'

export const TableOfContents = Object.assign(TableOfContentsRoot, { Link: TableOfContentsLink })
