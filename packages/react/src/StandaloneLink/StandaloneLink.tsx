/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ElementType, ForwardedRef } from 'react'

import { ChevronForwardIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { IconProps } from '../Icon'

import { Icon } from '../Icon'

export type StandaloneLinkProps = {
  /** Changes the text colour for readability on a light or dark background. */
  readonly color?: 'contrast' | 'inverse'
  /**
   * The icon to show before the link text.
   * @default ChevronForwardIcon
   */
  readonly icon?: IconProps['svg']
  /**
   * The React component or intrinsic element to use for the link.
   * Refs are forwarded only to intrinsic elements, not to custom components.
   */
  readonly linkComponent?: ElementType
} & Readonly<Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'placeholder'>>

/**
 * A navigation element that is separated from the text around it.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-standalone-link--docs Standalone Link docs at Amsterdam Design System}
 */
export const StandaloneLink = forwardRef(
  (
    { children, className, color, icon = ChevronForwardIcon, linkComponent, ...restProps }: StandaloneLinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const Tag = linkComponent || 'a'

    return (
      <Tag
        {...restProps}
        className={clsx('ams-standalone-link', color && `ams-standalone-link--${color}`, className)}
        {...((!linkComponent || typeof linkComponent === 'string') && { ref })}
      >
        <Icon svg={icon} />
        {children}
      </Tag>
    )
  },
)

StandaloneLink.displayName = 'StandaloneLink'
