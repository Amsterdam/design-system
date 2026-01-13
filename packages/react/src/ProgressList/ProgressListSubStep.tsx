/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { ProgressListStepProps } from './ProgressListStep'

export type ProgressListSubStepProps = {
  /** The current progress state of the substep. */
  status?: ProgressListStepProps['status']
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const ProgressListSubStep = forwardRef(
  ({ children, className, status, ...restProps }: ProgressListSubStepProps, ref: ForwardedRef<HTMLLIElement>) => {
    return (
      <li
        aria-current={status === 'current' ? 'step' : undefined}
        className={clsx(
          'ams-progress-list-substeps__step',
          status && `ams-progress-list-substeps__step--${status}`,
          className,
        )}
        ref={ref}
        {...restProps}
      >
        <div className="ams-progress-list-substeps__indicator">
          <div className="ams-progress-list-substeps__marker">
            <span className="ams-progress-list-substeps__marker-shape" />
          </div>
          <span className="ams-progress-list-substeps__connector" />
        </div>
        <div className="ams-progress-list-substeps__body">{children}</div>
      </li>
    )
  },
)

ProgressListSubStep.displayName = 'ProgressList.SubStep'
