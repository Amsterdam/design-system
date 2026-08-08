/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { IconProps } from '../Icon'

import { IconButton } from '../IconButton'
import { closeModalDialog } from './modalDialogActions'

export type ModalDialogHeaderProps = {
  /**
   * The accessible name of the button that dismisses the Modal Dialog.
   * Will be announced by screen readers.
   * @default Sluiten
   */
  readonly closeButtonAccessibleName?: string
  /**
   * An icon for the button that dismisses the Modal Dialog, to display instead of the default cross.
   * Websites for the City of Amsterdam must use the default icon.
   */
  readonly closeButtonIcon?: IconProps['svg']
  /**
   * The size of the button that dismisses the Modal Dialog.
   * Match it to the size of the Heading in the Header.
   * @default heading-2
   */
  readonly closeButtonSize?: Extract<IconProps['size'], `heading-${number}`>
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLElement>>>

/**
 * The header of a Modal Dialog. It contains the title and always renders a button that dismisses the dialog.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-modal-dialog--docs Modal Dialog docs at Amsterdam Design System}
 */
export const ModalDialogHeader = forwardRef(
  (
    {
      children,
      className,
      closeButtonAccessibleName = 'Sluiten',
      closeButtonIcon,
      closeButtonSize = 'heading-2',
      ...restProps
    }: ModalDialogHeaderProps,
    ref: ForwardedRef<HTMLElement>,
  ) => (
    <header {...restProps} className={clsx('ams-modal-dialog__header', className)} ref={ref}>
      {children}
      <IconButton
        className="ams-modal-dialog__close-button"
        label={closeButtonAccessibleName}
        onClick={closeModalDialog}
        size={closeButtonSize}
        svg={closeButtonIcon}
        type="button"
      />
    </header>
  ),
)

ModalDialogHeader.displayName = 'ModalDialog.Header'
