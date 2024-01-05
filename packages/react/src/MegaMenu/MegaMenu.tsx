/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface MegaMenuProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  isOpen?: boolean
}

export const MegaMenu = forwardRef(
  ({ children, className, isOpen, ...restProps }: MegaMenuProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <nav
        {...restProps}
        ref={ref}
        className={clsx('amsterdam-mega-menu', isOpen && 'amsterdam-mega-menu--open', className)}
      >
        {children}
      </nav>
    )
  },
)

MegaMenu.displayName = 'MegaMenu'
