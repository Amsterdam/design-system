/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronDownIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef, useContext, useId, useState } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import AccordionContext from './AccordionContext'
import { getHeadingTag } from '../Heading/getHeadingTag'
import { Icon } from '../Icon/Icon'

export type AccordionSectionProps = {
  /** The heading text. */
  label: string
  /** Whether the content is displayed initially. */
  expanded?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const AccordionSection = forwardRef(
  (
    { label, expanded = false, children, className, ...restProps }: AccordionSectionProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { headingLevel, sectionAs } = useContext(AccordionContext)
    const [isExpanded, setIsExpanded] = useState(expanded)

    const HeadingTag = getHeadingTag(headingLevel)
    const SectionTag = sectionAs || 'section'
    const id = useId()
    const buttonId = `button-${id}`
    const panelId = `panel-${id}`

    return (
      <div className={clsx('ams-accordion__section', className)} ref={ref} {...restProps}>
        <HeadingTag className="ams-accordion__header">
          <button
            aria-controls={panelId}
            aria-expanded={isExpanded}
            className="ams-accordion__button"
            id={buttonId}
            onClick={() => setIsExpanded(!isExpanded)}
            type="button"
          >
            <Icon svg={ChevronDownIcon} size="level-5" className="ams-accordion__icon" />
            {label}
          </button>
        </HeadingTag>
        <SectionTag
          aria-labelledby={buttonId}
          className={clsx('ams-accordion__panel', { 'ams-accordion__panel--expanded': isExpanded })}
          id={panelId}
        >
          {children}
        </SectionTag>
      </div>
    )
  },
)

AccordionSection.displayName = 'Accordion.Section'
