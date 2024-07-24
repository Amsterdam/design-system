/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import AccordionContext from './AccordionContext'
import { AccordionSection } from './AccordionSection'
import type { HeadingProps } from '../Heading/Heading'
import { useKeyboardFocus } from '../common/useKeyboardFocus'

export type AccordionProps = {
  /** The hierarchical level of the Accordion Section heading(s) within the document. */
  headingLevel: HeadingProps['level']
  /** The HTML element to use for each Accordion Section. */
  sectionAs?: 'div' | 'section'
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const AccordionRoot = forwardRef(
  ({ children, className, headingLevel, sectionAs = 'section' }: AccordionProps, ref: ForwardedRef<HTMLDivElement>) => {
    const innerRef = useRef<HTMLDivElement>(null)

    // use a passed ref if it's there, otherwise use innerRef
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement)

    const { keyDown } = useKeyboardFocus(innerRef, { rotating: true })

    return (
      <AccordionContext.Provider value={{ headingLevel: headingLevel, sectionAs: sectionAs }}>
        <div className={clsx('ams-accordion', className)} onKeyDown={keyDown} ref={innerRef}>
          {children}
        </div>
      </AccordionContext.Provider>
    )
  },
)

AccordionRoot.displayName = 'Accordion'

export const Accordion = Object.assign(AccordionRoot, { Section: AccordionSection })
