/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { ChevronRight } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react'
import { Icon } from '../Icon/Icon'

export type LinkOnBackground = 'default' | 'light' | 'dark'
export type LinkVariant = 'standalone' | 'standaloneBold' | 'inline' | 'inList'

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'placeholder'> {
  variant?: LinkVariant
  onBackground?: LinkOnBackground
}

export const Link = forwardRef(
  (
    { children, href, variant, onBackground, className, ...restProps }: PropsWithChildren<LinkProps>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <a
      href={href}
      {...restProps}
      ref={ref}
      className={clsx(
        'amsterdam-link',
        {
          'amsterdam-link--inline': variant === 'inline',
          'amsterdam-link--standalone-bold': variant === 'standaloneBold',
          'amsterdam-link--in-list': variant === 'inList',
          'amsterdam-link--on-background-light': onBackground === 'light',
          'amsterdam-link--on-background-dark': onBackground === 'dark',
        },
        className,
      )}
    >
      {variant === 'inList' && <Icon svg={ChevronRight} size="level-6" />}
      {children}
    </a>
  ),
)

Link.displayName = 'Link'
