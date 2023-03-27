/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { ChevronRight } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren, ReactElement } from 'react'
import { Icon } from './Icon'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'standalone' | 'inList' | 'inline' // TODO: standalone can't have an icon, only inList and inline can. Fix this with type unions?
  icon?: ReactElement
}

export const Link = forwardRef(
  (
    { children, className, icon, variant, ...restProps }: PropsWithChildren<LinkProps>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <a
      ref={ref}
      className={clsx(
        'amsterdam-link',
        variant === 'standalone' && 'amsterdam-link-standalone',
        variant === 'inList' && 'amsterdam-link-inlist',
        variant === 'inline' && 'amsterdam-link-inline',
        className,
      )}
      {...restProps}
    >
      {variant === 'inList' && <Icon size={icon ? 'medium' : 'small'}>{icon ? icon : <ChevronRight />}</Icon>}
      {children}
      {variant === 'inline' && icon && <Icon>{icon}</Icon>}
    </a>
  ),
)

Link.displayName = 'Link'
