/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type ComboBoxProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-TODO-ADD-GROUP-combo-box--docs ComboBox docs at Amsterdam Design System}
 */
export const ComboBox = forwardRef(
  ({ children, className, ...restProps }: ComboBoxProps, ref: ForwardedRef<HTMLElement>) => (
    <span {...restProps} className={clsx('ams-combo-box', className)} ref={ref}>
      {children}
    </span>
  ),
)

ComboBox.displayName = 'ComboBox'
