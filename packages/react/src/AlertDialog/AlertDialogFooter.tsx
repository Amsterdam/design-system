/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type AlertDialogFooterProps = Readonly<PropsWithChildren<HTMLAttributes<HTMLElement>>>

/**
 * The footer of an Alert Dialog. It holds the buttons that respond to the message and dismiss the dialog.
 * An Alert Dialog needs at least one action here, as it has no close button.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-alert-dialog--docs Alert Dialog docs at Amsterdam Design System}
 */
export const AlertDialogFooter = forwardRef(
  ({ children, className, ...restProps }: AlertDialogFooterProps, ref: ForwardedRef<HTMLElement>) => (
    <footer {...restProps} className={clsx('ams-alert-dialog__footer', className)} ref={ref}>
      {children}
    </footer>
  ),
)

AlertDialogFooter.displayName = 'AlertDialog.Footer'
