/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export type MegaMenuListCategoryProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const MegaMenuListCategory = forwardRef(
  ({ children, className, ...restProps }: MegaMenuListCategoryProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-mega-menu__list-category', className)} ref={ref}>
      {children}
    </div>
  ),
)

MegaMenuListCategory.displayName = 'MegaMenu.ListCategory'
