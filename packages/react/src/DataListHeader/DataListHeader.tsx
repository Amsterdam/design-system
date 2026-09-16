/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type DataListHeaderProps = Readonly<PropsWithChildren<HTMLAttributes<HTMLDivElement>>>

/**
 * Introduces a Data List with a heading and, optionally, one action, and separates it from the list with a line.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-data-list--docs Data List docs at Amsterdam Design System}
 */
export const DataListHeader = forwardRef(
  ({ children, className, ...restProps }: DataListHeaderProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-data-list-header', className)} ref={ref}>
      {children}
    </div>
  ),
)

DataListHeader.displayName = 'DataListHeader'
