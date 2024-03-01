/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, TextareaHTMLAttributes } from 'react'

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  resize?: 'none' | 'horizontal' | 'vertical'
  grow?: boolean
}

export const TextArea = forwardRef(
  ({ className, resize, grow, ...restProps }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => (
    <textarea
      {...restProps}
      ref={ref}
      className={clsx(
        'amsterdam-text-area',
        resize && `amsterdam-text-area--resize-${resize}`,
        grow && 'amsterdam-text-area--grow',
        restProps.cols && 'amsterdam-text-area--cols',
        className,
      )}
    />
  ),
)

TextArea.displayName = 'TextArea'
