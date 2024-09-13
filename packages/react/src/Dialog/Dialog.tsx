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
  /** The button(s) in the footer. Start with a primary button. */
  footer?: ReactNode
  /** The label for the button that dismisses the Dialog. */
  closeButtonLabel?: string
  /** The text for the Heading. */
  heading: string
} & PropsWithChildren<DialogHTMLAttributes<HTMLDialogElement>>

const closeDialog = (event: MouseEvent<HTMLButtonElement>) => event.currentTarget.closest('dialog')?.close()
const openDialog = (id: string) => (document.querySelector(id) as HTMLDialogElement)?.showModal()

const DialogRoot = forwardRef(
  (
    { footer, children, className, closeButtonLabel = 'Sluiten', heading, ...restProps }: DialogProps,
    ref: ForwardedRef<HTMLDialogElement>,
  ) => (
    <dialog {...restProps} ref={ref} className={clsx('ams-dialog', className)}>
      <div className="ams-dialog__wrapper">
        <header className="ams-dialog__header">
          <Heading size="level-4">{heading}</Heading>
          <IconButton label={closeButtonLabel} onClick={closeDialog} size="level-4" type="button" />
        </header>
        <div className="ams-dialog__content">{children}</div>
        {footer && <footer className="ams-dialog__footer">{footer}</footer>}
      </div>
    </dialog>
  ),
)

DialogRoot.displayName = 'Dialog'

export const Dialog = Object.assign(DialogRoot, {
  close: closeDialog,
  open: openDialog,
})
