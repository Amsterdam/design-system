/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'
import type { AccordionProps } from './Accordion'
import type { HeadingProps } from '../Heading/Heading'

export type AccordionContextValue = {
  headingLevel: HeadingProps['level'] | null
  sectionAs?: AccordionProps['sectionAs']
}

const defaultValues: AccordionContextValue = {
  headingLevel: null,
  sectionAs: 'section',
}

const AccordionContext = createContext(defaultValues)

export default AccordionContext
