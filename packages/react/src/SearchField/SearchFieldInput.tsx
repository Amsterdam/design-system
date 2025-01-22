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
        <label className="ams-visually-hidden" htmlFor={id}>
          {label}
        </label>
        <input
          {...restProps}
          id={id}
          ref={ref}
          aria-invalid={invalid || undefined}
          autoComplete="off"
          className={clsx('ams-search-field__input', className)}
          dir={dir ?? 'auto'}
          enterKeyHint="search"
          spellCheck="false"
          type="search"
        />
      </>
    )
  },
)

SearchFieldInput.displayName = 'SearchField.Input'
