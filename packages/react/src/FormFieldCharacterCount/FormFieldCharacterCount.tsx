/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'

export type FormFieldCharacterCountProps = HTMLAttributes<HTMLDivElement> & {
  /** The current length of the field’s value. */
  length: number
  /** The maximum length of the field’s value. */
  maxLength: number
}

export const FormFieldCharacterCount = forwardRef(
  ({ className, length, maxLength, ...restProps }: FormFieldCharacterCountProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx(
        'ams-form-field-character-count',
        length > maxLength && 'ams-form-field-character-count--error',
        className,
      )}
      role="status"
    >
      {`${length} van ${maxLength} tekens`}
    </div>
  ),
)

FormFieldCharacterCount.displayName = 'FormFieldCharacterCount'
