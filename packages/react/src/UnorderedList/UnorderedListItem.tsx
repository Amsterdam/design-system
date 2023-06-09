/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, LiHTMLAttributes, PropsWithChildren } from 'react'

export type UnorderedListItemProps = LiHTMLAttributes<HTMLLIElement>

export const UnorderedListItem = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<UnorderedListItemProps>,
    ref: ForwardedRef<HTMLLIElement>,
  ) => {
    return (
      <li ref={ref} className={clsx('amsterdam-unordered-list__item', className)} {...restProps}>
        {children}
      </li>
    )
  },
)

UnorderedListItem.displayName = 'UnorderedListItem'
