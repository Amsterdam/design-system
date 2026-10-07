/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'

type MenuContextValue = {
  /** Whether the Menu never shows a submenu: it is the wide-window instance and cannot be expanded. */
  hidesSubmenu: boolean
}

const defaultValues: MenuContextValue = {
  hidesSubmenu: false,
}

export const MenuContext = createContext(defaultValues)
