/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import {
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
  PropsWithChildren,
  RefAttributes,
} from 'react'

type MegaMenuProps = {
  isOpen?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

interface MegaMenuComponent extends ForwardRefExoticComponent<MegaMenuProps & RefAttributes<HTMLDivElement>> {
  ListCategory: typeof MegaMenuListCategory
}

export const MegaMenu = forwardRef(
  ({ children, className, isOpen, ...restProps }: MegaMenuProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx('amsterdam-mega-menu', isOpen && 'amsterdam-mega-menu--open', className)}
    >
      {children}
    </div>
  ),
) as MegaMenuComponent

const MegaMenuListCategory = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div {...restProps} ref={ref} className={clsx('amsterdam-mega-menu__list-category', className)}>
      {children}
    </div>
  ),
)

MegaMenu.displayName = 'MegaMenu'
MegaMenuListCategory.displayName = 'MegaMenu.ListCategory'
MegaMenu.ListCategory = MegaMenuListCategory
