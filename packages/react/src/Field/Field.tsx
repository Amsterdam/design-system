/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { ErrorMessage } from '../ErrorMessage'
import { Label } from '../Label'

export type FieldProps = {
  /** Whether the field has an input with a validation error */
  invalid?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const FieldRoot = forwardRef(
  ({ children, className, invalid, ...restProps }: FieldProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('ams-field', invalid && 'ams-field--invalid', className)}>
      {children}
    </div>
  ),
)

FieldRoot.displayName = 'Field'

export const Field = Object.assign(FieldRoot, { ErrorMessage: ErrorMessage, Label: Label })

Field.ErrorMessage.displayName = 'Field.ErrorMessage'
Field.Label.displayName = 'Field.Label'
