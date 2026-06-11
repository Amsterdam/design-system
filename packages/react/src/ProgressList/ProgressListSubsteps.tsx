/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type ProgressListSubstepsProps = PropsWithChildren<HTMLAttributes<HTMLOListElement>>

/**
 * The container for substeps within a Progress List step.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-progress-list--docs Progress List docs at Amsterdam Design System}
 */
export const ProgressListSubsteps = forwardRef(
  ({ children, className, ...restProps }: ProgressListSubstepsProps, ref: ForwardedRef<HTMLOListElement>) => (
    <ol {...restProps} className={clsx('ams-progress-list-substeps', className)} ref={ref}>
      {children}
    </ol>
  ),
)

ProgressListSubsteps.displayName = 'ProgressList.Substeps'
