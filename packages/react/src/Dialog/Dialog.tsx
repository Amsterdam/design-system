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
  actions?: ReactNode
} & PropsWithChildren<DialogHTMLAttributes<HTMLDialogElement>>

export const Dialog = forwardRef(
  ({ children, className, title, actions, ...restProps }: DialogProps, ref: ForwardedRef<HTMLDialogElement>) => (
    <dialog {...restProps} ref={ref} className={clsx('amsterdam-dialog', className)}>
      <form method="dialog" className="amsterdam-dialog__form">
        <header className="amsterdam-dialog__header">
          <Heading level={1} size="level-4">
            {title}
          </Heading>
          <IconButton label="Sluiten" formNoValidate />
        </header>
        <article className="amsterdam-dialog__article">{children}</article>
        {actions && <footer className="amsterdam-dialog__footer">{actions}</footer>}
      </form>
    </dialog>
  ),
)

Dialog.displayName = 'Dialog'
