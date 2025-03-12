/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'

export type TabsContextValue = {
  /** The identifier of the active tab. */
  activeTabId?: string
  /**
   * The identifier for the entire Tabs component.
   * This lets you have several Tabs components, possibly with the same tabs, on one page.
   */
  tabsId: string
  /** A function to update the active tab. */
  updateTab: (tab: string) => void
}

const defaultValues: TabsContextValue = {
  activeTabId: undefined,
  tabsId: '',
  updateTab: () => {},
}

export const TabsContext = createContext(defaultValues)
