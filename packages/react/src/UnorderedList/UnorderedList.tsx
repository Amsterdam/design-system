/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export const UnorderedList = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLUListElement>>,
    ref: ForwardedRef<HTMLUListElement>,
  ) => {
    return (
      <ul ref={ref} className={clsx('amsterdam-unordered-list', className)} {...restProps}>
        {children}
      </ul>
    )
  },
)

UnorderedList.displayName = 'UnorderedList'
