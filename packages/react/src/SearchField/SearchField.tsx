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
      <form role="search" {...restProps} ref={ref} className={clsx('ams-search-field', className)}>
        {children}
      </form>
    )
  },
)

SearchFieldRoot.displayName = 'SearchField'

export const SearchField = Object.assign(SearchFieldRoot, { Button: SearchFieldButton, Input: SearchFieldInput })
