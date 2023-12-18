/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface MegaMenuProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {}

export const MegaMenu = forwardRef(
  ({ children, className, ...restProps }: MegaMenuProps, ref: ForwardedRef<HTMLElement>) => (
    <nav {...restProps} ref={ref} className={clsx('amsterdam-mega-menu', className)}>
      {children}
    </nav>
  ),
)

MegaMenu.displayName = 'MegaMenu'
