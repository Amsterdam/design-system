/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { forwardRef } from 'react'

export type PageMenuButtonProps = PropsWithChildren<ButtonHTMLAttributes<Omit<HTMLButtonElement, 'disabled' | 'type'>>>

export const PageMenuButton = forwardRef<HTMLButtonElement, PageMenuButtonProps>(
  ({ children, className, ...restProps }, ref) => (
    <button {...restProps} className={clsx('ams-page-menu__button', className)} ref={ref} type="button">
      {children}
    </button>
  ),
)

PageMenuButton.displayName = 'PageMenuButton'
