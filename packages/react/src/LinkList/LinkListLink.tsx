/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronForwardIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'
import { Icon } from '../Icon'

export type LinkListLinkProps = {
  /** Changes the text colour for readability on a light or dark background. */
  color?: 'contrast' | 'inverse'
  /** An icon to display instead of the default chevron. Don’t mix custom icons with chevrons in one list. */
  icon?: Function
  /** The size of the text. Use the same size for all items in the list. */
  size?: 'small' | 'large'
} & PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

/** One link with a Link List. */
export const LinkListLink = forwardRef(
  (
    { children, className, color, icon, size, ...restProps }: LinkListLinkProps,
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
          <Icon size={size} svg={icon ?? ChevronForwardIcon} />
          {children}
        </a>
      </li>
    )
  },
)

LinkListLink.displayName = 'LinkList.Link'
