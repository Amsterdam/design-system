/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { ArrowForwardIcon, ChevronDownIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { forwardRef, useContext, useId, useState } from 'react'

import type { IconProps } from '../Icon/Icon'

import { Heading } from '../Heading'
import { Icon } from '../Icon'
import { AccessibleStatusText } from './AccessibleStatusText'
import { ProgressListContext } from './ProgressListContext'

export type ProgressListStepProps = {
  /** Whether the content is displayed initially. */
  expanded?: boolean
  /** Whether the step contains a list of substeps. This is needed to draw the connecting lines correctly. */
  hasSubsteps?: boolean
  /** The heading text for this step. */
  heading: string
  /** The current progress state of the step. */
  status?: 'current' | 'completed'
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const ProgressListStep = forwardRef(
  (
    { children, className, expanded, hasSubsteps, heading, status, ...restProps }: ProgressListStepProps,
    ref: ForwardedRef<HTMLLIElement>,
  ) => {
    const { headingLevel } = useContext(ProgressListContext)
    const [isExpanded, setIsExpanded] = useState(expanded ?? status !== 'completed')

    const id = useId()
    const iconSize = `heading-${headingLevel}` as IconProps['size']
    const buttonId = `button-${id}`
    const panelId = `panel-${id}`

    return (
      <li
        aria-current={status === 'current' ? 'step' : undefined}
        className={clsx(
          className,
          'ams-progress-list__step',
          !isExpanded && 'ams-progress-list__step--collapsed',
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
            <button
              aria-controls={panelId}
              aria-expanded={isExpanded}
              className="ams-progress-list__button"
              id={buttonId}
              onClick={() => setIsExpanded(!isExpanded)}
              type="button"
            >
              <Icon className="ams-progress-list__icon" size={iconSize} svg={ChevronDownIcon} />
              <AccessibleStatusText status={status} />
              {heading}
            </button>
          </Heading>
          <div
            aria-labelledby={buttonId}
            className={clsx('ams-progress-list__panel', { 'ams-progress-list__panel--expanded': isExpanded })}
            id={panelId}
          >
            <div className="ams-progress-list__panel-inner">{children}</div>
          </div>
        </div>
      </li>
    )
  },
)

ProgressListStep.displayName = 'ProgressList.Step'
