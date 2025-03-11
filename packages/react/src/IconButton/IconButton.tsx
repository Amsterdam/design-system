/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { CloseIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ForwardedRef } from 'react'
import { Icon } from '../Icon'
import type { IconProps } from '../Icon'

export type IconButtonProps = {
  /** Changes the text colour for readability on a light or dark background. */
  color?: 'contrast' | 'inverse'
  /** The accessible text for the button. Will be announced by screen readers. Should describe the button’s action. */
  label: string
  /** The size of the icon. */
  size?: IconProps['size']
  /** The component rendering the icon’s markup. */
  svg?: IconProps['svg']
} & ButtonHTMLAttributes<HTMLButtonElement>

/** @deprecated Use a Button with the iconOnly prop instead. */
export const IconButton = forwardRef(
  (
    { className, color, label, size, svg = CloseIcon, ...restProps }: IconButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => (
    <button
      {...restProps}
      className={clsx('ams-icon-button', color && `ams-icon-button--${color}`, className)}
      ref={ref}
    >
      <span className="ams-visually-hidden">{label}</span>
      <Icon size={size} square svg={svg} />
    </button>
  ),
)

IconButton.displayName = 'IconButton'
