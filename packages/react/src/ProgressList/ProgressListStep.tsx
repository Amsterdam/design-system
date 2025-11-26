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
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const ProgressListStep = forwardRef(
  ({ children, className, heading, ...restProps }: ProgressListStepProps, ref: ForwardedRef<HTMLLIElement>) => {
    const { headingLevel } = useContext(ProgressListContext)

    return (
      <li className={clsx('ams-progress-list__step', className)} {...restProps} ref={ref}>
        <div className="ams-progress-list__indicator">
          <div className={clsx('ams-progress-list__marker', `ams-progress-list__marker--heading-${headingLevel}`)}>
            <span className="ams-progress-list__marker-shape" />
          </div>
          <span
            className={clsx('ams-progress-list__connector', `ams-progress-list__connector--heading-${headingLevel}`)}
          />
        </div>
        <div>
          <Heading level={headingLevel}>{heading}</Heading>
          <div className="ams-progress-list__body">{children}</div>
        </div>
      </li>
    )
  },
)

ProgressListStep.displayName = 'ProgressList.Step'
