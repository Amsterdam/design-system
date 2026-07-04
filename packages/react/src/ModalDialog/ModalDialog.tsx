/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { DialogHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

import { closeModalDialog, openModalDialog } from './modalDialogActions'
import { ModalDialogBody } from './ModalDialogBody'
import { ModalDialogFooter } from './ModalDialogFooter'
import { ModalDialogHeader } from './ModalDialogHeader'

export type ModalDialogProps = {
  /**
   * Whether the Modal Dialog is open.
   * Opens the dialog through `showModal()` after mounting – the `open` attribute itself is never rendered, because that would make the dialog non-modal.
   * Use the `onClose` event to synchronise your state when the dialog closes itself, e.g. through the Escape key.
   * Leave undefined to control the dialog imperatively, e.g. with `ModalDialog.open`.
   */
  readonly open?: boolean
} & Readonly<PropsWithChildren<Omit<DialogHTMLAttributes<HTMLDialogElement>, 'open'>>>

const ModalDialogRoot = forwardRef(
  ({ children, className, open, ...restProps }: ModalDialogProps, ref: ForwardedRef<HTMLDialogElement>) => {
    const innerRef = useRef<HTMLDialogElement>(null)

    useImperativeHandle(ref, () => innerRef.current as HTMLDialogElement)

    useEffect(() => {
      const dialog = innerRef.current

      if (!dialog || open === undefined) {
        return
      }

      if (open && !dialog.open) {
        dialog.showModal()
      } else if (!open && dialog.open) {
        dialog.close()
      }
    }, [open])

    const ariaLabel = restProps['aria-label']
    const ariaLabelledBy = restProps['aria-labelledby']

    useEffect(() => {
      if (!ariaLabel && !ariaLabelledBy) {
        console.warn(
          'ModalDialog: provide an accessible name. Pass `aria-labelledby` referencing the `id` of the heading in `ModalDialog.Header`.',
        )
      }
    }, [ariaLabel, ariaLabelledBy])

    return (
      <dialog {...restProps} className={clsx('ams-modal-dialog', className)} ref={innerRef}>
        {children}
      </dialog>
    )
  },
)

ModalDialogRoot.displayName = 'ModalDialog'

/**
 * A window over the page that focuses attention on a single task or message. It blocks interaction with the underlying page until it is closed.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-modal-dialog--docs Modal Dialog docs at Amsterdam Design System}
 */
export const ModalDialog = Object.assign(ModalDialogRoot, {
  Body: ModalDialogBody,
  close: closeModalDialog,
  Footer: ModalDialogFooter,
  Header: ModalDialogHeader,
  open: openModalDialog,
})
