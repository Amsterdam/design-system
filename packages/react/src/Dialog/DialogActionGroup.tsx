/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type DialogActionGroupProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const DialogActionGroup = forwardRef(
  ({ children, className, ...restProps }: DialogActionGroupProps, ref: ForwardedRef<HTMLElement>) => (
    <div {...restProps} ref={ref} className={clsx('ams-dialog__action-group', className)}>
      {children}
    </div>
  ),
)

DialogActionGroup.displayName = 'DialogActionGroup'
