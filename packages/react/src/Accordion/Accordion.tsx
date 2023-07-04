/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import type { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, useImperativeHandle, useRef } from 'react'
import AccordionContext from './AccordionContext'
import { AccordionSection } from './AccordionSection'
import useFocusWithArrows from './useFocusWithArrows'
import { Levels } from '../Heading/Heading'

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  headingLevel: Levels
  section?: boolean
}

export interface AccordionComponent
  extends ForwardRefExoticComponent<
    PropsWithChildren<HTMLAttributes<HTMLDivElement>> & RefAttributes<HTMLDivElement> & AccordionProps
  > {
  Section: typeof AccordionSection
}

export const Accordion = forwardRef(
  ({ children, className, headingLevel, section = true }: AccordionProps, ref: ForwardedRef<HTMLDivElement>) => {
    const innerRef = useRef<HTMLDivElement>(null)

    // use a passed ref if it's there, otherwise use innerRef
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement)

    const { keyDown } = useFocusWithArrows(innerRef, true)
    return (
      <AccordionContext.Provider value={{ headingLevel: headingLevel, section: section }}>
        <div
          className={clsx('amsterdam-accordion', className)}
          role="button"
          tabIndex={-1}
          onKeyDown={keyDown}
          ref={innerRef}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    )
  },
) as AccordionComponent

Accordion.displayName = 'Accordion'

Accordion.Section = AccordionSection
Accordion.Section.displayName = 'Accordion.Section'
