/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type DataListItemProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

/**
 * Groups a label with its value, and optionally one or more actions, within a Data List.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-data-list--docs Data List docs at Amsterdam Design System}
 */
export const DataListItem = forwardRef(
  ({ children, className, ...restProps }: DataListItemProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-data-list__item', className)} ref={ref}>
      {children}
    </div>
  ),
)

DataListItem.displayName = 'DataList.Item'
