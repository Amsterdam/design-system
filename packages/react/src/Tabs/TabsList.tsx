/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type TabsListProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const TabsList = forwardRef(
  ({ children, className, ...restProps }: TabsListProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} role="tablist" ref={ref} className={clsx('ams-tabs__list', className)}>
      {children}
    </div>
  ),
)

TabsList.displayName = 'Tabs.List'
