import { createContext } from 'react'

export type TabsContextValue = {
  activeTab: number
  // eslint-disable-next-line no-unused-vars
  updateTab: (tab: number) => void
}

const defaultValues: TabsContextValue = {
  activeTab: 0,
  updateTab: () => {},
}

const TabsContext = createContext(defaultValues)

export default TabsContext
