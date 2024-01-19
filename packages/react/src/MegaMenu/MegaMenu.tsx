/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'

export type MegaMenuProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

interface MegaMenuComponent extends ForwardRefExoticComponent<MegaMenuProps & RefAttributes<HTMLDivElement>> {
  ListCategory: typeof MegaMenuListCategory
}

export const MegaMenu = forwardRef(
  ({ children, className, ...restProps }: MegaMenuProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('amsterdam-mega-menu', className)}>
      {children}
    </div>
  ),
) as MegaMenuComponent

const MegaMenuListCategory = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div {...restProps} ref={ref} className={clsx('amsterdam-mega-menu__list-wrapper', className)}>
      {children}
    </div>
  ),
)

MegaMenu.displayName = 'MegaMenu'
MegaMenuListCategory.displayName = 'MegaMenu.ListCategory'
MegaMenu.ListCategory = MegaMenuListCategory
