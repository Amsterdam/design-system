/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export const actionGroupGapSizes = ['none', 'x-small', 'small', 'large', 'x-large'] as const
type ActionGroupGap = (typeof actionGroupGapSizes)[number]

export type ActionGroupProps = {
  /**
   * The amount of space between actions and between wrapped rows.
   * @default medium
   */
  readonly gap?: ActionGroupGap
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

/**
 * Groups one or more related actions and manages their layout.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-layout-action-group--docs Action Group docs at Amsterdam Design System}
 */
export const ActionGroup = forwardRef(
  ({ children, className, gap, ...restProps }: ActionGroupProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div
      {...restProps}
      className={clsx('ams-action-group', gap && `ams-action-group--gap-${gap}`, className)}
      ref={ref}
      role="group"
    >
      {children}
    </div>
  ),
)

ActionGroup.displayName = 'ActionGroup'
