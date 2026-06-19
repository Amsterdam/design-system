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
   * Whether the step content is collapsed.
   * When provided, the component is controlled and internal state is ignored.
   * Has no effect when `collapsible` is `false` on the parent.
   */
  readonly collapsed?: boolean
  /**
   * Whether the content is initially collapsed.
   * Defaults to `true` when `status` is `'completed'`, and `false` otherwise.
   * Ignored when `collapsible` is `false` on the parent, or when `collapsed` is provided.
   */
  readonly defaultCollapsed?: boolean
  /** Whether the step contains a list of substeps. This is needed to draw the connecting lines correctly. */
  readonly hasSubsteps?: boolean
  /** The heading text for this step. */
  readonly heading: string
  /**
   * Callback fired when the step is expanded or collapsed. Receives the new expanded state.
   * Ignored if `collapsible` is `false`.
   */
  readonly onToggle?: (expanded: boolean) => void
  /** The current progress state of the step. */
  readonly status?: 'current' | 'completed'
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLElement>>>

/**
 * A single step within a Progress List, showing its status and optional detail content.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-progress-list--docs Progress List docs at Amsterdam Design System}
 */
export const ProgressListStep = forwardRef(
  (
    {
      children,
      className,
      collapsed,
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
    const isControlled = collapsible && collapsed !== undefined
    const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed ?? status === 'completed')
    const isCollapsed = isControlled ? collapsed : internalCollapsed

    const iconSize = `heading-${headingLevel}` as IconProps['size']
    const panelId = useId()

    const handleClick = () => {
      const willExpand = isCollapsed
      if (!isControlled) setInternalCollapsed(!isCollapsed)
      onToggle?.(willExpand)
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
