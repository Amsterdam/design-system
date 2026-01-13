/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type ProgressListSubStepsProps = {} & PropsWithChildren<HTMLAttributes<HTMLOListElement>>

export const ProgressListSubSteps = forwardRef(
  ({ children, className, ...restProps }: ProgressListSubStepsProps, ref: ForwardedRef<HTMLOListElement>) => (
    <ol {...restProps} className={clsx('ams-progress-list__substeps', className)} ref={ref}>
      {children}
    </ol>
  ),
)

ProgressListSubSteps.displayName = 'ProgressList.SubSteps'
