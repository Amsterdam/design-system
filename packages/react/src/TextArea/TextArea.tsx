/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, TextareaHTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type TextAreaProps = {
  /** Whether the value fails a validation rule. */
  invalid?: boolean
  /**
   * Allows the user to resize the text box. The default is resizing in both directions.
   * Note: this feature is not fully supported in Safari on iOS.
   */
  resize?: 'none' | 'horizontal' | 'vertical'
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'aria-invalid'>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-text-area--docs Text Area docs at Amsterdam Design System}
 */
export const TextArea = forwardRef(
  ({ className, dir, invalid, resize, ...restProps }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => (
    <textarea
      {...restProps}
      aria-invalid={invalid || undefined}
      className={clsx(
        'ams-text-area',
        resize && `ams-text-area--resize-${resize}`,
        restProps.cols && 'ams-text-area--cols',
        className,
      )}
      dir={dir ?? 'auto'}
      ref={ref}
    />
  ),
)

TextArea.displayName = 'TextArea'
