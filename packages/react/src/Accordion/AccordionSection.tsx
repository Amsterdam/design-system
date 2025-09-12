/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronDownIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef, useContext, useId, useState } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import AccordionContext from './AccordionContext'
import { Heading } from '../Heading'
import { Icon } from '../Icon/Icon'
import type { IconProps } from '../Icon/Icon'

export type AccordionSectionProps = {
  /** Whether the content is displayed initially. */
  expanded?: boolean
  /** The heading text. */
  label: string
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

// The 'ams-accordion__header' class is @deprecated and will be removed in a future release.

export const AccordionSection = forwardRef(
  (
    { children, className, expanded = false, label, ...restProps }: AccordionSectionProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { headingLevel, sectionAs } = useContext(AccordionContext)
    const [isExpanded, setIsExpanded] = useState(expanded)

    const SectionTag = sectionAs || 'section'
    const id = useId()
    const iconSize = `heading-${headingLevel}` as IconProps['size']
    const buttonId = `button-${id}`
    const panelId = `panel-${id}`

    return (
      <div className={clsx('ams-accordion__section', className)} ref={ref} {...restProps}>
        <Heading className="ams-accordion__header" level={headingLevel}>
          <button
            aria-controls={panelId}
            aria-expanded={isExpanded}
            className="ams-accordion__button"
            id={buttonId}
            onClick={() => setIsExpanded(!isExpanded)}
            type="button"
          >
            <Icon className="ams-accordion__icon" size={iconSize} svg={ChevronDownIcon} />
            {label}
          </button>
        </Heading>
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
