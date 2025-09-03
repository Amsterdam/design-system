/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ComponentType, ForwardedRef, HTMLAttributes } from 'react'

import { ChevronBackwardIcon, ChevronForwardIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef } from 'react'

import { Icon } from '../Icon/Icon'
import { getRange } from './getRange'
import { LinkItem } from './LinkItem'
import { Spacer } from './Spacer'

export type PaginationProps = HTMLAttributes<HTMLElement> & {
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
  /**
   * @deprecated Use `nextAccessibleName` instead.
   * The accessible name for the link to the next page.
   */
  nextVisuallyHiddenLabel?: string
  /** The current page number. */
  page?: number
  /** The accessible name for the link to the previous page. */
  previousAccessibleName?: string
  /** The visible label for the link to the previous page. */
  previousLabel?: string
  /**
   * @deprecated Use `previousAccessibleName` instead.
   * The accessible name for the link to the previous page.
   */
  previousVisuallyHiddenLabel?: string
  /** The total amount of pages. */
  totalPages: number
  /**
   * @deprecated Use `accessibleName` instead.
   * The accessible name for the Pagination component.
   */
  visuallyHiddenLabel?: string
  /**
   * @deprecated Use `accessibleNameId` instead.
   * Connects the component with an internal element that defines its accessible name.
   * Note: must be unique for the page.
   */
  visuallyHiddenLabelId?: string
}

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
      nextVisuallyHiddenLabel,
      page = 1,
      previousAccessibleName,
      previousLabel = 'vorige',
      previousVisuallyHiddenLabel,
      totalPages,
      visuallyHiddenLabel,
      visuallyHiddenLabelId,
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
        aria-labelledby={accessibleNameId || visuallyHiddenLabelId || 'ams-pagination-a11y-label'}
        className={clsx('ams-pagination', className)}
        ref={ref}
      >
        <span
          className="ams-visually-hidden"
          id={accessibleNameId || visuallyHiddenLabelId || 'ams-pagination-a11y-label'}
        >
          {accessibleName || visuallyHiddenLabel || 'Paginering'}
        </span>
        {page !== 1 && (
          <Link className="ams-pagination__link" href={linkTemplate(page - 1)} rel="prev">
            <Icon svg={ChevronBackwardIcon} />
            <span className="ams-visually-hidden">
              {previousAccessibleName || previousVisuallyHiddenLabel || 'Vorige pagina'}
            </span>
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
            <span className="ams-visually-hidden">
              {nextAccessibleName || nextVisuallyHiddenLabel || 'Volgende pagina'}
            </span>
            <span aria-hidden>{nextLabel}</span>
            <Icon svg={ChevronForwardIcon} />
          </Link>
        )}
      </nav>
    )
  },
)

Pagination.displayName = 'Pagination'
