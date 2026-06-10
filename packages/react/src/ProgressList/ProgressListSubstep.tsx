/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { ProgressListStepProps } from './ProgressListStep'

import { AccessibleStatusText } from './AccessibleStatusText'

export type ProgressListSubstepProps = {
  /** The current progress state of the substep. */
  readonly status?: ProgressListStepProps['status']
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLElement>>>

/**
 * A substep nested within a Progress List step.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-progress-list--docs Progress List docs at Amsterdam Design System}
 */
export const ProgressListSubstep = forwardRef(
  ({ children, className, status, ...restProps }: ProgressListSubstepProps, ref: ForwardedRef<HTMLLIElement>) => {
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
        <div className="ams-progress-list-substeps__content">
          <AccessibleStatusText status={status} />
          {children}
        </div>
      </li>
    )
  },
)

ProgressListSubstep.displayName = 'ProgressList.Substep'
