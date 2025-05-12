/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type ActionGroupProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-layout-action-group--docs Action Group docs at Amsterdam Design System}
 */
export const ActionGroup = forwardRef(
  ({ children, className, ...restProps }: ActionGroupProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-action-group', className)} ref={ref} role="group">
      {children}
    </div>
  ),
)

ActionGroup.displayName = 'ActionGroup'
