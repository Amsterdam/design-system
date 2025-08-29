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
  /**
   * The hierarchical level of this Accordion’s Section Headings within the document.
   * There is no default value; determine the correct level for each instance.
   */
  headingLevel: Exclude<HeadingProps['level'], 1>
  /** Uses larger or smaller text without changing its position in the heading hierarchy. */
  headingSize?: Exclude<HeadingProps['size'], 'level-1' | 'level-6'>
  /** The HTML element to use for each Accordion Section. */
  sectionAs?: 'div' | 'section'
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const AccordionRoot = forwardRef(
  (
    { children, className, headingLevel, headingSize = 'level-3', sectionAs = 'section' }: AccordionProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const innerRef = useRef<HTMLDivElement>(null)

    // use a passed ref if it's there, otherwise use innerRef
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement)

    const { keyDown } = useKeyboardFocus(innerRef, {
      focusableElements: ['.ams-accordion__button:not([disabled])'],
      rotating: true,
    })

    return (
      <AccordionContext.Provider value={{ headingLevel: headingLevel, headingSize: headingSize, sectionAs: sectionAs }}>
        <div className={clsx('ams-accordion', className)} onKeyDown={keyDown} ref={innerRef}>
          {children}
        </div>
      </AccordionContext.Provider>
    )
  },
)

AccordionRoot.displayName = 'Accordion'

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-accordion--docs Accordion docs at Amsterdam Design System}
 */
export const Accordion = Object.assign(AccordionRoot, { Section: AccordionSection })
