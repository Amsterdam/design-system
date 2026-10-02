/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type DataListValueProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

/**
 * The data itself, paired with its label in an item of a Data List.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-data-list--docs Data List docs at Amsterdam Design System}
 */
export const DataListValue = forwardRef(
  ({ children, className, ...restProps }: DataListValueProps, ref: ForwardedRef<HTMLElement>) => (
    <dd {...restProps} className={clsx('ams-data-list__value', className)} ref={ref}>
      {children}
    </dd>
  ),
)

DataListValue.displayName = 'DataList.Value'
