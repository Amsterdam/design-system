/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { ChevronRight } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react'
import { Icon } from './Icon/Icon'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'standalone' | 'inList' | 'inline' // TODO: standalone can't have an icon, only inList and inline can. Fix this with type unions?
  icon?: Function
}

export const Link = forwardRef(
  (
    { children, className, variant, icon, ...restProps }: PropsWithChildren<LinkProps>,
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
      {variant === 'inList' && <Icon svg={icon ? icon : ChevronRight} size={icon ? 'level-3' : 'level-4'} />}
      {children}
      {variant === 'inline' && icon && <Icon svg={icon} />}
    </a>
  ),
)

Link.displayName = 'Link'
