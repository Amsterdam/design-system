/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type DialogFooterProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const DialogFooter = forwardRef(
  ({ children, className, ...restProps }: DialogFooterProps, ref: ForwardedRef<HTMLElement>) => (
    <footer {...restProps} className={clsx('ams-dialog__footer', className)} ref={ref}>
      {children}
    </footer>
  ),
)

DialogFooter.displayName = 'Dialog.Footer'
