/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { CloseIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { DialogHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { VisuallyHidden } from '../VisuallyHidden'

export interface DialogProps extends PropsWithChildren<DialogHTMLAttributes<HTMLDialogElement>> {}

const DialogClose = forwardRef(({ ...restProps }, ref: ForwardedRef<HTMLButtonElement>) => (
  <button {...restProps} ref={ref} className="amsterdam-dialog__close">
    <VisuallyHidden>Sluiten</VisuallyHidden>
    <Icon svg={CloseIcon} size="level-5" />
  </button>
))

export const Dialog = forwardRef(
  ({ children, className, ...restProps }: DialogProps, ref: ForwardedRef<HTMLDialogElement>) => (
    <dialog {...restProps} ref={ref} className={clsx('amsterdam-dialog', className)}>
      <form method="dialog" className="amsterdam-dialog__form">
        <header className="amsterdam-dialog__header">
          <span className="amsterdam-dialog__title">Dialog</span>
          <DialogClose />
        </header>
        <article className="amsterdam-dialog__article">{children}</article>
        <footer className="amsterdam-dialog__footer">
          <Button type="submit">Submit</Button>
        </footer>
      </form>
    </dialog>
  ),
)

Dialog.displayName = 'Dialog'
DialogClose.displayName = 'DialogClose'
