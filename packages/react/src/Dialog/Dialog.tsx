/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { DialogHTMLAttributes, ForwardedRef, PropsWithChildren, ReactNode } from 'react'
import { Heading } from '../Heading'
import { IconButton } from '../IconButton'

export type DialogProps = {
  /** Children for the footer of the dialog, like a save or close button */
  actions?: ReactNode
  /** Label for the close button */
  closeLabel?: string
} & PropsWithChildren<DialogHTMLAttributes<HTMLDialogElement>>

export const Dialog = forwardRef(
  (
    { children, className, title, actions, closeLabel = 'Sluiten', ...restProps }: DialogProps,
    ref: ForwardedRef<HTMLDialogElement>,
  ) => (
    <dialog {...restProps} ref={ref} className={clsx('ams-dialog', className)}>
      <form method="dialog" className="ams-dialog__form">
        <header className="ams-dialog__header">
          <Heading size="level-4">{title}</Heading>
          <IconButton formNoValidate label={closeLabel} size="level-4" />
        </header>
        <article className="ams-dialog__article">{children}</article>
        {actions && <footer className="ams-dialog__footer">{actions}</footer>}
      </form>
    </dialog>
  ),
)

Dialog.displayName = 'Dialog'
