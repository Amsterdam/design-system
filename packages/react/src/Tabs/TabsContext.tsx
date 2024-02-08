import { createContext } from 'react'

export type TabsContextValue = {
  activeTab: number
}

const defaultValues: TabsContextValue = {
  activeTab: 0,
}

const TabsContext = createContext(defaultValues)

export default TabsContext
