/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useId } from 'react'
import type { ForwardedRef, InputHTMLAttributes } from 'react'
import { VisuallyHidden } from '../VisuallyHidden'

type SearchFieldInputProps = {
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

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
          className={clsx('ams-search-field__input', className)}
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
