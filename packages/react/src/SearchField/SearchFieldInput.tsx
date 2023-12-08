/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, InputHTMLAttributes, useId } from 'react'
import { VisuallyHidden } from '../VisuallyHidden'

interface SearchFieldInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const SearchFieldInput = forwardRef(
  ({ className, label = 'Zoeken', ...restProps }: SearchFieldInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const id = useId()

    return (
      <>
        <label htmlFor={id}>
          <VisuallyHidden>{label}</VisuallyHidden>
        </label>
        <input
          {...restProps}
          autoComplete="off"
          className={clsx('amsterdam-search-field__input', className)}
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

SearchFieldInput.displayName = 'SearchFieldInput'
