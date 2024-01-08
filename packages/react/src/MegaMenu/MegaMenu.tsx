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

type MegaMenuProps = {} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

interface MegaMenuComponent extends ForwardRefExoticComponent<MegaMenuProps & RefAttributes<HTMLDivElement>> {
  ListWrapper: typeof MegaMenuListWrapper
}

export const MegaMenu = forwardRef(
  ({ children, className, ...restProps }: MegaMenuProps, ref: ForwardedRef<HTMLDivElement>) => (
    <nav {...restProps} ref={ref} className={clsx('amsterdam-mega-menu', className)}>
      {children}
    </nav>
  ),
) as MegaMenuComponent

const MegaMenuListWrapper = forwardRef(
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
MegaMenuListWrapper.displayName = 'MegaMenu.ListWrapper'
MegaMenu.ListWrapper = MegaMenuListWrapper
