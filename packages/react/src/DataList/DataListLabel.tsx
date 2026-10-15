/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type DataListLabelProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

/**
 * The name of the data an item of a Data List presents.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-data-list--docs Data List docs at Amsterdam Design System}
 */
export const DataListLabel = forwardRef(
  ({ children, className, ...restProps }: DataListLabelProps, ref: ForwardedRef<HTMLElement>) => (
    <dt {...restProps} className={clsx('ams-data-list__label', className)} ref={ref}>
      {children}
    </dt>
  ),
)

DataListLabel.displayName = 'DataList.Label'
