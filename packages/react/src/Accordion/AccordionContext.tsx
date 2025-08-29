/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'
import type { AccordionProps } from './Accordion'
import type { HeadingProps } from '../Heading/Heading'

export type AccordionContextValue = {
  headingLevel: HeadingProps['level']
  sectionAs?: AccordionProps['sectionAs']
}

const defaultValues: AccordionContextValue = {
  // Level 1 is set here, but it is never used.
  // headingLevel is a required prop in Accordion, which always overwrites it.
  headingLevel: 1,
  sectionAs: 'section',
}

const AccordionContext = createContext(defaultValues)

export default AccordionContext
