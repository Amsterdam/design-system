/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { ChevronRight } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react'
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

export type LinkProps = CommonProps & ConditionalProps

export const Link = forwardRef(
  (
    { children, variant, icon, onBackground, className, ...otherProps }: PropsWithChildren<LinkProps>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <a
      {...otherProps}
      ref={ref}
      className={clsx(
        'amsterdam-link',
        {
          'amsterdam-link--inline': variant === 'inline',
          'amsterdam-link--in-list': variant === 'inList',
          'amsterdam-link--in-list__chevron': variant === 'inList' && !icon,
          'amsterdam-link--on-background-light': onBackground === 'light',
          'amsterdam-link--on-background-dark': onBackground === 'dark',
        },
        className,
      )}
    >
      {variant === 'inList' && <Icon svg={icon ? icon : ChevronRight} size="level-7" />}
      {children}
    </a>
  ),
)

Link.displayName = 'Link'
