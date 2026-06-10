/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { DialogHTMLAttributes, ForwardedRef, PropsWithChildren, ReactNode } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useEffect } from 'react'

import { Heading } from '../Heading'
import { IconButton } from '../IconButton'
import { closeDialog, openDialog } from './dialogActions'
import { DialogBody } from './DialogBody'
import { DialogCloseButton } from './DialogCloseButton'
import { DialogFooter } from './DialogFooter'
import { DialogHeader } from './DialogHeader'

export type DialogProps = {
  /**
   * The label for the button that dismisses the Dialog.
   * @deprecated Render `<Dialog.CloseButton label="…">` (or your own button) inside `<Dialog.Header>` instead. Will be removed on or after 2026-11-06.
   */
  readonly closeButtonLabel?: string
  /**
   * Content for the footer, often one Button or an Action Group containing more of them.
   * @deprecated Use `<Dialog.Footer>` instead. Will be removed on or after 2026-11-06.
   */
  readonly footer?: ReactNode
  /**
   * The text for the Heading.
   * @deprecated Use `<Dialog.Header>` with a `<Heading>` child instead. Will be removed on or after 2026-11-06.
   */
  readonly heading?: string
} & Readonly<PropsWithChildren<DialogHTMLAttributes<HTMLDialogElement>>>

const DialogRoot = forwardRef((props: DialogProps, ref: ForwardedRef<HTMLDialogElement>) => {
  const { children, className, closeButtonLabel = 'Sluiten', footer, heading, ...restProps } = props

  useEffect(() => {
    if (heading !== undefined) {
      console.warn('Dialog: the `heading` prop is deprecated. Use `<Dialog.Header>` with a `<Heading>` child instead.')
    }
    if (footer !== undefined) {
      console.warn('Dialog: the `footer` prop is deprecated. Use `<Dialog.Footer>` instead.')
    }
    if (props.closeButtonLabel !== undefined) {
      console.warn('Dialog: the `closeButtonLabel` prop is deprecated. Pass `label` to `<Dialog.CloseButton>` instead.')
    }
    if (heading === undefined && !restProps['aria-labelledby'] && !restProps['aria-label']) {
      console.warn(
        'Dialog: provide an accessible name. Pass `aria-labelledby` referencing the `id` of the heading inside `<Dialog.Header>`.',
      )
    }
  }, [])

  return (
    <dialog {...restProps} className={clsx('ams-dialog', className)} ref={ref}>
      {heading !== undefined && (
        <header className="ams-dialog__header">
          <Heading level={1} size="level-3">
            {heading}
          </Heading>
          <IconButton label={closeButtonLabel} onClick={closeDialog} size="heading-3" type="button" />
        </header>
      )}
      {heading !== undefined ? <div className="ams-dialog__body">{children}</div> : children}
      {footer !== undefined && <footer className="ams-dialog__footer">{footer}</footer>}
    </dialog>
  )
})

DialogRoot.displayName = 'Dialog'

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-dialog--docs Dialog docs at Amsterdam Design System}
 */
export const Dialog = Object.assign(DialogRoot, {
  Body: DialogBody,
  close: closeDialog,
  CloseButton: DialogCloseButton,
  Footer: DialogFooter,
  Header: DialogHeader,
  open: openDialog,
})
