import { createContext, useContext } from 'react'

export type AppContextType = {
  appNavigationOpen: boolean
  setAppNavigationOpen: (open: boolean) => void
}

export const AppContext = createContext<AppContextType | undefined>(undefined)

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppContext.Provider')
  }
  return context
}
