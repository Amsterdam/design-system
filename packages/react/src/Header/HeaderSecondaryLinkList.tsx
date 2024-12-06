import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import { LinkList, LinkListProps } from '../LinkList'

export const HeaderSecondaryLinkList = forwardRef(
  ({ children, className, ...restProps }: LinkListProps, ref: ForwardedRef<HTMLUListElement>) => (
    <LinkList {...restProps} className={clsx('ams-header__secondary-link-list', className)} ref={ref}>
      {children}
    </LinkList>
  ),
)

HeaderSecondaryLinkList.displayName = 'Header.SecondaryLinkList'
