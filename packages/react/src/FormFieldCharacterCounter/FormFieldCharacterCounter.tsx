/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'

export type FormFieldCharacterCounterProps = HTMLAttributes<HTMLDivElement> & {
  /** The current length of the field’s value. */
  length: number
  /** The maximum length of the field’s value. */
  maxLength: number
}

export const FormFieldCharacterCounter = forwardRef(
  (
    { className, length, maxLength, ...restProps }: FormFieldCharacterCounterProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx(
        'ams-form-field-character-counter',
        length > maxLength && 'ams-form-field-character-counter--error',
        className,
      )}
      role="status"
    >
      {`${length} van ${maxLength} tekens`}
    </div>
  ),
)

FormFieldCharacterCounter.displayName = 'FormFieldCharacterCounter'
