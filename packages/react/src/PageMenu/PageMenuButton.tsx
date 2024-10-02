/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { forwardRef } from 'react'
import { Icon } from '../Icon'

export type PageMenuButtonProps = {
  icon?: Function
} & PropsWithChildren<ButtonHTMLAttributes<Omit<HTMLButtonElement, 'disabled' | 'type'>>>

export const PageMenuButton = forwardRef<HTMLButtonElement, PageMenuButtonProps>(
  ({ children, className, icon, ...restProps }, ref) => (
    <button {...restProps} className={clsx('ams-page-menu__button', className)} ref={ref} type="button">
      {children}
      {icon && <Icon svg={icon} size="level-6" />}
    </button>
  ),
)

PageMenuButton.displayName = 'PageMenuButton'
