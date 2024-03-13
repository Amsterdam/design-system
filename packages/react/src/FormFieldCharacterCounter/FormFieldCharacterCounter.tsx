/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'

export type FormFieldCharacterCounterProps = HTMLAttributes<HTMLDivElement> & {
  label: string
}

export const FormFieldCharacterCounter = forwardRef(
  ({ className, label, ...restProps }: FormFieldCharacterCounterProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('ams-form-field-character-counter', className)} role="status">
      {label}
    </div>
  ),
)

FormFieldCharacterCounter.displayName = 'FormFieldCharacterCounter'
