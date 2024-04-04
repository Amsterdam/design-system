/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, PropsWithChildren, SelectHTMLAttributes } from 'react'
import { SelectOption } from './SelectOption'

export type SelectProps = {
  invalid?: boolean
} & PropsWithChildren<SelectHTMLAttributes<HTMLSelectElement>>

const SelectRoot = forwardRef(
  ({ children, className, invalid, ...restProps }: SelectProps, ref: ForwardedRef<HTMLSelectElement>) => (
    <select {...restProps} ref={ref} className={clsx('ams-select', invalid && 'ams-select--invalid', className)}>
      {children}
    </select>
  ),
)

SelectRoot.displayName = 'Select'

export const Select = Object.assign(SelectRoot, { Option: SelectOption })
