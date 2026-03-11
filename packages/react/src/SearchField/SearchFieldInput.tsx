/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, InputHTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useId } from 'react'

type SearchFieldInputProps = {
  /** Whether the value fails a validation rule. */
  invalid?: boolean
  /** Describes the field for screen readers. */
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

export const SearchFieldInput = forwardRef(
  (
    { className, dir, id, invalid, label = 'Zoeken', ...restProps }: SearchFieldInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const inputId = id || useId()

    return (
      <>
        <label className="ams-visually-hidden" htmlFor={inputId}>
          {label}
        </label>
        <input
          aria-invalid={invalid || undefined}
          autoComplete="off"
          className={clsx('ams-search-field__input', className)}
          dir={dir ?? 'auto'}
          enterKeyHint="search"
          id={inputId}
          ref={ref}
          spellCheck="false"
          type="search"
          {...restProps}
        />
      </>
    )
  },
)

SearchFieldInput.displayName = 'SearchField.Input'
