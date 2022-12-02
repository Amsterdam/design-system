/**
 * @license EUPL-1.2
 */

import clsx from 'clsx'
import { HTMLAttributes, PropsWithChildren } from 'react'

export interface ListProps extends HTMLAttributes<HTMLElement> {
  variant?: 'ordered' | 'unordered'
}

const OrderedList = ({ children, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLOListElement>>) => (
  <ol {...restProps}>{children}</ol>
)
const UnorderedList = ({ children, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLUListElement>>) => (
  <ul {...restProps}>{children}</ul>
)

export const List = ({ variant, children, className, ...restProps }: PropsWithChildren<ListProps>) => {
  switch (variant) {
    case 'ordered':
      return (
        <OrderedList className={clsx('amsterdam-list', 'amsterdam-list-ordered', className)} {...restProps}>
          {children}
        </OrderedList>
      )
    case 'unordered':
    default:
      return (
        <UnorderedList
          className={clsx('amsterdam-list', variant === 'unordered' && 'amsterdam-list-unordered', className)}
          {...restProps}
        >
          {children}
        </UnorderedList>
      )
  }
}
