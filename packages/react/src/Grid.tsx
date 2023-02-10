/**
 * @license EUPL-1.2
 */

import clsx from 'clsx'
import { HTMLAttributes, PropsWithChildren } from 'react'

export const Grid = ({ children, className, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLElement>>) => (
  <div className={clsx('amsterdam-grid', className)} {...restProps}>
    {children}
  </div>
)
