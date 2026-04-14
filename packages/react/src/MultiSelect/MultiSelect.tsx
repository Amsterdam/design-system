/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type MultiSelectProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-TODO-ADD-GROUP-multi-select--docs MultiSelect docs at Amsterdam Design System}
 */
export const MultiSelect = forwardRef(
  ({ children, className, ...restProps }: MultiSelectProps, ref: ForwardedRef<HTMLElement>) => (
    <span {...restProps} className={clsx('ams-multi-select', className)} ref={ref}>
      {children}
    </span>
  ),
)

MultiSelect.displayName = 'MultiSelect'
