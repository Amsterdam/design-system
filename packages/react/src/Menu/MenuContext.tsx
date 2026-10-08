/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'

type MenuContextValue = {
  /** Whether menu items with nested links can be expanded and collapsed. */
  collapsible: boolean
  /** The accessible phrase for a submenu toggle in the expanded state. */
  hideAccessibleLabel: string
  /** Whether the Menu never shows a submenu: it is the wide-window instance and cannot be expanded. */
  hidesSubmenu: boolean
  /** The accessible phrase for a submenu toggle in the collapsed state. */
  showAccessibleLabel: string
  /** Whether submenu links are currently visible in this Menu layout and state. */
  showsSubmenu: boolean
}

const defaultValues: MenuContextValue = {
  collapsible: false,
  hideAccessibleLabel: 'Verberg submenu van',
  hidesSubmenu: false,
  showAccessibleLabel: 'Toon submenu van',
  showsSubmenu: true,
}

export const MenuContext = createContext(defaultValues)
