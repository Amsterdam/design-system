/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type FieldProps = {
  /** Whether the field has an input with a validation error */
  hasError?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const Field = forwardRef(
  ({ children, className, hasError, ...restProps }: FieldProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('ams-field', hasError && 'ams-field__has-error', className)}>
      {children}
    </div>
  ),
)

Field.displayName = 'Field'
