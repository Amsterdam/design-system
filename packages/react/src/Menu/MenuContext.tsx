/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'

type MenuContextValue = {
  /** Whether menu items with nested links can be expanded and collapsed. */
  collapsibleSubmenus: boolean
  /** The accessible phrase for a submenu toggle in the expanded state. */
  hideAccessibleLabel: string
  /** The accessible phrase for a submenu toggle in the collapsed state. */
  showAccessibleLabel: string
}

const defaultValues: MenuContextValue = {
  collapsibleSubmenus: false,
  hideAccessibleLabel: 'Verberg submenu van',
  showAccessibleLabel: 'Toon submenu van',
}

export const MenuContext = createContext(defaultValues)
