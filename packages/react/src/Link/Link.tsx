/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Link as CommunityLink } from '@utrecht/component-library-react'
import clsx from 'clsx'
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react'

export type LinkColor = 'default' | 'black' | 'white'

export type LinkVariant = 'default' | 'bold' | 'inline'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean
  color?: LinkColor
  variant?: LinkVariant
}

export const Link = forwardRef(
  (
    { children, href, placeholder, variant, color, className, ...restProps }: PropsWithChildren<LinkProps>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <CommunityLink
      href={placeholder ? undefined : href}
      {...restProps}
      ref={ref}
      className={clsx(
        'amsterdam-link',
        {
          'amsterdam-link--inline': variant === 'inline',
          'amsterdam-link--bold': variant === 'bold',
          'amsterdam-link--color-white': color === 'white',
          'amsterdam-link--color-black': color === 'black',
        },
        className,
      )}
    >
      {children}
    </CommunityLink>
  ),
)

Link.displayName = 'Link'
