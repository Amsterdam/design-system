/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'

import type { ProgressListProps } from './ProgressList'

type ProgressListContextValue = {
  completedAccessibleText?: ProgressListProps['completedAccessibleText']
  currentAccessibleText?: ProgressListProps['currentAccessibleText']
  headingLevel: ProgressListProps['headingLevel']
}

const defaultValues: ProgressListContextValue = {
  completedAccessibleText: 'Klaar',
  currentAccessibleText: 'Bezig',
  // Default value for type safety.
  // The actual value is always provided via ProgressList’s required headingLevel prop.
  headingLevel: 2,
}

export const ProgressListContext = createContext(defaultValues)
