/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { SearchIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, useId } from 'react'
import { Icon } from '../Icon'
import { VisuallyHidden } from '../VisuallyHidden'

export interface SearchFieldProps extends HTMLAttributes<HTMLFormElement> {}

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

export const SearchField = forwardRef(
  ({ className, ...restProps }: SearchFieldProps, ref: ForwardedRef<HTMLFormElement>) => {
    const id = useId()

    return (
      <form role="search" {...restProps} ref={ref} className={clsx('amsterdam-search-field', className)}>
        <label htmlFor={id}>
          <VisuallyHidden>Zoeken</VisuallyHidden>
        </label>
        <input
          autoComplete="off"
          className="amsterdam-search-field__input"
          enterKeyHint="search"
          id={id}
          placeholder="Wat kunnen we voor u vinden?"
          spellCheck="false"
          type="search"
        />
        <SearchFieldButton />
      </form>
    )
  },
)

SearchField.displayName = 'SearchField'
