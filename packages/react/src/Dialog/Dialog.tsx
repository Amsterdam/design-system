/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, MouseEvent } from 'react'
import type { DialogHTMLAttributes, ForwardedRef, PropsWithChildren, ReactNode } from 'react'
import { Heading } from '../Heading'
import { IconButton } from '../IconButton'

export type DialogProps = {
  /** The label for the button that dismisses the Dialog. */
  closeButtonLabel?: string
  /** Content for the footer, often an Action Group with one or more buttons. */
  footer?: ReactNode
  /** The text for the Heading. */
  heading: string
} & PropsWithChildren<DialogHTMLAttributes<HTMLDialogElement>>

const closeDialog = (event: MouseEvent<HTMLButtonElement>) => event.currentTarget.closest('dialog')?.close()
const openDialog = (id: string) => (document.querySelector(id) as HTMLDialogElement)?.showModal()

const DialogRoot = forwardRef(
  (
    { children, className, closeButtonLabel = 'Sluiten', footer, heading, ...restProps }: DialogProps,
    ref: ForwardedRef<HTMLDialogElement>,
  ) => (
    <dialog {...restProps} ref={ref} className={clsx('ams-dialog', className)}>
      <header className="ams-dialog__header">
        <Heading size="level-4">{heading}</Heading>
        <IconButton label={closeButtonLabel} onClick={closeDialog} size="level-4" type="button" />
      </header>
      <div className="ams-dialog__body">{children}</div>
      {footer && <footer className="ams-dialog__footer">{footer}</footer>}
    </dialog>
  ),
)

DialogRoot.displayName = 'Dialog'

export const Dialog = Object.assign(DialogRoot, {
  close: closeDialog,
  open: openDialog,
})
