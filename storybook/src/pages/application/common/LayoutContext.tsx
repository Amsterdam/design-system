import React, { createContext, ReactNode, useContext, useState } from 'react'

type LayoutContextType = {
  appNavigationOpen: boolean
  setAppNavigationOpen: (open: boolean) => void
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined)

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [appNavigationOpen, setAppNavigationOpen] = useState(false)

  return <LayoutContext.Provider value={{ appNavigationOpen, setAppNavigationOpen }}>{children}</LayoutContext.Provider>
}

export const useLayoutContext = () => {
  const context = useContext(LayoutContext)
  if (!context) {
    throw new Error('useLayoutContext must be used within a LayoutProvider')
  }
  return context
}
