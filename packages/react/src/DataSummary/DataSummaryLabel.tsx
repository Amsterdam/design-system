/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type DataSummaryLabelProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

/**
 * The name of the data an item of a Data Summary presents.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-text-data-summary--docs Data Summary docs at Amsterdam Design System}
 */
export const DataSummaryLabel = forwardRef(
  ({ children, className, ...restProps }: DataSummaryLabelProps, ref: ForwardedRef<HTMLElement>) => (
    <dt {...restProps} className={clsx('ams-data-summary__label', className)} ref={ref}>
      {children}
    </dt>
  ),
)

DataSummaryLabel.displayName = 'DataSummary.Label'
