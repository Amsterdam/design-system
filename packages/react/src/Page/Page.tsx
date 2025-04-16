/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type PageProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const Page = forwardRef(
  ({ children, className, ...restProps }: PageProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-page', className)} ref={ref}>
      {children}
    </div>
  ),
)

Page.displayName = 'Page'
