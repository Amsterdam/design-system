/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { ArrowForwardIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { Children, forwardRef, isValidElement, useContext } from 'react'

import { Heading } from '../Heading'
import { Icon } from '../Icon'
import ProgressListContext from './ProgressListContext'
import { ProgressListSubSteps } from './ProgressListSubSteps'

export type ProgressListStepProps = {
  heading: string
  status?: 'current' | 'completed'
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const ProgressListStep = forwardRef(
  ({ children, className, heading, status, ...restProps }: ProgressListStepProps, ref: ForwardedRef<HTMLLIElement>) => {
    const { headingLevel } = useContext(ProgressListContext)

    const hasSubSteps = Children.toArray(children).some((child) => {
      if (!isValidElement(child)) return false

      return child.type === ProgressListSubSteps
    })

    return (
      <li
        aria-current={status === 'current' ? 'step' : undefined}
        className={clsx('ams-progress-list__step', status && `ams-progress-list__step--${status}`, className)}
        ref={ref}
        {...restProps}
      >
        <div className="ams-progress-list__indicator">
          <div className="ams-progress-list__marker">
            <span className="ams-progress-list__marker-shape">
              {status === 'current' && (
                <Icon className="ams-progress-list__marker-icon" square svg={ArrowForwardIcon} />
              )}
            </span>
          </div>
          <span
            className={clsx(
              'ams-progress-list__connector',
              hasSubSteps && 'ams-progress-list__connector--has-sub-steps',
            )}
          />
        </div>
        <div className="ams-progress-list__content">
          <Heading level={headingLevel}>{heading}</Heading>
          <div
            className={clsx('ams-progress-list__body', hasSubSteps && 'ams-progress-list__body--has-sub-steps-list')}
          >
            {children}
          </div>
        </div>
      </li>
    )
  },
)

ProgressListStep.displayName = 'ProgressList.Step'
