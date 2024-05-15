/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, PropsWithChildren, SelectHTMLAttributes } from 'react'
import { SelectOption } from './SelectOption'
import { SelectOptionGroup } from './SelectOptionGroup'

export type SelectProps = {
  /**
   * Whether the value fails a validation rule.
   * A native `invalid` attribute does not exist for `select`, but you can use this to get the same result as for other form components.
   */
  invalid?: boolean
} & PropsWithChildren<SelectHTMLAttributes<HTMLSelectElement>>

const SelectRoot = forwardRef(
  ({ children, className, invalid, ...restProps }: SelectProps, ref: ForwardedRef<HTMLSelectElement>) => (
    <select
      {...restProps}
      ref={ref}
      className={clsx('ams-select', invalid && 'ams-select--invalid', className)}
      aria-invalid={invalid || undefined}
    >
      {children}
    </select>
  ),
)

SelectRoot.displayName = 'Select'

export const Select = Object.assign(SelectRoot, { Option: SelectOption, Group: SelectOptionGroup })
