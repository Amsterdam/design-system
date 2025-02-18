/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type DescriptionListTermProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const DescriptionListTerm = forwardRef(
  ({ children, className, ...restProps }: DescriptionListTermProps, ref: ForwardedRef<HTMLElement>) => (
    <dt {...restProps} className={clsx('ams-description-list__term', className)} ref={ref}>
      {children}
    </dt>
  ),
)

DescriptionListTerm.displayName = 'DescriptionList.Term'
