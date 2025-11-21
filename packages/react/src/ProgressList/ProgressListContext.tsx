/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'

import type { ProgressListProps } from './ProgressList'

export type ProgressListContextValue = {
  headingLevel: ProgressListProps['headingLevel']
}

const defaultValues: ProgressListContextValue = {
  // Level 2 is set here, but it is never used.
  // headingLevel is a required prop in ProgressList, which always overwrites it.
  headingLevel: 2,
}

const ProgressListContext = createContext(defaultValues)

export default ProgressListContext
