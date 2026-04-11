/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ComponentType, ForwardedRef, HTMLAttributes } from 'react'

import { ChevronBackwardIcon, ChevronForwardIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { Icon } from '../Icon'
import { getRange } from './getRange'
import { LinkItem } from './LinkItem'
import { Spacer } from './Spacer'

export type PaginationProps = {
  /** The accessible name for the Pagination component. */
  accessibleName?: string
  /**
   * Connects the component with an internal element that defines its accessible name.
   * Note: must be unique for the page.
   */
  accessibleNameId?: string
  /** The React component to use for the links. */
  linkComponent?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>
  /** The template used to construct the link hrefs. */
  linkTemplate: (page: number) => string
  /** The maximum amount of pages shown. Minimum value: 5. */
  maxVisiblePages?: number
  /** The accessible name for the link to the next page. */
  nextAccessibleName?: string
  /** The visible label for the link to the next page. */
  nextLabel?: string
  /** The current page number. */
  page?: number
  /** The accessible name for the link to the previous page. */
  previousAccessibleName?: string
  /** The visible label for the link to the previous page. */
  previousLabel?: string
  /** The total amount of pages. */
  totalPages: number
} & HTMLAttributes<HTMLElement>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-pagination--docs Pagination docs at Amsterdam Design System}
 */
export const Pagination = forwardRef(
  (
    {
      accessibleName,
      accessibleNameId,
      className,
      linkComponent = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />,
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
        aria-labelledby={accessibleNameId || 'ams-pagination-a11y-label'}
        className={clsx('ams-pagination', className)}
        ref={ref}
      >
        <span className="ams-visually-hidden" id={accessibleNameId || 'ams-pagination-a11y-label'}>
          {accessibleName || 'Paginering'}
        </span>
        {page !== 1 && (
          <Link className="ams-pagination__link" href={linkTemplate(page - 1)} rel="prev">
            <Icon svg={ChevronBackwardIcon} />
            <span className="ams-visually-hidden">{previousAccessibleName || 'Vorige pagina'}</span>
            <span aria-hidden className="ams-pagination__link-label" hidden>
              {previousLabel}
            </span>
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
