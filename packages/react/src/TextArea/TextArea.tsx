/**
 * @license EUPL-1.2+
 * Copyright (c) 2024 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type TextAreaProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const TextArea = forwardRef(
  ({ children, className, ...restProps }: TextAreaProps, ref: ForwardedRef<HTMLElement>) => (
    <span {...restProps} ref={ref} className={clsx('amsterdam-text-area', className)}>
      {children}
    </span>
  ),
)

TextArea.displayName = 'TextArea'
