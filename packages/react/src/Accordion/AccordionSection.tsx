/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronDownIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef, useContext, useId, useState } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import AccordionContext from './AccordionContext'
import { getHeadingElement } from '../Heading/getHeadingElement'
import { Icon } from '../Icon/Icon'

export type AccordionSectionProps = {
  /** The heading text. */
  label: string
  /** Whether the content is displayed initially. */
  expanded?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const AccordionSection = forwardRef(
  (
    { label, expanded = false, children, className, ...otherProps }: AccordionSectionProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { headingLevel, as } = useContext(AccordionContext)
    const [isExpanded, setIsExpanded] = useState(expanded)

    const HeadingX = getHeadingElement(headingLevel)
    const Tag = as || 'section'
    const id = useId()
    const buttonId = `button-${id}`
    const panelId = `panel-${id}`

    return (
      <div className={clsx('ams-accordion__section', className)} ref={ref} {...otherProps}>
        <HeadingX className={'ams-accordion__header'}>
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
        </HeadingX>
        <Tag
          id={panelId}
          aria-labelledby={buttonId}
          className={clsx('ams-accordion__panel', { 'ams-accordion__panel--expanded': isExpanded })}
        >
          {children}
        </Tag>
      </div>
    )
  },
)

AccordionSection.displayName = 'Accordion.Section'
