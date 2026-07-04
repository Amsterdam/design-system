/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type ModalDialogFooterProps = Readonly<PropsWithChildren<HTMLAttributes<HTMLElement>>>

/**
 * The footer of a Modal Dialog, holding one or more buttons that conclude its task.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-modal-dialog--docs Modal Dialog docs at Amsterdam Design System}
 */
export const ModalDialogFooter = forwardRef(
  ({ children, className, ...restProps }: ModalDialogFooterProps, ref: ForwardedRef<HTMLElement>) => (
    <footer {...restProps} className={clsx('ams-modal-dialog__footer', className)} ref={ref}>
      {children}
    </footer>
  ),
)

ModalDialogFooter.displayName = 'ModalDialog.Footer'
