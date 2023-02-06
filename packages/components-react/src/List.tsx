/**
 * @license EUPL-1.2
 */

import clsx from 'clsx'
import { HTMLAttributes, PropsWithChildren } from 'react'

export interface ListProps extends HTMLAttributes<HTMLElement> {
  variant?: 'ordered' | 'unordered'
}

export const List = ({ variant, children, className, ...restProps }: PropsWithChildren<ListProps>) => {
  switch (variant) {
    case 'ordered':
      return (
        <ol className={clsx('amsterdam-list', 'amsterdam-list-ordered', className)} {...restProps}>
          {children}
        </ol>
      )
    case 'unordered':
    default:
      return (
        <ul
          className={clsx('amsterdam-list', variant === 'unordered' && 'amsterdam-list-unordered', className)}
          {...restProps}
        >
          {children}
        </ul>
      )
  }
}
