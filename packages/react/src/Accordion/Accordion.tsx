/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import AccordionContext from './AccordionContext'
import { AccordionSection } from './AccordionSection'
import useFocusWithArrows from './useFocusWithArrows'
import { HeadingLevel } from '../Heading/Heading'

export type AccordionProps = {
  headingLevel: HeadingLevel
  section?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

type AccordionComponent = {
  Section: typeof AccordionSection
} & ForwardRefExoticComponent<AccordionProps & RefAttributes<HTMLDivElement>>

export const Accordion = forwardRef(
  ({ children, className, headingLevel, section = true }: AccordionProps, ref: ForwardedRef<HTMLDivElement>) => {
    const innerRef = useRef<HTMLDivElement>(null)

    // use a passed ref if it's there, otherwise use innerRef
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement)

    const { keyDown } = useFocusWithArrows(innerRef, true)
    return (
      <AccordionContext.Provider value={{ headingLevel: headingLevel, section: section }}>
        <div className={clsx('amsterdam-accordion', className)} onKeyDown={keyDown} ref={innerRef}>
          {children}
        </div>
      </AccordionContext.Provider>
    )
  },
) as AccordionComponent

Accordion.displayName = 'Accordion'

Accordion.Section = AccordionSection
Accordion.Section.displayName = 'Accordion.Section'
