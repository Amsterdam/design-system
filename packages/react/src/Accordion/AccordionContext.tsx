import { createContext } from 'react'
import { HeadingLevel } from '../Heading/Heading'

export type AccordionContextValue = {
  headingLevel: HeadingLevel
  section?: boolean
}

const defaultValues: AccordionContextValue = {
  headingLevel: 1,
  section: true,
}

const AccordionContext = createContext(defaultValues)

export default AccordionContext
