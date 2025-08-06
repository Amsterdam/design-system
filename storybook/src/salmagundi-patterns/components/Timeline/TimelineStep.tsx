/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Heading, Icon, IconButton, Paragraph } from '@amsterdam/design-system-react'
import { ChevronDownIcon, DocumentWithPencilIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef, useContext, useState } from 'react'
import type { ForwardedRef, LiHTMLAttributes, PropsWithChildren } from 'react'
import TimelineContext from './TimelineContext'

export type TimelineStepProps = {
  date: string
  expanded?: boolean
  headingLevel?: 2 | 3 | 4
  lastEdit?: string
  onEdit?: () => void
  title: string
} & PropsWithChildren<LiHTMLAttributes<HTMLLIElement>>

export const TimelineStep = forwardRef(
  (
    {
      title,
      children,
      className,
      date,
      expanded = false,
      headingLevel = 2,
      lastEdit,
      onEdit,
      ...restProps
    }: TimelineStepProps,
    ref: ForwardedRef<HTMLLIElement>,
  ) => {
    const { collapsible, editable } = useContext(TimelineContext)
    const [isExpanded, setIsExpanded] = useState(expanded)

    return (
      <li
        className={clsx('ams-timeline__step', isExpanded && `ams-timeline__step--expanded`, className)}
        ref={ref}
        {...restProps}
      >
        <div className="ams-timeline__date">{date}</div>
        <div className="ams-timeline__bullet"></div>
        <Heading className="ams-timeline__title" level={headingLevel} size="level-4">
          {title}
        </Heading>
        <div className="ams-timeline__actions">
          {editable && (
            <IconButton
              className="ams-timeline__button"
              label="Bewerken"
              onClick={onEdit}
              size="heading-5"
              svg={DocumentWithPencilIcon}
            />
          )}
          {collapsible && (
            <IconButton
              className="ams-timeline__button ams-timeline__toggle"
              label="Toon meer"
              onClick={() => setIsExpanded(!isExpanded)}
              size="heading-5"
              svg={ChevronDownIcon}
            />
          )}
        </div>
        <div className="ams-timeline__content">
          {children}
          {lastEdit && (
            <Paragraph className="ams-timeline__last-edit" size="small">
              <Icon size="heading-6" svg={DocumentWithPencilIcon} /> {lastEdit}
            </Paragraph>
          )}
        </div>
      </li>
    )
  },
)

TimelineStep.displayName = 'Timeline.Step'
