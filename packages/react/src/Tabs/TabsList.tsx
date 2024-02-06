/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type TabsListProps = {} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const TabsList = forwardRef(
  ({ children, className, ...restProps }: TabsListProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('amsterdam-tabs', className)}>
      {children}
    </div>
  ),
)

TabsList.displayName = 'Tabs.List'
