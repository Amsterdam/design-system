/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useEffect, useId, useImperativeHandle, useRef } from 'react'
import type { ForwardedRef, InputHTMLAttributes, PropsWithChildren } from 'react'

export type CheckboxProps = {
  /** Whether the value fails a validation rule. */
  invalid?: boolean
  /** Allows being neither checked nor unchecked. */
  indeterminate?: boolean
} & PropsWithChildren<Omit<InputHTMLAttributes<HTMLInputElement>, 'aria-invalid' | 'type'>>

export const Checkbox = forwardRef(
  (
    { children, className, invalid, indeterminate, ...restProps }: CheckboxProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const id = useId()
    const innerRef = useRef<HTMLInputElement>(null)

    // use a passed ref if it's there, otherwise use innerRef
    useImperativeHandle(ref, () => innerRef.current as HTMLInputElement)

    // set input to indeterminate
    useEffect(() => {
      if (innerRef.current) {
        innerRef.current.indeterminate = Boolean(indeterminate)
      }
    }, [innerRef, indeterminate])

    return (
      // This div is here because NVDA doesn't match the input to the label
      // without a containing element
      <div className={clsx('ams-checkbox', className)}>
        <input
          {...restProps}
          aria-invalid={invalid || undefined}
          className="ams-checkbox__input"
          id={id}
          ref={innerRef}
          type="checkbox"
        />
        <label className="ams-checkbox__label" htmlFor={id}>
          <span className="ams-checkbox__checkmark" />
          {children}
        </label>
      </div>
    )
  },
)

Checkbox.displayName = 'Checkbox'
