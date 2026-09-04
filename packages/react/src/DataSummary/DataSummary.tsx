/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { DataSummaryAction } from './DataSummaryAction'
import { DataSummaryItem } from './DataSummaryItem'
import { DataSummaryLabel } from './DataSummaryLabel'
import { DataSummaryValue } from './DataSummaryValue'

export const dataSummaryOrientations = ['horizontal', 'vertical'] as const
type DataSummaryOrientation = (typeof dataSummaryOrientations)[number]

export type DataSummaryProps = {
  /**
   * Whether a label and its value sit side by side in a wide enough container, or always below each other.
   * @default horizontal
   */
  readonly orientation?: DataSummaryOrientation
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLDListElement>>>

const DataSummaryRoot = forwardRef(
  (
    { children, className, orientation = 'horizontal', ...restProps }: DataSummaryProps,
    ref: ForwardedRef<HTMLDListElement>,
  ) => (
    <dl {...restProps} className={clsx('ams-data-summary', `ams-data-summary--${orientation}`, className)} ref={ref}>
      {children}
    </dl>
  ),
)

DataSummaryRoot.displayName = 'DataSummary'

/**
 * An overview of data, presenting each label with its value on a line of its own.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-text-data-summary--docs Data Summary docs at Amsterdam Design System}
 */
export const DataSummary = Object.assign(DataSummaryRoot, {
  Action: DataSummaryAction,
  Item: DataSummaryItem,
  Label: DataSummaryLabel,
  Value: DataSummaryValue,
})
