/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'

import type { SearchFieldProps } from './SearchField'

type SearchFieldContextValue = {
  disabled?: SearchFieldProps['disabled']
}

const defaultValues: SearchFieldContextValue = {}

export const SearchFieldContext = createContext(defaultValues)
