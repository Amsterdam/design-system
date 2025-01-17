/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronLeftIcon, ChevronRightIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ComponentType, ForwardedRef, HTMLAttributes } from 'react'
import { getRange } from './getRange'
import { Icon } from '../Icon/Icon'

export type PaginationProps = {
  /** The id of the accessible label. */
  id?: string
  /** The React component to use for the links. */
  linkComponent?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>
  /** The template used to construct the link hrefs. */
  linkTemplate: (page: number) => string
  /** The maximum amount of pages shown. Minimum value: 5. */
  maxVisiblePages?: number
  /** The visible label for the next page-link. */
  nextLabel?: string
  /** The accessible name for the next page-link. */
  nextVisuallyHiddenLabel?: string
  /** The current page number. */
  page?: number
  /** The visible label for the previous page-link. */
  previousLabel?: string
  /** The accessible name for the previous page-link. */
  previousVisuallyHiddenLabel?: string
  /** The total amount of pages. */
  totalPages: number
  /** The accessible name for the Pagination component. */
  visuallyHiddenLabel?: string
} & HTMLAttributes<HTMLElement>

export const Pagination = forwardRef(
  (
    {
      linkComponent = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />,
      className,
      id = 'ams-pagination',
      linkTemplate,
      maxVisiblePages = 7,
      nextLabel = 'volgende',
      nextVisuallyHiddenLabel = 'Volgende pagina',
      page = 1,
      previousLabel = 'vorige',
      previousVisuallyHiddenLabel = 'Vorige pagina',
      totalPages,
      visuallyHiddenLabel = 'Paginering',
      ...restProps
    }: PaginationProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const Link = linkComponent

    // Get array of page numbers and / or spacers
    const range = getRange(page, totalPages, maxVisiblePages)

    // Don't show pagination if you only have one page
    if (totalPages <= 1) {
      return null
    }

    return (
      <nav {...restProps} aria-labelledby={id} className={clsx('ams-pagination', className)} ref={ref}>
        <span id={id} className="ams-visually-hidden">
          {visuallyHiddenLabel}
        </span>
        {page !== 1 && (
          <Link className="ams-pagination__link" href={linkTemplate(page - 1)} rel="prev">
            <Icon svg={ChevronLeftIcon} size="level-5" />
            <span className="ams-visually-hidden">{previousVisuallyHiddenLabel}</span>
            <span aria-hidden>{previousLabel}</span>
          </Link>
        )}
        <ol className="ams-pagination__list">
          {range.map((pageNumberOrSpacer) =>
            typeof pageNumberOrSpacer === 'number' ? (
              <li key={pageNumberOrSpacer}>
                <Link
                  aria-current={pageNumberOrSpacer === page ? 'page' : undefined}
                  className="ams-pagination__link"
                  href={linkTemplate(pageNumberOrSpacer)}
                >
                  <span className="ams-visually-hidden">
                    {pageNumberOrSpacer === page
                      ? `Pagina ${pageNumberOrSpacer}`
                      : `Ga naar pagina ${pageNumberOrSpacer}`}
                  </span>
                  <span aria-hidden>{pageNumberOrSpacer}</span>
                </Link>
              </li>
            ) : (
              <li key={pageNumberOrSpacer} aria-hidden data-testid={pageNumberOrSpacer}>
                {'\u2026'}
              </li>
            ),
          )}
        </ol>
        {page !== totalPages && (
          <Link className="ams-pagination__link" href={linkTemplate(page + 1)} rel="next">
            <span className="ams-visually-hidden">{nextVisuallyHiddenLabel}</span>
            <span aria-hidden>{nextLabel}</span>
            <Icon svg={ChevronRightIcon} size="level-5" />
          </Link>
        )}
      </nav>
    )
  },
)

Pagination.displayName = 'Pagination'
