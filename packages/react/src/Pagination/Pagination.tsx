/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronBackwardIcon, ChevronForwardIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ComponentType, ForwardedRef, HTMLAttributes } from 'react'
import { LinkItem } from './LinkItem'
import { Spacer } from './Spacer'
import { getRange } from './getRange'
import { Icon } from '../Icon/Icon'

export type PaginationProps = {
  /** The React component to use for the links. */
  linkComponent?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>
  /** The template used to construct the link hrefs. */
  linkTemplate: (page: number) => string
  /** The maximum amount of pages shown. Minimum value: 5. */
  maxVisiblePages?: number
  /** The visible label for the link to the next page. */
  nextLabel?: string
  /** The accessible name for the link to the next page. */
  nextVisuallyHiddenLabel?: string
  /** The current page number. */
  page?: number
  /** The visible label for the link to the previous page. */
  previousLabel?: string
  /** The accessible name for the link to the previous page. */
  previousVisuallyHiddenLabel?: string
  /** The total amount of pages. */
  totalPages: number
  /** The accessible name for the Pagination component. */
  visuallyHiddenLabel?: string
  /**
   * Connects the component with an internal element that defines its accessible name.
   * Note: must be unique for the page.
   */
  visuallyHiddenLabelId?: string
} & HTMLAttributes<HTMLElement>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-pagination--docs Pagination docs at Amsterdam Design System}
 */
export const Pagination = forwardRef(
  (
    {
      className,
      linkComponent = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />,
      linkTemplate,
      maxVisiblePages = 7,
      nextLabel = 'volgende',
      nextVisuallyHiddenLabel = 'Volgende pagina',
      page = 1,
      previousLabel = 'vorige',
      previousVisuallyHiddenLabel = 'Vorige pagina',
      totalPages,
      visuallyHiddenLabel = 'Paginering',
      visuallyHiddenLabelId = 'ams-pagination-a11y-label',
      ...restProps
    }: PaginationProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    // Don't show pagination if you only have one page
    if (totalPages <= 1) {
      return null
    }

    const Link = linkComponent

    // Get array of page numbers and / or spacers
    const range = getRange(page, totalPages, maxVisiblePages)

    return (
      <nav
        {...restProps}
        aria-labelledby={visuallyHiddenLabelId}
        className={clsx('ams-pagination', className)}
        ref={ref}
      >
        <span className="ams-visually-hidden" id={visuallyHiddenLabelId}>
          {visuallyHiddenLabel}
        </span>
        {page !== 1 && (
          <Link className="ams-pagination__link" href={linkTemplate(page - 1)} rel="prev">
            <Icon svg={ChevronBackwardIcon} />
            <span className="ams-visually-hidden">{previousVisuallyHiddenLabel}</span>
            <span aria-hidden>{previousLabel}</span>
          </Link>
        )}
        <ol className="ams-pagination__list">
          {range.map((pageNumberOrSpacer) =>
            typeof pageNumberOrSpacer === 'number' ? (
              <LinkItem
                currentPage={page}
                key={pageNumberOrSpacer}
                linkComponent={linkComponent}
                linkTemplate={linkTemplate}
                pageNumber={pageNumberOrSpacer}
              />
            ) : (
              <Spacer key={pageNumberOrSpacer} />
            ),
          )}
        </ol>
        {page !== totalPages && (
          <Link className="ams-pagination__link" href={linkTemplate(page + 1)} rel="next">
            <span className="ams-visually-hidden">{nextVisuallyHiddenLabel}</span>
            <span aria-hidden>{nextLabel}</span>
            <Icon svg={ChevronForwardIcon} />
          </Link>
        )}
      </nav>
    )
  },
)

Pagination.displayName = 'Pagination'
