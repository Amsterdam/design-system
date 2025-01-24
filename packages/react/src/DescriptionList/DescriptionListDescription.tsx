/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type DescriptionListDescriptionProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const DescriptionListDescription = forwardRef(
  ({ children, className, ...restProps }: DescriptionListDescriptionProps, ref: ForwardedRef<HTMLElement>) => (
    <dd {...restProps} className={clsx('ams-description-list__description', className)} ref={ref}>
      {children}
    </dd>
  ),
)

DescriptionListDescription.displayName = 'DescriptionList.Description'
