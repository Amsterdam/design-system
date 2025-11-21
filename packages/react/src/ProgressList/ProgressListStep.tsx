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
        <div className="ams-progress-list__progress">
          <div
            className={clsx(
              'ams-progress-list__marker-container',
              `ams-progress-list__marker-container-heading-${headingLevel}`,
            )}
          >
            <span className={clsx('ams-progress-list__marker', `ams-progress-list__marker-h${headingLevel}`)} />
          </div>
          <span className={clsx('ams-progress-list__connector', `ams-progress-list__connector-h${headingLevel}`)} />
        </div>
        <div className="ams-progress-list__core">
          {/* TODO: Rename core */}
          <Heading
            className={clsx('ams-progress-list__heading', `ams-progress-list__heading-${headingLevel}`)}
            level={headingLevel}
          >
            {heading}
          </Heading>
          <div className="ams-progress-list__content">{children}</div>
        </div>
      </li>
    )
  },
)

ProgressListStep.displayName = 'ProgressList.Step'
