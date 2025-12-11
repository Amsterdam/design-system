/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { ArrowForwardIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { forwardRef, useContext } from 'react'

import { Icon } from '../Icon'
import ProgressListContext from './ProgressListContext'

export type ProgressListSubStepProps = {
  status?: 'current' | 'completed'
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

const getHeadingSize = (level: 2 | 3 | 4) => {
  const mapping = {
    2: 'heading-3',
    3: 'heading-4',
    4: 'heading-5',
  } as const

  return mapping[level]
}

export const ProgressListSubStep = forwardRef(
  ({ children, className, status, ...restProps }: ProgressListSubStepProps, ref: ForwardedRef<HTMLLIElement>) => {
    const { headingLevel } = useContext(ProgressListContext)

    return (
      <li
        aria-current={status === 'current' ? 'step' : undefined}
        className={clsx('ams-progress-list__sub-step', status && `ams-progress-list__sub-step--${status}`, className)}
        ref={ref}
        {...restProps}
      >
        <div className="ams-progress-list-sub-step__indicator">
          <div className="ams-progress-list-sub-step__marker">
            <span className="ams-progress-list-sub-step__marker-shape">
              {status === 'current' && <Icon size={getHeadingSize(headingLevel)} svg={ArrowForwardIcon} />}
            </span>
          </div>
          <span className="ams-progress-list-sub-step__connector" />
        </div>
        <div>{children}</div>
      </li>
    )
  },
)

ProgressListSubStep.displayName = 'ProgressList.SubStep'
