/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type ModalDialogFooterProps = Readonly<PropsWithChildren<HTMLAttributes<HTMLElement>>>

export const ModalDialogFooter = forwardRef(
  ({ children, className, ...restProps }: ModalDialogFooterProps, ref: ForwardedRef<HTMLElement>) => (
    <footer {...restProps} className={clsx('ams-modal-dialog__footer', className)} ref={ref}>
      {children}
    </footer>
  ),
)

ModalDialogFooter.displayName = 'ModalDialog.Footer'
