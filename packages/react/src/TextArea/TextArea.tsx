/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, TextareaHTMLAttributes } from 'react'

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  /** Allows the user to resize the text box. The default enables resizing in both directions. */
  resize?: 'none' | 'horizontal' | 'vertical'
}

export const TextArea = forwardRef(
  ({ className, resize, ...restProps }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => (
    <textarea
      {...restProps}
      ref={ref}
      className={clsx(
        'ams-text-area',
        resize && `ams-text-area--resize-${resize}`,
        restProps.cols && 'ams-text-area--cols',
        className,
      )}
    />
  ),
)

TextArea.displayName = 'TextArea'
