/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'

type TableOfContentsContextValue = {
  collapsible: boolean
  hideAccessibleLabel: string
  showAccessibleLabel: string
}

const defaultValues: TableOfContentsContextValue = {
  collapsible: false,
  hideAccessibleLabel: 'Verberg submenu van',
  showAccessibleLabel: 'Toon submenu van',
}

export const TableOfContentsContext = createContext(defaultValues)
