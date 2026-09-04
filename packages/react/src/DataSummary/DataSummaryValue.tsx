/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type DataSummaryValueProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

/**
 * The data itself, paired with its label in an item of a Data Summary.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-text-data-summary--docs Data Summary docs at Amsterdam Design System}
 */
export const DataSummaryValue = forwardRef(
  ({ children, className, ...restProps }: DataSummaryValueProps, ref: ForwardedRef<HTMLElement>) => (
    <dd {...restProps} className={clsx('ams-data-summary__value', className)} ref={ref}>
      {children}
    </dd>
  ),
)

DataSummaryValue.displayName = 'DataSummary.Value'
