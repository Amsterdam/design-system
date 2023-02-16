/**
 * @license EUPL-1.2
 * Copyright (c) Gemeente Amsterdam
 */

import clsx from 'clsx'
import { HTMLAttributes, PropsWithChildren } from 'react'

export const List = ({ children, className, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLUListElement>>) => {
  return (
    <ul className={clsx('amsterdam-list', className)} {...restProps}>
      {children}
    </ul>
  )
}
