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
  actions?: ReactNode
  /** The label for the button that dismisses the Dialog. */
  closeButtonLabel?: string
  /** The text for the Heading. */
  heading: string
} & PropsWithChildren<DialogHTMLAttributes<HTMLDialogElement>>

export const closeDialog = (event: MouseEvent<HTMLButtonElement>) => event.currentTarget.closest('dialog')?.close()

export const openDialog = (id: string) => (document.querySelector(id) as HTMLDialogElement)?.showModal()

export const Dialog = forwardRef(
  (
    { actions, children, className, closeButtonLabel = 'Sluiten', heading, ...restProps }: DialogProps,
    ref: ForwardedRef<HTMLDialogElement>,
  ) => (
    <dialog {...restProps} ref={ref} className={clsx('ams-dialog', className)}>
      <form className="ams-dialog__form" method="dialog">
        <header className="ams-dialog__header">
          <Heading size="level-4">{heading}</Heading>
          <IconButton label={closeButtonLabel} onClick={closeDialog} size="level-4" type="button" />
        </header>
        <article className="ams-dialog__article">{children}</article>
        {actions && <footer className="ams-dialog__footer">{actions}</footer>}
      </form>
    </dialog>
  ),
)

Dialog.displayName = 'Dialog'
