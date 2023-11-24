/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface SearchFieldProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {}

export const SearchField = forwardRef(
  ({ children, className, ...restProps }: SearchFieldProps, ref: ForwardedRef<HTMLElement>) => (
    <span {...restProps} ref={ref} className={clsx('amsterdam-search-field', className)}>
      {children}
    </span>
  ),
)

SearchField.displayName = 'SearchField'
