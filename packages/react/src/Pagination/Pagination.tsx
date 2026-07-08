/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ElementType, ForwardedRef, HTMLAttributes } from 'react'

import { ChevronBackwardIcon, ChevronForwardIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { forwardRef, useId } from 'react'

import { Icon } from '../Icon'
import { Ellipsis } from './Ellipsis'
import { getRange } from './getRange'
import { LinkItem } from './LinkItem'

const DefaultLink = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />

export type PaginationProps = {
  /** The accessible name for the component. */
  readonly accessibleName?: string
  /**
   * Connects the component with an internal element that defines its accessible name.
   * Note: must be unique for the page.
   */
  readonly accessibleNameId?: string
  /** The React component or intrinsic element to use for the links. */
  readonly linkComponent?: ElementType
  /** The template used to construct the link hrefs. */
  readonly linkTemplate: (page: number) => string
  /** The maximum amount of pages shown. Minimum value: 5. */
  readonly maxVisiblePages?: number
  /** The accessible name for the link to the next page. */
  readonly nextAccessibleName?: string
  /** The visible label for the link to the next page. */
  readonly nextLabel?: string
  /** The current page number. */
  readonly page?: number
  /** The accessible name for the link to the previous page. */
  readonly previousAccessibleName?: string
  /** The visible label for the link to the previous page. */
  readonly previousLabel?: string
  /** The total amount of pages. */
  readonly totalPages: number
} & Readonly<HTMLAttributes<HTMLElement>>

/**
 * Navigates between multiple pages of content, indicating the current position in the set.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-pagination--docs Pagination docs at Amsterdam Design System}
 */
export const Pagination = forwardRef(
  (
    {
      accessibleName,
      accessibleNameId,
      className,
      linkComponent = DefaultLink,
      linkTemplate,
      maxVisiblePages = 7,
      nextAccessibleName,
      nextLabel = 'volgende',
      page = 1,
      previousAccessibleName,
      previousLabel = 'vorige',
      totalPages,
      ...restProps
    }: PaginationProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const generatedId = useId()

    // Don't show pagination if you only have one page
    if (totalPages <= 1) {
      return null
    }

    const Link = linkComponent

    // Get array of page numbers and / or ellipses
    const range = getRange(page, totalPages, maxVisiblePages)

    const labelId = accessibleNameId || generatedId

    return (
      <nav {...restProps} aria-labelledby={labelId} className={clsx('ams-pagination', className)} ref={ref}>
        <span className="ams-visually-hidden" id={labelId}>
          {accessibleName || 'Paginering'}
        </span>
        {page !== 1 && (
          <Link className="ams-pagination__link ams-pagination__relative-link" href={linkTemplate(page - 1)} rel="prev">
            <Icon svg={ChevronBackwardIcon} />
            <span className="ams-visually-hidden">{previousAccessibleName || 'Vorige pagina'}</span>
            <span aria-hidden className="ams-pagination__link-label" hidden>
              {previousLabel}
            </span>
          </Link>
        )}
        <ol className="ams-pagination__list">
          {range.map((pageNumberOrEllipsis) =>
            typeof pageNumberOrEllipsis === 'number' ? (
              <LinkItem
                currentPage={page}
                key={pageNumberOrEllipsis}
                linkComponent={linkComponent}
                linkTemplate={linkTemplate}
                pageNumber={pageNumberOrEllipsis}
              />
            ) : (
              <Ellipsis key={pageNumberOrEllipsis} />
            ),
          )}
        </ol>
        {page !== totalPages && (
          <Link className="ams-pagination__link ams-pagination__relative-link" href={linkTemplate(page + 1)} rel="next">
            <span className="ams-visually-hidden">{nextAccessibleName || 'Volgende pagina'}</span>
            <span aria-hidden className="ams-pagination__link-label" hidden>
              {nextLabel}
            </span>
            <Icon svg={ChevronForwardIcon} />
          </Link>
        )}
      </nav>
    )
  },
)

Pagination.displayName = 'Pagination'
