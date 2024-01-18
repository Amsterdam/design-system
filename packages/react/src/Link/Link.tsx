/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { ChevronRightIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'
import { Icon } from '../Icon/Icon'

type LinkOnBackground = 'default' | 'light' | 'dark'
type LinkVariant = 'standalone' | 'inline' | 'inList'

interface CommonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'placeholder'> {
  variant?: LinkVariant
  onBackground?: LinkOnBackground
}

type ConditionalProps =
  | {
      variant?: 'standalone' | 'inline'
      icon?: never
    }
  | {
      variant?: 'inList'
      icon?: Function
    }

export type LinkProps = PropsWithChildren<CommonProps & ConditionalProps>

export const Link = forwardRef(
  (
    { children, variant = 'standalone', icon, onBackground, className, ...otherProps }: LinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <a
      {...otherProps}
      ref={ref}
      className={clsx(
        'amsterdam-link',
        {
          'amsterdam-link--standalone': variant === 'standalone',
          'amsterdam-link--inline': variant === 'inline',
          'amsterdam-link--in-list': variant === 'inList',
          'amsterdam-link--in-list__chevron': variant === 'inList' && !icon,
          'amsterdam-link--on-background-light': onBackground === 'light',
          'amsterdam-link--on-background-dark': onBackground === 'dark',
        },
        className,
      )}
    >
      {variant === 'inList' && <Icon svg={icon ?? ChevronRightIcon} size="level-5" />}
      {children}
    </a>
  ),
)

Link.displayName = 'Link'
