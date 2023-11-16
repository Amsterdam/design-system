/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { CloseIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { DialogHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react'
import { Icon } from '../Icon'
import { VisuallyHidden } from '../VisuallyHidden'

export interface DialogProps extends PropsWithChildren<DialogHTMLAttributes<HTMLDialogElement>> {
  actions?: ReactNode
}

const DialogClose = forwardRef(({ ...restProps }, ref: ForwardedRef<HTMLButtonElement>) => (
  <button role="close" aria-label="close" ref={ref} className="amsterdam-dialog__close" formNoValidate {...restProps}>
    <VisuallyHidden>Sluiten</VisuallyHidden>
    <Icon svg={CloseIcon} size="level-5" />
  </button>
))

export const Dialog = forwardRef(
  ({ children, className, title, actions, ...restProps }: DialogProps, ref: ForwardedRef<HTMLDialogElement>) => (
    <dialog {...restProps} ref={ref} className={clsx('amsterdam-dialog', className)}>
      <form method="dialog" className="amsterdam-dialog__form">
        <header className="amsterdam-dialog__header">
          <span className="amsterdam-dialog__title">{title}</span>
          <DialogClose />
        </header>
        <article className="amsterdam-dialog__article">{children}</article>
        {actions && <footer className="amsterdam-dialog__footer">{actions}</footer>}
      </form>
    </dialog>
  ),
)

Dialog.displayName = 'Dialog'
DialogClose.displayName = 'DialogClose'
