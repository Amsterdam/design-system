/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'

type MenuContextValue = {
  collapsible: boolean
  hideAccessibleLabel: string
  showAccessibleLabel: string
}

const defaultValues: MenuContextValue = {
  collapsible: false,
  hideAccessibleLabel: 'Verberg submenu van',
  showAccessibleLabel: 'Toon submenu van',
}

export const MenuContext = createContext(defaultValues)
