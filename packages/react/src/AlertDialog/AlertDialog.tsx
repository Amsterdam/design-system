/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { DialogHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

import { closeAlertDialog, openAlertDialog } from './alertDialogActions'
import { AlertDialogBody } from './AlertDialogBody'
import { AlertDialogFooter } from './AlertDialogFooter'
import { AlertDialogHeader } from './AlertDialogHeader'

export type AlertDialogProps = {
  /**
   * Whether the Alert Dialog is open, to control it from your application’s state.
   * Leave undefined to open it imperatively with `AlertDialog.open`.
   */
  readonly open?: boolean
} & Readonly<PropsWithChildren<Omit<DialogHTMLAttributes<HTMLDialogElement>, 'open'>>>

const AlertDialogRoot = forwardRef(
  ({ children, className, open, ...restProps }: AlertDialogProps, ref: ForwardedRef<HTMLDialogElement>) => {
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
          'AlertDialog: provide an accessible name. Pass `aria-labelledby` referencing the `id` of the heading in `AlertDialog.Header`.',
        )
      }
    }, [ariaLabel, ariaLabelledBy])

    return (
      // Override the native dialog’s implicit `dialog` role: an Alert Dialog interrupts the user and requires a response.
      <dialog {...restProps} className={clsx('ams-alert-dialog', className)} ref={innerRef} role="alertdialog">
        {children}
      </dialog>
    )
  },
)

AlertDialogRoot.displayName = 'AlertDialog'

/**
 * A window over the page that requires the user to respond before continuing. It blocks interaction with the underlying page and has no close button.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-alert-dialog--docs Alert Dialog docs at Amsterdam Design System}
 */
export const AlertDialog = Object.assign(AlertDialogRoot, {
  Body: AlertDialogBody,
  close: closeAlertDialog,
  Footer: AlertDialogFooter,
  Header: AlertDialogHeader,
  open: openAlertDialog,
})
