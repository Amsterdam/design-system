/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { ChevronDown } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import type { ReactNode } from 'react'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, useContext, useId, useRef, useState } from 'react'
import AccordionContext from './AccordionContext'
import useFocusWithArrows from './useFocusWithArrows'
import { getElement, Levels } from '../Heading/Heading'
import { Icon } from '../Icon/Icon'

export interface AccordionProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode
  headingLevel: Levels
  section?: boolean
}

// TODO: check op min 3 max 10 children?
// TODO: check op alleen Accordion.Section als children?
export const Accordion = ({ children, headingLevel, section = true }: AccordionProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { keyDown } = useFocusWithArrows(ref, true)
  return (
    <AccordionContext.Provider value={{ headingLevel: headingLevel, section: section }}>
      <div className="amsterdam-accordion" role="button" tabIndex={-1} onKeyDown={keyDown} ref={ref}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

Accordion.displayName = 'Accordion'

export interface AccordionSectionProps extends HTMLAttributes<HTMLElement> {
  label: string
  expanded?: boolean
}

export const AccordionSection = forwardRef(
  (
    { label, expanded = false, children, className, ...otherProps }: PropsWithChildren<AccordionSectionProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { headingLevel, section } = useContext(AccordionContext)
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
Accordion.Section = AccordionSection
