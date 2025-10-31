/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'

import { ChevronForwardIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { IconProps } from '../Icon'

import { Icon } from '../Icon'

export const linkListLinkColors = ['contrast', 'inverse'] as const
type LinkListLinkColor = (typeof linkListLinkColors)[number]

export const linkListLinkSizes = ['small', 'large'] as const
type LinkListLinkSize = (typeof linkListLinkSizes)[number]

export type LinkListLinkProps = {
  /** Changes the text colour for readability on a light or dark background. */
  color?: LinkListLinkColor
  /**
   * An icon to display instead of the default chevron.
   * Don’t mix custom icons with chevrons in one list.
   * @default ChevronForwardIcon
   */
  icon?: IconProps['svg']
  /** The size of the text. Use the same size for all items in the list. */
  size?: LinkListLinkSize
} & PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

/** One link with a Link List. */
export const LinkListLink = forwardRef(
  (
    { children, className, color, icon = ChevronForwardIcon, size, ...restProps }: LinkListLinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    return (
      <li>
        <a
          className={clsx(
            'ams-link-list__link',
            color && `ams-link-list__link--${color}`,
            size && `ams-link-list__link--${size}`,
            className,
          )}
          ref={ref}
          {...restProps}
        >
          <Icon size={size} svg={icon} />
          {children}
        </a>
      </li>
    )
  },
)

LinkListLink.displayName = 'LinkList.Link'
