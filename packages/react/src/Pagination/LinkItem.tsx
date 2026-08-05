/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { PaginationProps } from './Pagination'

type LinkItemProps = {
  readonly currentPage: PaginationProps['page']
  readonly pageNumber: number
} & Readonly<
  Pick<PaginationProps, 'currentPageAccessibleName' | 'linkComponent' | 'linkTemplate' | 'pageAccessibleName'>
>

export const LinkItem = ({
  currentPage,
  currentPageAccessibleName,
  linkComponent,
  linkTemplate,
  pageAccessibleName,
  pageNumber,
}: LinkItemProps) => {
  if (!linkComponent) return null

  const Link = linkComponent

  const accessibleNamePrefix =
    pageNumber === currentPage ? currentPageAccessibleName || 'Pagina' : pageAccessibleName || 'Ga naar pagina'

  return (
    <li>
      <Link
        aria-current={pageNumber === currentPage ? 'page' : undefined}
        className="ams-pagination__link"
        href={linkTemplate(pageNumber)}
      >
        <span className="ams-visually-hidden">{`${accessibleNamePrefix} `}</span>
        {pageNumber}
      </Link>
    </li>
  )
}
