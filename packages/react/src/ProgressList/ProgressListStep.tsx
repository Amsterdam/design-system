/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { ArrowForwardIcon, ChevronDownIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { forwardRef, useContext, useEffect, useId, useRef } from 'react'

import type { IconProps } from '../Icon/Icon'

import { useCollapsible } from '../common/useCollapsible'
import { Heading } from '../Heading'
import { Icon } from '../Icon'
import { AccessibleStatusText } from './AccessibleStatusText'
import { ProgressListContext } from './ProgressListContext'

export type ProgressListStepProps = {
  /**
   * Whether the step content is collapsed.
   * @deprecated Use the `expanded` prop instead (its value is inverted). Will be removed on or after 2027-01-10.
   */
  readonly collapsed?: boolean
  /**
   * Whether the content is initially collapsed.
   * @deprecated Use the `defaultExpanded` prop instead (its value is inverted). Will be removed on or after 2027-01-10.
   */
  readonly defaultCollapsed?: boolean
  /**
   * Whether the content is initially displayed.
   * Defaults to `false` when `status` is `'completed'`, and `true` otherwise.
   * Ignored when `collapsible` is `false` on the parent, or when `expanded` (or the deprecated `collapsed`) is provided.
   */
  readonly defaultExpanded?: boolean
  /**
   * Whether the step content is displayed.
   * When provided, the component is controlled and internal state is ignored.
   * Has no effect when `collapsible` is `false` on the parent.
   */
  readonly expanded?: boolean
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
      defaultExpanded,
      expanded,
      hasSubsteps,
      heading,
      onToggle,
      status,
      ...restProps
    }: ProgressListStepProps,
    ref: ForwardedRef<HTMLLIElement>,
  ) => {
    const { collapsible, headingLevel } = useContext(ProgressListContext)

    // Resolve the canonical `expanded` API, falling back to the deprecated (inverted) `collapsed` API.
    const controlledExpanded = expanded ?? (collapsed === undefined ? undefined : !collapsed)
    const defaultExpandedValue = defaultExpanded ?? (defaultCollapsed === undefined ? undefined : !defaultCollapsed)

    const [isExpanded, toggle] = useCollapsible({
      defaultValue: defaultExpandedValue,
      fallback: status !== 'completed',
      gate: collapsible,
      onToggle,
      value: controlledExpanded,
    })
    const isCollapsed = !isExpanded

    // Warn once for each deprecated prop passed on mount, read through a ref to keep the effect dependency-free.
    const deprecatedPropsRef = useRef({ collapsed, defaultCollapsed })
    useEffect(() => {
      if (deprecatedPropsRef.current.collapsed !== undefined) {
        console.warn(
          '@deprecated The `collapsed` prop of Progress List Step has been replaced. Use `expanded` instead (its value is inverted).',
        )
      }
      if (deprecatedPropsRef.current.defaultCollapsed !== undefined) {
        console.warn(
          '@deprecated The `defaultCollapsed` prop of Progress List Step has been replaced. Use `defaultExpanded` instead (its value is inverted).',
        )
      }
    }, [])

    const iconSize = `heading-${headingLevel}` as IconProps['size']
    const panelId = useId()

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
                onClick={toggle}
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
