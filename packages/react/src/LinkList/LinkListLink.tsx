/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronRightIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'
import { Icon } from '../Icon'

type BackgroundName = 'default' | 'light' | 'dark'

export type LinkListLinkProps = {
  /** The target url for the link. */
  href: string
  /**
   * An icon to display instead of the default chevron.
   * Don’t mix custom icons with chevrons in one list.
   */
  icon?: Function
  /** Whether the link sits on a dark background. */
  onBackground?: BackgroundName
  /**
   * The text size for the link.
   * Use the same size for all items in the list.
   */
  size?: 'small' | 'large'
} & PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

const iconSizeMap = {
  small: 'level-6',
  medium: 'level-5',
  large: 'level-4',
} as const

/** One link with a Link List. */
export const LinkListLink = forwardRef(
  (
    { children, className, href, icon, onBackground, size, ...restProps }: LinkListLinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    return (
      <li>
        <a
          className={clsx(
            'ams-link-list__link',
            onBackground && `ams-link-list__link--on-background-${onBackground}`,
            size && `ams-link-list__link--${size}`,
            className,
          )}
          href={href}
          ref={ref}
          {...restProps}
        >
          <Icon svg={icon ?? ChevronRightIcon} size={iconSizeMap[size ?? 'medium']} />
          {children}
        </a>
      </li>
    )
  },
)

LinkListLink.displayName = 'LinkList.Link'
