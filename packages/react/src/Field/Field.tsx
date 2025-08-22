/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type FieldProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  /** Whether the field has an input with a validation error */
  invalid?: boolean
}

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
