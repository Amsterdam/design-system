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
  // Default value for type safety.
  // The actual value is always provided via Accordion’s required headingLevel prop.
  headingLevel: 2,
}

const AccordionContext = createContext(defaultValues)

export default AccordionContext
