/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type TabsPanelProps = {} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const TabsPanel = forwardRef(
  ({ children, className, ...restProps }: TabsPanelProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('amsterdam-tabs__panel', className)}>
      {children}
    </div>
  ),
)

TabsPanel.displayName = 'Tabs.Panel'
