/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type DialogBodyProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const DialogBody = forwardRef(
  ({ children, className, ...restProps }: DialogBodyProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-dialog__body', className)} ref={ref}>
      {children}
    </div>
  ),
)

DialogBody.displayName = 'Dialog.Body'
