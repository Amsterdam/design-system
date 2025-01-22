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
  /** Whether the content is displayed initially. */
  expanded?: boolean
  /** The heading text. */
  label: string
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const AccordionSection = forwardRef(
  (
    { children, className, expanded = false, label, ...restProps }: AccordionSectionProps,
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
      <div ref={ref} className={clsx('ams-accordion__section', className)} {...restProps}>
        <HeadingTag className="ams-accordion__header">
          <button
            id={buttonId}
            aria-controls={panelId}
            aria-expanded={isExpanded}
            className="ams-accordion__button"
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <Icon className="ams-accordion__icon" size="level-5" svg={ChevronDownIcon} />
            {label}
          </button>
        </HeadingTag>
        <SectionTag
          id={panelId}
          aria-labelledby={buttonId}
          className={clsx('ams-accordion__panel', { 'ams-accordion__panel--expanded': isExpanded })}
        >
          {children}
        </SectionTag>
      </div>
    )
  },
)

AccordionSection.displayName = 'Accordion.Section'
