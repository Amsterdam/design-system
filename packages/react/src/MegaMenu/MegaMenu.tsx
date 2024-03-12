/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import { MegaMenuListCategory } from './MegaMenuListCategory'

export type MegaMenuProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

type MegaMenuComponent = {
  ListCategory: typeof MegaMenuListCategory
} & ForwardRefExoticComponent<MegaMenuProps & RefAttributes<HTMLDivElement>>

export const MegaMenu = forwardRef(
  ({ children, className, ...restProps }: MegaMenuProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('ams-mega-menu', className)}>
      {children}
    </div>
  ),
) as MegaMenuComponent

MegaMenu.displayName = 'MegaMenu'
MegaMenu.ListCategory = MegaMenuListCategory
