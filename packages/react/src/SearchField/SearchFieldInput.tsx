/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, InputHTMLAttributes } from 'react'

import clsx from 'clsx'
import { forwardRef, useId } from 'react'

type SearchFieldInputProps = InputHTMLAttributes<HTMLInputElement> & {
  /** Whether the value fails a validation rule. */
  invalid?: boolean
  /** Describes the field for screen readers. */
  label?: string
}

export const SearchFieldInput = forwardRef(
  (
    { className, dir, invalid, label = 'Zoeken', ...restProps }: SearchFieldInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const id = useId()

    return (
      <>
        <label className="ams-visually-hidden" htmlFor={id}>
          {label}
        </label>
        <input
          {...restProps}
          aria-invalid={invalid || undefined}
          autoComplete="off"
          className={clsx('ams-search-field__input', className)}
          dir={dir ?? 'auto'}
          enterKeyHint="search"
          id={id}
          ref={ref}
          spellCheck="false"
          type="search"
        />
      </>
    )
  },
)

SearchFieldInput.displayName = 'SearchField.Input'
