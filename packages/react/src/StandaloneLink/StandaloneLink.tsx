/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronForwardIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef } from 'react'
import { Icon } from '../Icon'

export type StandaloneLinkProps = {
  /** Changes the text colour for readability on a light or dark background. */
  color?: 'contrast' | 'inverse'
  /**
   * The icon to show before the link text.
   * @default ChevronForwardIcon
   */
  icon?: Function
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'placeholder'>

// The `ams-standalone-link--with-icon` class is @deprecated and will be removed in a future release.

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-standalone-link--docs Standalone Link docs at Amsterdam Design System}
 */
export const StandaloneLink = forwardRef(
  (
    { children, className, color, icon = ChevronForwardIcon, ...restProps }: StandaloneLinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <a
      {...restProps}
      className={clsx(
        'ams-standalone-link ams-standalone-link--with-icon',
        color && `ams-standalone-link--${color}`,
        className,
      )}
      ref={ref}
    >
      <Icon svg={icon} />
      {children}
    </a>
  ),
)

StandaloneLink.displayName = 'StandaloneLink'
