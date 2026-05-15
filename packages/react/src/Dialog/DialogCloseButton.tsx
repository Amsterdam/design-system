/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef } from 'react'

import { forwardRef } from 'react'

import type { IconButtonProps } from '../IconButton'

import { IconButton } from '../IconButton'
import { closeDialog } from './dialogActions'

export type DialogCloseButtonProps = Omit<IconButtonProps, 'label'> & Partial<Pick<IconButtonProps, 'label'>>

export const DialogCloseButton = forwardRef(
  (
    {
      label = 'Sluiten',
      onClick = closeDialog,
      size = 'heading-3',
      type = 'button',
      ...restProps
    }: DialogCloseButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => <IconButton {...restProps} label={label} onClick={onClick} ref={ref} size={size} type={type} />,
)

DialogCloseButton.displayName = 'Dialog.CloseButton'
