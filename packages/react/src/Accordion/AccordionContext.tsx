import { createContext } from 'react'
import { Levels } from '../Heading/Heading'

export interface AccordionContextValue {
  headingLevel: Levels
  section?: boolean
}

const defaultValues: AccordionContextValue = {
  headingLevel: 1,
  section: true,
}

const AccordionContext = createContext(defaultValues)

export default AccordionContext
