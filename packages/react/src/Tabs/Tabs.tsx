/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import { TabsLink } from './TabsLink'
import { TabsList } from './TabsList'

export type TabsProps = {} & PropsWithChildren<HTMLAttributes<HTMLElement>>

type TabsComponent = {
  List: typeof TabsList
  Link: typeof TabsLink
} & ForwardRefExoticComponent<TabsProps & RefAttributes<HTMLElement>>

export const Tabs = forwardRef(({ children, className, ...restProps }: TabsProps, ref: ForwardedRef<HTMLElement>) => (
  <span {...restProps} ref={ref} className={clsx('amsterdam-tabs', className)}>
    {children}
  </span>
)) as TabsComponent

Tabs.List = TabsList
Tabs.Link = TabsLink
Tabs.displayName = 'Tabs'
