/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, InputHTMLAttributes } from 'react'

export type FileInputProps = InputHTMLAttributes<HTMLInputElement>

export const FileInput = forwardRef(
  ({ className, ...restProps }: FileInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <input {...restProps} ref={ref} className={clsx('ams-file-input', className)} type="file" />
  ),
)

FileInput.displayName = 'FileInput'
