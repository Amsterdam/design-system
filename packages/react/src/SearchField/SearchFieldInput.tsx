/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useId } from 'react'
import type { ForwardedRef, InputHTMLAttributes } from 'react'

type SearchFieldInputProps = {
  /** Whether the value fails a validation rule. */
  invalid?: boolean
  /** Describes the field for screen readers. */
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

export const SearchFieldInput = forwardRef(
  (
    { className, dir, invalid, label = 'Zoeken', ...restProps }: SearchFieldInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const id = useId()

    return (
      <>
        <label htmlFor={id} className="ams-visually-hidden">
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
