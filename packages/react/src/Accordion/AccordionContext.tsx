/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'
import { HeadingLevel } from '../Heading/Heading'

export type AccordionContextValue = {
  headingLevel: HeadingLevel
  as?: 'div' | 'section'
}

const defaultValues: AccordionContextValue = {
  headingLevel: 1,
  as: 'section',
}

const AccordionContext = createContext(defaultValues)

export default AccordionContext
