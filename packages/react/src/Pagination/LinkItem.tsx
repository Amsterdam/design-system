/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { PaginationProps } from './Pagination'

type LinkItemProps = Pick<PaginationProps, 'linkComponent' | 'linkTemplate'> & {
  currentPage: PaginationProps['page']
  pageNumber: number
}

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
        <span className="ams-visually-hidden">
          {pageNumber === currentPage ? `Pagina ${pageNumber}` : `Ga naar pagina ${pageNumber}`}
        </span>
        <span aria-hidden>{pageNumber}</span>
      </Link>
    </li>
  )
}
