/**
 * @license EUPL-1.2+
 * Copyright (c) 2024 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type TextAreaProps = PropsWithChildren<HTMLAttributes<HTMLTextAreaElement>> & {
  resize?: 'horizontal' | 'vertical'
  grow?: boolean
}

export const TextArea = forwardRef(
  ({ children, className, resize, grow, ...restProps }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => (
    <textarea
      {...restProps}
      ref={ref}
      className={clsx(
        'amsterdam-text-area',
        resize && `amsterdam-text-area--resize-${resize}`,
        grow && 'amsterdam-text-area--grow',
        className,
      )}
    >
      {children}
    </textarea>
  ),
)

TextArea.displayName = 'TextArea'
