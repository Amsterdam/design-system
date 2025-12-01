/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useContext } from 'react'

import { Heading } from '../Heading'
import ProgressListContext from './ProgressListContext'

export type ProgressListStepProps = {
  heading: string
  status?: 'current' | 'upcoming' | 'completed'
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const ProgressListStep = forwardRef(
  (
    { children, className, heading, status = 'upcoming', ...restProps }: ProgressListStepProps,
    ref: ForwardedRef<HTMLLIElement>,
  ) => {
    const { headingLevel } = useContext(ProgressListContext)

    return (
      <li
        aria-current={status === 'current' ? 'step' : undefined}
        className={clsx('ams-progress-list__step', `ams-progress-list__step--${status}`, className)}
        ref={ref}
        {...restProps}
      >
        <div className="ams-progress-list__indicator">
          <div className="ams-progress-list__marker">
            <span className="ams-progress-list__marker-shape" />
          </div>
          <span className="ams-progress-list__connector" />
        </div>
        <div className="ams-progress-list__content">
          <Heading level={headingLevel}>{heading}</Heading>
          <div className="ams-progress-list__body">{children}</div>
        </div>
      </li>
    )
  },
)

ProgressListStep.displayName = 'ProgressList.Step'
