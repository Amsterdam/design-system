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
  // Default value for type safety.
  // The actual value is always provided via ProgressList’s required headingLevel prop.
  headingLevel: 2,
}

const ProgressListContext = createContext(defaultValues)

export default ProgressListContext
