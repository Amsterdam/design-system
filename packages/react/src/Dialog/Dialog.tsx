/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { DialogHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react'
import { IconButton } from '../IconButton'

export interface DialogProps extends PropsWithChildren<DialogHTMLAttributes<HTMLDialogElement>> {
  actions?: ReactNode
}

export const Dialog = forwardRef(
  ({ children, className, title, actions, ...restProps }: DialogProps, ref: ForwardedRef<HTMLDialogElement>) => (
    <dialog {...restProps} ref={ref} className={clsx('amsterdam-dialog', className)}>
      <form method="dialog" className="amsterdam-dialog__form">
        <header className="amsterdam-dialog__header">
          <span className="amsterdam-dialog__title">{title}</span>
          <IconButton label="Sluiten" formNoValidate />
        </header>
        <article className="amsterdam-dialog__article">{children}</article>
        {actions && <footer className="amsterdam-dialog__footer">{actions}</footer>}
      </form>
    </dialog>
  ),
)

Dialog.displayName = 'Dialog'
