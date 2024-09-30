/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { forwardRef } from 'react'
import { Icon } from '../Icon'
import type { PageMenuItemProps } from './PageMenu'

export type PageMenuButtonProps = { icon?: Function } & PageMenuItemProps &
  PropsWithChildren<ButtonHTMLAttributes<Omit<HTMLButtonElement, 'disabled' | 'type'>>>

export const PageMenuButton = forwardRef<HTMLButtonElement, PageMenuButtonProps>(
  ({ children, className, icon, rank, ...restProps }, ref) => (
    <li className={clsx(rank === 'secondary' && 'ams-page-menu__item--secondary')}>
      <button {...restProps} className={clsx('ams-page-menu__button', className)} ref={ref} type="button">
        {children}
        {icon && <Icon svg={icon} size="level-6" />}
      </button>
    </li>
  ),
)

PageMenuButton.displayName = 'PageMenuButton'
