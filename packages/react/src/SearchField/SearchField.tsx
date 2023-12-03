/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { SearchIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { ForwardedRef, forwardRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, useId } from 'react'
import { Icon } from '../Icon'
import { VisuallyHidden } from '../VisuallyHidden'

interface SearchFieldInputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string
}

const SearchFieldInput = forwardRef(
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

interface SearchFieldButtonProps extends HTMLAttributes<HTMLButtonElement> {}

// TODO: replace this with IconButton when that's done
const SearchFieldButton = forwardRef(
  ({ className, ...restProps }: SearchFieldButtonProps, ref: ForwardedRef<HTMLButtonElement>) => (
    <button {...restProps} ref={ref} className={clsx('amsterdam-search-field__button', className)}>
      <VisuallyHidden>Zoeken</VisuallyHidden>
      <Icon svg={SearchIcon} size="level-6" />
    </button>
  ),
)

SearchFieldButton.displayName = 'SearchFieldButton'

export interface SearchFieldProps extends PropsWithChildren<HTMLAttributes<HTMLFormElement>> {}

export interface SearchFieldComponent extends ForwardRefExoticComponent<SearchFieldProps> {
  Input: typeof SearchFieldInput
  Button: typeof SearchFieldButton
}

export const SearchField = forwardRef(
  ({ children, className, ...restProps }: SearchFieldProps, ref: ForwardedRef<HTMLFormElement>) => {
    return (
      <form role="search" {...restProps} ref={ref} className={clsx('amsterdam-search-field', className)}>
        {children}
      </form>
    )
  },
) as SearchFieldComponent

SearchField.Input = SearchFieldInput
SearchField.Button = SearchFieldButton
SearchField.displayName = 'SearchField'
SearchField.Input.displayName = 'SearchField.Input'
SearchField.Button.displayName = 'SearchField.Button'
