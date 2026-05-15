/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type DialogHeaderProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const DialogHeader = forwardRef(
  ({ children, className, ...restProps }: DialogHeaderProps, ref: ForwardedRef<HTMLElement>) => (
    <header {...restProps} className={clsx('ams-dialog__header', className)} ref={ref}>
      {children}
    </header>
  ),
)

DialogHeader.displayName = 'Dialog.Header'
