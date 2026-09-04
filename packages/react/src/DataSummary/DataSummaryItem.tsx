/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type DataSummaryItemProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

/**
 * Groups a label with its value, and optionally an action, within a Data Summary.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-text-data-summary--docs Data Summary docs at Amsterdam Design System}
 */
export const DataSummaryItem = forwardRef(
  ({ children, className, ...restProps }: DataSummaryItemProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-data-summary__item', className)} ref={ref}>
      {children}
    </div>
  ),
)

DataSummaryItem.displayName = 'DataSummary.Item'
