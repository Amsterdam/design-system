/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type SelectProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const Select = forwardRef(
  ({ children, className, ...restProps }: SelectProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('ams-select', className)}>
      <select>{children}</select>
    </div>
  ),
)

Select.displayName = 'Select'
