/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'

import type { AccordionProps } from './Accordion'

export type AccordionContextValue = {
  headingLevel: AccordionProps['headingLevel']
  sectionAs?: AccordionProps['sectionAs']
}

const defaultValues: AccordionContextValue = {
  // Level 2 is set here, but it is never used.
  // headingLevel is a required prop in Accordion, which always overwrites it.
  headingLevel: 2,
}

const AccordionContext = createContext(defaultValues)

export default AccordionContext
