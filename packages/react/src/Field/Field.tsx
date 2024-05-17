/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type FieldProps = {
  /** Whether the field has an input with a validation error */
  invalid?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const Field = forwardRef(
  ({ children, className, invalid, ...restProps }: FieldProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('ams-field', invalid && 'ams-field--invalid', className)}>
      {children}
    </div>
  ),
)

Field.displayName = 'Field'
