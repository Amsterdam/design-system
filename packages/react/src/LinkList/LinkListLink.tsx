/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronRightIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'
import { Icon } from '../Icon'

type ListLinkLinkContrastColorProp = {
  /** Changes the text colour for readability on a light background. */
  contrastColor?: boolean
  inverseColor?: never
}

type ListLinkLinkInverseColorProp = {
  /** Changes the text colour for readability on a dark background. */
  inverseColor?: boolean
  contrastColor?: never
}

export type LinkListLinkProps = {
  /** An icon to display instead of the default chevron. Don’t mix custom icons with chevrons in one list. */
  icon?: Function
  /** The size of the text. Use the same size for all items in the list. */
  size?: 'small' | 'large'
} & (ListLinkLinkContrastColorProp | ListLinkLinkInverseColorProp) &
  PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

const iconSizeMap = {
  small: 'level-6',
  medium: 'level-5',
  large: 'level-4',
} as const

/** One link with a Link List. */
export const LinkListLink = forwardRef(
  (
    { children, className, icon, contrastColor, inverseColor, size, ...restProps }: LinkListLinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    return (
      <li>
        <a
          className={clsx(
            'ams-link-list__link',
            contrastColor && 'ams-link-list__link--contrast-color',
            inverseColor && 'ams-link-list__link--inverse-color',
            size && `ams-link-list__link--${size}`,
            className,
          )}
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
