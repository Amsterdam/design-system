/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Heading, Icon, IconButton, Paragraph } from '@amsterdam/design-system-react'
import { ChevronDownIcon, DocumentEditIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef, useContext, useState } from 'react'
import type { ForwardedRef, LiHTMLAttributes, PropsWithChildren } from 'react'
import TimelineContext from './TimelineContext'

export type TimelineStepProps = {
  date: string
  lastEdit?: string
  title: string
  expanded?: boolean
  headingLevel?: 2 | 3 | 4
  onEdit?: () => void
} & PropsWithChildren<LiHTMLAttributes<HTMLLIElement>>

export const TimelineStep = forwardRef(
  (
    {
      children,
      className,
      date,
      lastEdit,
      title,
      expanded = false,
      headingLevel = 2,
      onEdit,
      ...restProps
    }: TimelineStepProps,
    ref: ForwardedRef<HTMLLIElement>
  ) => {
    const { collapsible, editable } = useContext(TimelineContext)
    const [isExpanded, setIsExpanded] = useState(expanded)

    return (
      <li
        ref={ref}
        className={clsx('ams-timeline__step', isExpanded && `ams-timeline__step--expanded`, className)}
        {...restProps}
      >
        <div className="ams-timeline__date">{date}</div>
        <div className="ams-timeline__bullet"></div>
        <Heading level={headingLevel} size="level-4" className="ams-timeline__title">
          {title}
        </Heading>
        <div className="ams-timeline__actions">
          {editable && (
            <IconButton
              size="level-5"
              svg={DocumentEditIcon}
              className="ams-timeline__button"
              onClick={onEdit}
              label="Bewerken"
            />
          )}
          {collapsible && (
            <IconButton
              size="level-5"
              svg={ChevronDownIcon}
              className="ams-timeline__button ams-timeline__toggle"
              onClick={() => setIsExpanded(!isExpanded)}
              label="Toon meer"
            />
          )}
        </div>
        <div className="ams-timeline__content">
          {children}
          {lastEdit && (
            <Paragraph size="small" className="ams-timeline__last-edit">
              <Icon svg={DocumentEditIcon} size="level-6" /> {lastEdit}
            </Paragraph>
          )}
        </div>
      </li>
    )
  }
)

TimelineStep.displayName = 'Timeline.Step'
