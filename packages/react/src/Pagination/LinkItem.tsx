/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { PaginationProps } from './Pagination'

type LinkItemProps = {
  readonly currentPage: PaginationProps['page']
  readonly pageNumber: number
} & Readonly<Pick<PaginationProps, 'linkComponent' | 'linkTemplate'>>

export const LinkItem = ({ currentPage, linkComponent, linkTemplate, pageNumber }: LinkItemProps) => {
  if (!linkComponent) return null

  const Link = linkComponent

  return (
    <li>
      <Link
        aria-current={pageNumber === currentPage ? 'page' : undefined}
        className="ams-pagination__link"
        href={linkTemplate(pageNumber)}
      >
        <span className="ams-visually-hidden">{pageNumber === currentPage ? 'Pagina ' : 'Ga naar pagina '}</span>
        {pageNumber}
      </Link>
    </li>
  )
}
