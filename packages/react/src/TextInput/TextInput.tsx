/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface TextInputProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {}

export const TextInput = forwardRef(
  ({ children, className, ...restProps }: TextInputProps, ref: ForwardedRef<HTMLElement>) => (
    <span {...restProps} ref={ref} className={clsx('amsterdam-text-input', className)}>
      {children}
    </span>
  ),
)

TextInput.displayName = 'TextInput'
