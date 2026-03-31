/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type TabNavigationListProps = PropsWithChildren<HTMLAttributes<HTMLUListElement>>

export const TabNavigationList = forwardRef(
  ({ children, className, ...restProps }: TabNavigationListProps, ref: ForwardedRef<HTMLUListElement>) => (
    <ul {...restProps} className={clsx('ams-tab-navigation__list', className)} ref={ref}>
      {children}
    </ul>
  ),
)

TabNavigationList.displayName = 'TabNavigation.List'
