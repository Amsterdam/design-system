/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { ActionGroup } from '../ActionGroup/ActionGroup'

export type DataListActionsProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

/**
 * Holds the links or buttons that act on the value of an item of a Data List.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-data-list--docs Data List docs at Amsterdam Design System}
 */
export const DataListActions = forwardRef(
  ({ children, className, ...restProps }: DataListActionsProps, ref: ForwardedRef<HTMLElement>) => (
    <dd {...restProps} className={clsx('ams-data-list__actions', className)} ref={ref}>
      <ActionGroup>{children}</ActionGroup>
    </dd>
  ),
)

DataListActions.displayName = 'DataList.Actions'
