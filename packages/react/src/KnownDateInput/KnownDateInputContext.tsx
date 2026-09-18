/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'

import type { KnownDateInputProps } from './KnownDateInput'

type KnownDateInputContextValue = {
  autoComplete?: KnownDateInputProps['autoComplete']
}

const defaultValues: KnownDateInputContextValue = {}

export const KnownDateInputContext = createContext(defaultValues)
