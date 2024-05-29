/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, TextareaHTMLAttributes } from 'react'

export type TextAreaProps = {
  /** Whether the value fails a validation rule. */
  invalid?: boolean
  /** Allows the user to resize the text box. The default is resizing in both directions. */
  resize?: 'none' | 'horizontal' | 'vertical'
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'aria-invalid'>

export const TextArea = forwardRef(
  ({ className, dir, invalid, resize, ...restProps }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => (
    <textarea
      {...restProps}
      ref={ref}
      className={clsx(
        'ams-text-area',
        resize && `ams-text-area--resize-${resize}`,
        restProps.cols && 'ams-text-area--cols',
        className,
      )}
      aria-invalid={invalid || undefined}
      dir={dir ?? 'auto'}
    />
  ),
)

TextArea.displayName = 'TextArea'
