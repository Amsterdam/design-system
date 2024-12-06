import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import { Grid } from '../Grid'
import { LinkList, LinkListProps } from '../LinkList'

export const HeaderSecondaryLinkList = forwardRef(
  ({ children, className, ...restProps }: LinkListProps, ref: ForwardedRef<HTMLUListElement>) => (
    <Grid.Cell span="all" className={clsx('ams-header__secondary-link-list', className)}>
      <LinkList {...restProps} ref={ref}>
        {children}
      </LinkList>
    </Grid.Cell>
  ),
)

HeaderSecondaryLinkList.displayName = 'Header.SecondaryLinkList'
