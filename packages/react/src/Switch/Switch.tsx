/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useId } from 'react'
import type { ForwardedRef, InputHTMLAttributes, PropsWithChildren } from 'react'

export type SwitchProps = PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>

export const Switch = forwardRef(
  ({ className, id, ...restProps }: SwitchProps, ref: ForwardedRef<HTMLInputElement>) => {
    const inputId = id || useId()

    return (
      <div className={clsx('ams-switch', className)}>
        <input {...restProps} className="ams-switch__input" id={inputId} ref={ref} type="checkbox" role="switch" />

        <label className="ams-switch__label" htmlFor={inputId}></label>
      </div>
    )
  },
)

Switch.displayName = 'Switch'
