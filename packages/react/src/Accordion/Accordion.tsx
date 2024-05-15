/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import AccordionContext from './AccordionContext'
import { AccordionSection } from './AccordionSection'
import { HeadingLevel } from '../Heading/Heading'
import { useKeyboardFocus } from '../common/useKeyboardFocus'

export type AccordionProps = {
  /** The hierarchical level of the Accordion Title within the document. */
  headingLevel: HeadingLevel
  /** Whether to use a ‘section’ element and ‘region’ landmark for each Accordion Section. */
  section?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const AccordionRoot = forwardRef(
  ({ children, className, headingLevel, section = true }: AccordionProps, ref: ForwardedRef<HTMLDivElement>) => {
    const innerRef = useRef<HTMLDivElement>(null)

    // use a passed ref if it's there, otherwise use innerRef
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement)

    const { keyDown } = useKeyboardFocus(innerRef, { rotating: true })

    return (
      <AccordionContext.Provider value={{ headingLevel: headingLevel, section: section }}>
        <div className={clsx('ams-accordion', className)} onKeyDown={keyDown} ref={innerRef}>
          {children}
        </div>
      </AccordionContext.Provider>
    )
  },
)

AccordionRoot.displayName = 'Accordion'

export const Accordion = Object.assign(AccordionRoot, { Section: AccordionSection })
