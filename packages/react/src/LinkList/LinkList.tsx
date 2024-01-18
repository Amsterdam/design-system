/**
 * @license EUPL-1.2+
 * Copyright (c) 2024 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface LinkListProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {}

export const LinkList = forwardRef(
  ({ children, className, ...restProps }: LinkListProps, ref: ForwardedRef<HTMLElement>) => (
    <span {...restProps} ref={ref} className={clsx('amsterdam-link-list', className)}>
      {children}
    </span>
  ),
)

LinkList.displayName = 'LinkList'
