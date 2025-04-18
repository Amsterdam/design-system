/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'

export type TabsContextValue = {
  /** The identifier of the active tab. */
  activeTabId?: string
  /** A function to update the active tab. */
  updateTab: (tab: string) => void
}

const defaultValues: TabsContextValue = {
  activeTabId: undefined,
  updateTab: () => {},
}

export const TabsContext = createContext(defaultValues)
