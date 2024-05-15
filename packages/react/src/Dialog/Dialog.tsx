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
  /** The list of buttons for this dialog. Start with a primary button. */
  actions?: ReactNode
} & PropsWithChildren<DialogHTMLAttributes<HTMLDialogElement>>

export const Dialog = forwardRef(
  ({ children, className, title, actions, ...restProps }: DialogProps, ref: ForwardedRef<HTMLDialogElement>) => (
    <dialog {...restProps} ref={ref} className={clsx('ams-dialog', className)}>
      <form method="dialog" className="ams-dialog__form">
        <header className="ams-dialog__header">
          <Heading size="level-4">{title}</Heading>
          <IconButton formNoValidate label="Sluiten" size="level-4" />
        </header>
        <article className="ams-dialog__article">{children}</article>
        {actions && <footer className="ams-dialog__footer">{actions}</footer>}
      </form>
    </dialog>
  ),
)

Dialog.displayName = 'Dialog'
