/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { SearchFieldButton } from './SearchFieldButton'
import { SearchFieldContext } from './SearchFieldContext'
import { SearchFieldInput } from './SearchFieldInput'

export type SearchFieldProps = {
  /** Whether the Input and Button are unavailable. Each of them can override this. */
  readonly disabled?: boolean
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLFormElement>>>

const SearchFieldRoot = forwardRef(
  ({ children, className, disabled, ...restProps }: SearchFieldProps, ref: ForwardedRef<HTMLFormElement>) => {
    return (
      <SearchFieldContext.Provider value={{ disabled }}>
        <form role="search" {...restProps} className={clsx('ams-search-field', className)} ref={ref}>
          {children}
        </form>
      </SearchFieldContext.Provider>
    )
  },
)

SearchFieldRoot.displayName = 'SearchField'

/**
 * Combines a text input and a submit button for searching page or site content.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-search-field--docs Search Field docs at Amsterdam Design System}
 */
export const SearchField = Object.assign(SearchFieldRoot, { Button: SearchFieldButton, Input: SearchFieldInput })
