/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'

import type { ProgressListProps } from './ProgressList'

export type AccordionContextValue = {
  headingLevel: ProgressListProps['headingLevel']
}

const defaultValues: AccordionContextValue = {
  // Level 2 is set here, but it is never used.
  // headingLevel is a required prop in Accordion, which always overwrites it.
  headingLevel: 2,
}

const ProgressListContext = createContext(defaultValues)

export default ProgressListContext
