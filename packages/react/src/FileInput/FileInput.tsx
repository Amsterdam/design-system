/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, InputHTMLAttributes } from 'react'

export type FileInputProps = InputHTMLAttributes<HTMLInputElement>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-file-input--docs FileInput docs at Amsterdam Design System}
 */
export const FileInput = forwardRef(
  ({ className, ...restProps }: FileInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <input {...restProps} className={clsx('ams-file-input', className)} ref={ref} type="file" />
  ),
)

FileInput.displayName = 'FileInput'
