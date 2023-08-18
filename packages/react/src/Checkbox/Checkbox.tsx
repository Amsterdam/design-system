/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  PropsWithChildren,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
} from 'react'

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean
  indeterminate?: boolean
}

export const Checkbox = forwardRef(
  (
    { children, className, invalid, indeterminate, ...restProps }: PropsWithChildren<CheckboxProps>,
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
      <div className={clsx('amsterdam-checkbox', className)}>
        <input
          {...restProps}
          type="checkbox"
          className="amsterdam-checkbox__input"
          ref={innerRef}
          id={id}
          aria-invalid={invalid || undefined}
        />
        <label className="amsterdam-checkbox__label" htmlFor={id}>
          <span
            className={clsx(
              'amsterdam-checkbox__label__checkmark',
              invalid && 'amsterdam-checkbox__label__checkmark--invalid',
            )}
          />
          {children}
        </label>
      </div>
    )
  },
)

Checkbox.displayName = 'Checkbox'
