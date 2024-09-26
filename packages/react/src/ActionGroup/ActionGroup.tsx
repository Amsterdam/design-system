/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type ActionGroupProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const ActionGroup = forwardRef(
  ({ children, className, ...restProps }: ActionGroupProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('ams-action-group', className)}>
      {children}
    </div>
  ),
)

ActionGroup.displayName = 'ActionGroup'
