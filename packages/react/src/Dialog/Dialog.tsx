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
  /** Content for the footer, often one Button or an Action Group containing more of them. */
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
    <dialog {...restProps} className={clsx('ams-dialog', className)} ref={ref}>
      <header className="ams-dialog__header">
        <Heading level={1} size="level-3">
          {heading}
        </Heading>
        <IconButton label={closeButtonLabel} onClick={closeDialog} size="heading-3" type="button" />
      </header>
      <div className="ams-dialog__body">{children}</div>
      {footer && <footer className="ams-dialog__footer">{footer}</footer>}
    </dialog>
  ),
)

DialogRoot.displayName = 'Dialog'

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-dialog--docs Dialog docs at Amsterdam Design System}
 */
export const Dialog = Object.assign(DialogRoot, {
  close: closeDialog,
  open: openDialog,
})
