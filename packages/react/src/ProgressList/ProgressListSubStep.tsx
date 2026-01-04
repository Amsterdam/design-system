/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type ProgressListSubStepProps = {
  status?: 'current' | 'completed'
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const ProgressListSubStep = forwardRef(
  ({ children, className, status, ...restProps }: ProgressListSubStepProps, ref: ForwardedRef<HTMLLIElement>) => {
    return (
      <li
        aria-current={status === 'current' ? 'step' : undefined}
        className={clsx('ams-progress-list__sub-step', status && `ams-progress-list__sub-step--${status}`, className)}
        ref={ref}
        {...restProps}
      >
        <div className="ams-progress-list-sub-step__indicator">
          <div className="ams-progress-list-sub-step__marker">
            <span className="ams-progress-list-sub-step__marker-shape" />
          </div>
          <span className="ams-progress-list-sub-step__connector" />
        </div>
        <div className="ams-progress-list-sub-step__body">{children}</div>
      </li>
    )
  },
)

ProgressListSubStep.displayName = 'ProgressList.SubStep'
