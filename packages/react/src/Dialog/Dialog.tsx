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
  /** The button(s) in the footer. Start with a primary button. */
  actions?: ReactNode
  /** The label for the button that dismisses the Dialog. */
  closeButtonLabel?: string
} & PropsWithChildren<DialogHTMLAttributes<HTMLDialogElement>>

export const Dialog = forwardRef(
  (
    { actions, children, className, closeButtonLabel = 'Sluiten', title, ...restProps }: DialogProps,
    ref: ForwardedRef<HTMLDialogElement>,
  ) => (
    <dialog {...restProps} ref={ref} className={clsx('ams-dialog', className)}>
      <form method="dialog" className="ams-dialog__form">
        <header className="ams-dialog__header">
          <Heading size="level-4">{title}</Heading>
          <IconButton formNoValidate label={closeButtonLabel} size="level-4" />
        </header>
        <article className="ams-dialog__article">{children}</article>
        {actions && <footer className="ams-dialog__footer">{actions}</footer>}
      </form>
    </dialog>
  ),
)

Dialog.displayName = 'Dialog'
