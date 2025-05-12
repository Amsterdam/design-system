/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { SearchFieldButton } from './SearchFieldButton'
import { SearchFieldInput } from './SearchFieldInput'

export type SearchFieldProps = PropsWithChildren<HTMLAttributes<HTMLFormElement>>

const SearchFieldRoot = forwardRef(
  ({ children, className, ...restProps }: SearchFieldProps, ref: ForwardedRef<HTMLFormElement>) => {
    return (
      <form role="search" {...restProps} className={clsx('ams-search-field', className)} ref={ref}>
        {children}
      </form>
    )
  },
)

SearchFieldRoot.displayName = 'SearchField'

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-search-field--docs SearchField docs at Amsterdam Design System}
 */
export const SearchField = Object.assign(SearchFieldRoot, { Button: SearchFieldButton, Input: SearchFieldInput })
