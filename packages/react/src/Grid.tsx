/**
 * @license EUPL-1.2
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { HTMLAttributes, PropsWithChildren } from 'react'

export const Grid = ({ children, className, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLElement>>) => (
  <div className={clsx('amsterdam-grid', className)} {...restProps}>
    {children}
  </div>
)
