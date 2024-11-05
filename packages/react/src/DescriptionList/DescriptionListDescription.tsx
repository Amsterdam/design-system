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
    <dd {...restProps} ref={ref} className={clsx('ams-description-list__description', className)}>
      {children}
    </dd>
  ),
)

DescriptionListDescription.displayName = 'DescriptionList.Description'
