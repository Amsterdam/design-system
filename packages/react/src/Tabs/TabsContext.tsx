/**
 * @license EUPL-1.2+
 * Copyright (c) 2024 Gemeente Amsterdam
 */

import { createContext } from 'react'

export type TabsContextValue = {
  activeTab: number
  // eslint-disable-next-line no-unused-vars
  updateTab: (tab: number) => void
  tabsId: string
}

const defaultValues: TabsContextValue = {
  activeTab: 0,
  updateTab: () => {},
  tabsId: '',
}

export const TabsContext = createContext(defaultValues)
