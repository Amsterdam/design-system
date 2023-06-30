/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { ChevronDown } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, useId, useState } from 'react'
import { getElement, Levels } from '../Heading/Heading'
import { Icon } from '../Icon/Icon'

export interface AccordionSectionProps extends HTMLAttributes<HTMLElement> {
  label: string
  headingLevel: Levels
  expanded?: boolean
  section?: boolean
}

export const AccordionSection = forwardRef(
  (
    {
      label,
      headingLevel = 1,
      expanded = false,
      section,
      children,
      className,
      ...otherProps
    }: PropsWithChildren<AccordionSectionProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const [isExpanded, setIsExpanded] = useState(expanded)

    const HeadingX = getElement(headingLevel)
    const id = useId()
    const buttonId = `button-${id}`
    const panelId = `panel-${id}`

    return (
      <div className={clsx('amsterdam-accordion__section', className)} ref={ref} {...otherProps}>
        <HeadingX className={'amsterdam-accordion__header'}>
          <button
            aria-controls={panelId}
            aria-expanded={isExpanded}
            className="amsterdam-accordion__button"
            id={buttonId}
            onClick={() => setIsExpanded(!isExpanded)}
            type="button"
          >
            {label}
            <Icon svg={ChevronDown} size="level-5" />
          </button>
        </HeadingX>
        {section ? (
          <section
            id={panelId}
            aria-labelledby={buttonId}
            className={clsx('amsterdam-accordion__panel', { 'amsterdam-accordion__panel--expanded': isExpanded })}
          >
            {children}
          </section>
        ) : (
          <div
            id={panelId}
            aria-labelledby={buttonId}
            className={clsx('amsterdam-accordion__panel', { 'amsterdam-accordion__panel--expanded': isExpanded })}
          >
            {children}
          </div>
        )}
      </div>
    )
  },
)

AccordionSection.displayName = 'AccordionSection'
