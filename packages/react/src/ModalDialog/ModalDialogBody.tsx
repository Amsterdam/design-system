/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type ModalDialogBodyProps = Readonly<PropsWithChildren<HTMLAttributes<HTMLDivElement>>>

export const ModalDialogBody = forwardRef(
  ({ children, className, ...restProps }: ModalDialogBodyProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-modal-dialog__body', className)} ref={ref}>
      {children}
    </div>
  ),
)

ModalDialogBody.displayName = 'ModalDialog.Body'
