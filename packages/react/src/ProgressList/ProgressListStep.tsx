/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { ArrowForwardIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { forwardRef, useContext } from 'react'

import { Heading } from '../Heading'
import { Icon } from '../Icon'
import ProgressListContext from './ProgressListContext'

export type ProgressListStepProps = {
  /** Whether the step contains a list of substeps. This is needed to draw the connecting lines correctly. */
  hasSubsteps?: boolean
  /** The heading text for this step. */
  heading: string
  /** The current progress state of the step. */
  status?: 'current' | 'completed'
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const ProgressListStep = forwardRef(
  (
    { children, className, hasSubsteps, heading, status, ...restProps }: ProgressListStepProps,
    ref: ForwardedRef<HTMLLIElement>,
  ) => {
    const { headingLevel } = useContext(ProgressListContext)

    return (
      <li
        aria-current={status === 'current' ? 'step' : undefined}
        className={clsx(
          className,
          'ams-progress-list__step',
          hasSubsteps && 'ams-progress-list__step--has-substeps',
          status && `ams-progress-list__step--${status}`,
        )}
        ref={ref}
        {...restProps}
      >
        <div className="ams-progress-list__indicator">
          <div className="ams-progress-list__marker">
            <span className="ams-progress-list__marker-shape">
              {status === 'current' && <Icon color="inverse" svg={ArrowForwardIcon} />}
            </span>
          </div>
          <span className="ams-progress-list__connector" />
        </div>
        <div className="ams-progress-list__content">
          <Heading className="ams-progress-list__heading" level={headingLevel}>
            {heading}
          </Heading>
          {children}
        </div>
      </li>
    )
  },
)

ProgressListStep.displayName = 'ProgressList.Step'
