import { ForwardedRef, forwardRef } from 'react'
import { LinkList, LinkListLinkProps } from '../LinkList'

export const HeaderSecondaryLinkListLink = forwardRef(
  ({ children, ...restProps }: LinkListLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <LinkList.Link {...restProps} ref={ref}>
      {children}
    </LinkList.Link>
  ),
)

HeaderSecondaryLinkListLink.displayName = 'Header.SecondaryLinkListLink'
