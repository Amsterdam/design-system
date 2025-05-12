/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef } from 'react'
import { Icon } from '../Icon'

export type StandaloneLinkProps = {
  /** Changes the text colour for readability on a light or dark background. */
  color?: 'contrast' | 'inverse'
  /** Adds an icon to the link, showing it before the link text. */
  icon?: Function
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'placeholder'>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-standalone-link--docs StandaloneLink docs at Amsterdam Design System}
 */
export const StandaloneLink = forwardRef(
  ({ children, className, color, icon, ...restProps }: StandaloneLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <a
      {...restProps}
      className={clsx(
        'ams-standalone-link',
        color && `ams-standalone-link--${color}`,
        icon && 'ams-standalone-link--with-icon',
        className,
      )}
      ref={ref}
    >
      {icon && <Icon svg={icon} />}
      {children}
    </a>
  ),
)

StandaloneLink.displayName = 'StandaloneLink'
