/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'

export type TabsContextValue = {
  /** The identifier of the initially active tab. */
  activeTab: number
  /** The identifier of the tab set. */
  tabsId: string
  /** A function to update the active tab. */
  updateTab: (tab: number) => void
}

const defaultValues: TabsContextValue = {
  activeTab: 0,
  tabsId: '',
  updateTab: () => {},
}

export const TabsContext = createContext(defaultValues)
