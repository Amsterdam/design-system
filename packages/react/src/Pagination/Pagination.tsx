/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronLeftIcon, ChevronRightIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef, useId, useMemo, useState } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'
import { Icon } from '../Icon/Icon'

export type PaginationProps = {
  /** The maximum amount of pages shown. Minimum value: 5. */
  maxVisiblePages?: number
  /** The visible label for the next page-button. */
  nextLabel?: string
  /** The accessible name for the next page-button. */
  nextVisuallyHiddenLabel?: string
  /** A function to run when the page number changes. */
  onPageChange?: (page: number) => void
  /** The current page number. */
  page?: number
  /** The visible label for the previous page-button. */
  previousLabel?: string
  /** The accessible name for the previous page-button. */
  previousVisuallyHiddenLabel?: string
  /** The total amount of pages. */
  totalPages: number
  /** The accessible name for the Pagination component. */
  visuallyHiddenLabel?: string
} & HTMLAttributes<HTMLElement>

/**
 * This returns an array of the range, including spacers
 *
 * @example
 * currentPage = 4, totalPages = 7, maxVisiblePages = 7
 * // returns [1, 2, 3, 4, 5, 6, 7]
 *
 * @example
 * currentPage = 5, totalPages = 100, maxVisiblePages = 7
 * // returns [1, 'firstSpacer', 4, 5, 6, 'lastSpacer', 100]
 *
 * @example
 * currentPage = 97, totalPages = 100, maxVisiblePages = 7
 * // returns [1, 'firstSpacer', 96, 97, 98, 99, 100]
 */

function getRange(currentPage: number, totalPages: number, maxVisiblePages: number): Array<string | number> {
  // the total amount of visible pages is whatever's lower, totalPages or maxVisiblePages
  // maxVisiblePages has a lower limit of 5
  const visiblePages = Math.min(totalPages, Math.max(maxVisiblePages, 5))

  const min = 1
  // the center part of the range starts with the current page minus half of the visible pages
  let centerStartPage = currentPage - Math.floor(visiblePages / 2)
  // centerStartPage has a lower limit of 1
  centerStartPage = Math.max(centerStartPage, min)
  // centerStartPage has an upper limit of 1 plus total pages minus visible pages
  centerStartPage = Math.min(centerStartPage, min + totalPages - visiblePages)

  const pages = Array.from({ length: visiblePages }, (_el, i) => centerStartPage + i).reduce<Array<string | number>>(
    (acc, pageNr, index) => {
      if (index === 0 && pageNr !== 1) {
        return [1, 'firstSpacer']
      }

      if (totalPages > visiblePages && index === visiblePages - 2 && currentPage < totalPages - 2) {
        return [...acc, 'lastSpacer', totalPages]
      }
      // Skip a number when spacer is already added
      if ((acc.includes('firstSpacer') && index === 1) || (acc.includes('lastSpacer') && index === visiblePages - 1)) {
        return acc
      }
      return [...acc, pageNr]
    },
    [],
  )

  return pages
}

export const Pagination = forwardRef(
  (
    {
      className,
      maxVisiblePages = 7,
      nextLabel = 'volgende',
      nextVisuallyHiddenLabel = 'Volgende pagina',
      onPageChange,
      page = 1,
      previousLabel = 'vorige',
      previousVisuallyHiddenLabel = 'Vorige pagina',
      totalPages,
      visuallyHiddenLabel = 'Paginering',
      ...restProps
    }: PaginationProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const [currentPage, setCurrentPage] = useState(page)

    // Get array of page numbers and / or spacers
    const range = useMemo(
      () => getRange(currentPage, totalPages, maxVisiblePages),
      [currentPage, totalPages, maxVisiblePages],
    )

    const onChangePage = (newPage: number) => {
      if (onPageChange !== undefined) {
        onPageChange(newPage)
      }
      setCurrentPage(newPage)
    }

    const onPrevious = () => {
      onChangePage(currentPage - 1)
    }

    const onNext = () => {
      onChangePage(currentPage + 1)
    }

    const navLabelId = useId()

    // Don't show pagination if you only have one page
    if (totalPages <= 1) {
      return null
    }

    return (
      <nav {...restProps} ref={ref} aria-labelledby={navLabelId} className={clsx('ams-pagination', className)}>
        <span id={navLabelId} className="ams-visually-hidden">
          {visuallyHiddenLabel}
        </span>
        <ol className="ams-pagination__list">
          <li>
            <button className="ams-pagination__button" disabled={currentPage === 1} type="button" onClick={onPrevious}>
              <Icon size="level-5" svg={ChevronLeftIcon} />
              <span className="ams-visually-hidden">{previousVisuallyHiddenLabel}</span>
              <span aria-hidden>{previousLabel}</span>
            </button>
          </li>
          {range.map((pageNumberOrSpacer) =>
            typeof pageNumberOrSpacer === 'number' ? (
              <li key={pageNumberOrSpacer}>
                <button
                  aria-current={pageNumberOrSpacer === currentPage ? true : undefined}
                  className={clsx(
                    'ams-pagination__button',
                    pageNumberOrSpacer === currentPage && 'ams-pagination__button--current',
                  )}
                  tabIndex={pageNumberOrSpacer === currentPage ? -1 : 0}
                  type="button"
                  onClick={() => pageNumberOrSpacer !== currentPage && onChangePage(pageNumberOrSpacer)}
                >
                  <span className="ams-visually-hidden">
                    {pageNumberOrSpacer === currentPage
                      ? `Pagina ${pageNumberOrSpacer}`
                      : `Ga naar pagina ${pageNumberOrSpacer}`}
                  </span>
                  <span aria-hidden>{pageNumberOrSpacer}</span>
                </button>
              </li>
            ) : (
              <li key={pageNumberOrSpacer} aria-hidden data-testid={pageNumberOrSpacer}>
                {'\u2026'}
              </li>
            ),
          )}
          <li>
            <button
              className="ams-pagination__button"
              disabled={currentPage === totalPages}
              type="button"
              onClick={onNext}
            >
              <span className="ams-visually-hidden">{nextVisuallyHiddenLabel}</span>
              <span aria-hidden>{nextLabel}</span>
              <Icon size="level-5" svg={ChevronRightIcon} />
            </button>
          </li>
        </ol>
      </nav>
    )
  },
)

Pagination.displayName = 'Pagination'
