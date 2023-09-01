/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface PageMenuProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {}

export const PageMenu = forwardRef(
  ({ children, className, ...restProps }: PageMenuProps, ref: ForwardedRef<HTMLElement>) => (
    <span {...restProps} ref={ref} className={clsx('amsterdam-page-menu', className)}>
      {children}
    </span>
  ),
)

PageMenu.displayName = 'PageMenu'
