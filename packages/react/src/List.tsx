/**
 * @license EUPL-1.2
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export const List = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLUListElement>>,
    ref: ForwardedRef<HTMLUListElement>,
  ) => {
    return (
      <ul ref={ref} className={clsx('amsterdam-list', className)} {...restProps}>
        {children}
      </ul>
    )
  },
)

List.displayName = 'List'
