/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type FieldProps = {
  /** Whether the field has an input with a validation error */
  invalid?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-field--docs Field docs at Amsterdam Design System}
 */
export const Field = forwardRef(
  ({ children, className, invalid, ...restProps }: FieldProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-field', invalid && 'ams-field--invalid', className)} ref={ref}>
      {children}
    </div>
  ),
)

Field.displayName = 'Field'
