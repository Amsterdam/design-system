/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { CloseIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ForwardedRef } from 'react'
import { Icon } from '../Icon'
import { VisuallyHidden } from '../VisuallyHidden'

export type IconButtonProps = {
  /** The accessible text for the icon. Will be read out by screen readers. Should describe the button’s action. */
  label: string
  /** Describes the underlying background colour. Allows the icon to provide visual contrast. */
  onBackground?: 'light' | 'dark'
  /** The size of the icon. Corresponds with the text levels. */
  size?: 'level-3' | 'level-4' | 'level-5' | 'level-6'
  /** The component rendering the icon’s markup. */
  svg?: Function
} & ButtonHTMLAttributes<HTMLButtonElement>

export const IconButton = forwardRef(
  (
    { className, label, onBackground, size = 'level-5', svg = CloseIcon, ...restProps }: IconButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => (
    <button
      {...restProps}
      ref={ref}
      className={clsx(
        'ams-icon-button',
        onBackground === 'light' && 'ams-icon-button--on-background-light',
        onBackground === 'dark' && 'ams-icon-button--on-background-dark',
        className,
      )}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <Icon svg={svg} size={size} square />
    </button>
  ),
)

IconButton.displayName = 'IconButton'
