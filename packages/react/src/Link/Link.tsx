/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Link as CommunityLink } from '@utrecht/component-library-react'
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  placeholder?: string
  external?: boolean
  rel?: string
  target?: string
}

export const Link = forwardRef(
  (
    { children, href, placeholder, ...restProps }: PropsWithChildren<LinkProps>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <CommunityLink href={placeholder ? undefined : href} {...restProps} ref={ref}>
      {children}
    </CommunityLink>
  ),
)

Link.displayName = 'Link'
