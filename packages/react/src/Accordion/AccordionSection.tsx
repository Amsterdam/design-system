/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronDownIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef, useContext, useId, useState } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import AccordionContext from './AccordionContext'
import { getHeadingElement } from '../Heading/Heading'
import { Icon } from '../Icon/Icon'

export type AccordionSectionProps = {
  label: string
  expanded?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const AccordionSection = forwardRef(
  (
    { label, expanded = false, children, className, ...otherProps }: AccordionSectionProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { headingLevel, section } = useContext(AccordionContext)
    const [isExpanded, setIsExpanded] = useState(expanded)

    const HeadingX = getHeadingElement(headingLevel)
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
            <Icon svg={ChevronDownIcon} size="level-5" className="amsterdam-accordion__icon" />
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
