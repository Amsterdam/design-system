/**
 * @license EUPL-1.2+
 * Copyright (c) 2024 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export type MegaMenuListCategoryProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const MegaMenuListCategory = forwardRef(
  ({ children, className, ...restProps }: MegaMenuListCategoryProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('amsterdam-mega-menu__list-category', className)}>
      {children}
    </div>
  ),
)

MegaMenuListCategory.displayName = 'MegaMenu.ListCategory'
