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
  /** Whether the value fails a validation rule. */
  invalid?: boolean
} & PropsWithChildren<Omit<SelectHTMLAttributes<HTMLSelectElement>, 'aria-invalid'>>

const SelectRoot = forwardRef(
  ({ children, className, invalid, ...restProps }: SelectProps, ref: ForwardedRef<HTMLSelectElement>) => (
    <select {...restProps} aria-invalid={invalid || undefined} className={clsx('ams-select', className)} ref={ref}>
      {children}
    </select>
  ),
)

SelectRoot.displayName = 'Select'

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-select--docs|Select docs at Amsterdam Design System}
 */
export const Select = Object.assign(SelectRoot, { Group: SelectOptionGroup, Option: SelectOption })
