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
  /**
   * Whether the content is initially collapsed.
   * Defaults to `true` when `status` is `'completed'`, and `false` otherwise.
   * Ignored if `collapsible` is `false`.
   */
  defaultCollapsed?: boolean
  /** Whether the step contains a list of substeps. This is needed to draw the connecting lines correctly. */
  hasSubsteps?: boolean
  /** The heading text for this step. */
  heading: string
  /**
   * Callback fired when the step is expanded or collapsed. Receives the new expanded state.
   * Ignored if `collapsible` is `false`.
   */
  onToggle?: (expanded: boolean) => void
  /** The current progress state of the step. */
  status?: 'current' | 'completed'
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const ProgressListStep = forwardRef(
  (
    {
      children,
      className,
      defaultCollapsed,
      hasSubsteps,
      heading,
      onToggle,
      status,
      ...restProps
    }: ProgressListStepProps,
    ref: ForwardedRef<HTMLLIElement>,
  ) => {
    const { collapsible, headingLevel } = useContext(ProgressListContext)
    const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed ?? status === 'completed')

    const iconSize = `heading-${headingLevel}` as IconProps['size']
    const panelId = useId()

    // Toggles the local collapsed state and emits the new state
    const handleClick = () => {
      setIsCollapsed(!isCollapsed)
      onToggle?.(isCollapsed)
    }

    return (
      <li
        aria-current={status === 'current' ? 'step' : undefined}
        className={clsx(
          className,
          'ams-progress-list__step',
          collapsible && isCollapsed && 'ams-progress-list__step--collapsed',
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
            {collapsible ? (
              <button
                aria-controls={panelId}
                aria-expanded={!isCollapsed}
                className="ams-progress-list__button"
                onClick={handleClick}
                type="button"
              >
                <Icon className="ams-progress-list__icon" size={iconSize} svg={ChevronDownIcon} />
                <AccessibleStatusText status={status} />
                {heading}
              </button>
            ) : (
              <>
                <AccessibleStatusText status={status} />
                {heading}
              </>
            )}
          </Heading>
          <div className="ams-progress-list__panel" id={collapsible ? panelId : undefined}>
            {children}
          </div>
        </div>
      </li>
    )
  },
)

ProgressListStep.displayName = 'ProgressList.Step'
