/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'
import type { HeadingProps } from '../Heading/Heading'

export type AccordionContextValue = {
  headingLevel: HeadingProps['level']
  sectionAs?: 'div' | 'section'
}

const defaultValues: AccordionContextValue = {
  headingLevel: 1,
  sectionAs: 'section',
}

const AccordionContext = createContext(defaultValues)

export default AccordionContext
