/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface HeaderProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {}

export const Header = forwardRef(
  ({ children, className, ...restProps }: HeaderProps, ref: ForwardedRef<HTMLElement>) => (
    <span {...restProps} ref={ref} className={clsx('amsterdam-header', className)}>
      {children}
    </span>
  ),
)

Header.displayName = 'Header'
