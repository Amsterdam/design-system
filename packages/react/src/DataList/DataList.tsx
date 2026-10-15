/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { DataListActions } from './DataListActions'
import { DataListItem } from './DataListItem'
import { DataListKey } from './DataListKey'
import { DataListValue } from './DataListValue'

export const dataListOrientations = ['vertical'] as const
type DataListOrientation = (typeof dataListOrientations)[number]

export type DataListProps = {
  /**
   * Set to vertical to place every value below its key, regardless of the container width. The orientation is horizontal by default and only applies in a wide enough container.
   */
  readonly orientation?: DataListOrientation
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLDListElement>>>

const DataListRoot = forwardRef(
  ({ children, className, orientation, ...restProps }: DataListProps, ref: ForwardedRef<HTMLDListElement>) => (
    <dl
      {...restProps}
      className={clsx('ams-data-list', orientation === 'vertical' && 'ams-data-list--vertical', className)}
      ref={ref}
    >
      {children}
    </dl>
  ),
)

DataListRoot.displayName = 'DataList'

/**
 * An overview of data, presenting each key with its value on a line of its own.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-data-list--docs Data List docs at Amsterdam Design System}
 */
export const DataList = Object.assign(DataListRoot, {
  Actions: DataListActions,
  Item: DataListItem,
  Key: DataListKey,
  Value: DataListValue,
})
