/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { ChevronLeftIcon, ChevronRightIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, useMemo, useState } from 'react'
import { Icon } from '../Icon/Icon'

export interface PaginationProps extends HTMLAttributes<HTMLElement> {
  /**
   * The number of items in your paginated collection.
   *
   * Note that this is not the same as the number of pages, but will be used to calculate it.
   */
  collectionSize: number
  /**
   * Callback triggered when interaction changes the page number.
   */
  // eslint-disable-next-line no-unused-vars
  onPageChange?: (page: number) => void
  /**
   * The current page number.
   */
  page?: number
  /**
   * The number of items per page.
   */
  pageSize?: number
  /**
   * The maximum amount of pages shown. This has a lower limit of 5
   */
  maxVisiblePages?: number
}

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
      collectionSize,
      onPageChange,
      page = 1,
      pageSize = 10,
      maxVisiblePages = 7,
      ...restProps
    }: PaginationProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const [currentPage, setCurrentPage] = useState(page)

    const totalPages = Math.ceil(collectionSize / pageSize)

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

    // Don't show pagination if you only have one page
    if (collectionSize <= pageSize) {
      return null
    }

    return (
      <nav {...restProps} className={clsx('amsterdam-pagination', className)} ref={ref} aria-label="Paginering">
        <ol className="amsterdam-pagination__list">
          <li>
            <button
              aria-label="Vorige pagina"
              className="amsterdam-pagination__button"
              disabled={currentPage === 1}
              onClick={onPrevious}
              type="button"
            >
              <Icon svg={ChevronLeftIcon} size="level-6" />
              vorige
            </button>
          </li>
          {range.map((pageNumberOrSpacer) =>
            typeof pageNumberOrSpacer === 'number' ? (
              <li key={pageNumberOrSpacer}>
                <button
                  aria-current={pageNumberOrSpacer === currentPage ? true : undefined}
                  aria-label={
                    pageNumberOrSpacer === currentPage
                      ? `Pagina ${pageNumberOrSpacer}`
                      : `Ga naar pagina ${pageNumberOrSpacer}`
                  }
                  className={clsx(
                    'amsterdam-pagination__button',
                    pageNumberOrSpacer === currentPage && 'amsterdam-pagination__button--current',
                  )}
                  onClick={() => pageNumberOrSpacer !== currentPage && onChangePage(pageNumberOrSpacer)}
                  tabIndex={pageNumberOrSpacer === currentPage ? -1 : 0}
                  type="button"
                >
                  {pageNumberOrSpacer}
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
              aria-label="Volgende pagina"
              className="amsterdam-pagination__button"
              disabled={currentPage === totalPages}
              onClick={onNext}
              type="button"
            >
              volgende
              <Icon svg={ChevronRightIcon} size="level-6" />
            </button>
          </li>
        </ol>
      </nav>
    )
  },
)

Pagination.displayName = 'Pagination'
