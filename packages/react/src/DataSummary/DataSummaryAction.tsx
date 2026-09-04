/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type DataSummaryActionProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

/**
 * The slot for the link or button that acts on the value of an item of a Data Summary.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-text-data-summary--docs Data Summary docs at Amsterdam Design System}
 */
export const DataSummaryAction = forwardRef(
  ({ children, className, ...restProps }: DataSummaryActionProps, ref: ForwardedRef<HTMLElement>) => (
    <dd {...restProps} className={clsx('ams-data-summary__action', className)} ref={ref}>
      {children}
    </dd>
  ),
)

DataSummaryAction.displayName = 'DataSummary.Action'
