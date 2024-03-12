/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import { SearchFieldButton } from './SearchFieldButton'
import { SearchFieldInput } from './SearchFieldInput'

export type SearchFieldProps = PropsWithChildren<HTMLAttributes<HTMLFormElement>>

type SearchFieldComponent = {
  Input: typeof SearchFieldInput
  Button: typeof SearchFieldButton
} & ForwardRefExoticComponent<SearchFieldProps & RefAttributes<HTMLFormElement>>

export const SearchField = forwardRef(
  ({ children, className, ...restProps }: SearchFieldProps, ref: ForwardedRef<HTMLFormElement>) => {
    return (
      <form role="search" {...restProps} ref={ref} className={clsx('ams-search-field', className)}>
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
