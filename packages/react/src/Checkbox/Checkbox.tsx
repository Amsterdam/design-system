/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, useId } from 'react'

export const Checkbox = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLInputElement>>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const id = useId()

    return (
      <div>
        <input {...restProps} type="checkbox" className="amsterdam-checkbox__input" ref={ref} id={id} />
        <label className={clsx('amsterdam-checkbox__label', className)} htmlFor={id}>
          <span className="amsterdam-checkbox__label__checkmark" />
          {children}
        </label>
      </div>
    )
  },
)

Checkbox.displayName = 'Checkbox'
