import { createContext } from 'react'

export type TabsContextValue = {
  activeTab: number
  // eslint-disable-next-line no-unused-vars
  updateTab: (tab: number) => void
  tabsId?: string
}

const defaultValues: TabsContextValue = {
  activeTab: 0,
  updateTab: () => {},
  tabsId: undefined,
}

export const TabsContext = createContext(defaultValues)
