import { createContext, useState } from 'react'
import type { Dispatch, ReactNode, SetStateAction } from 'react'

export const MegaMenuNavigationContext = createContext<{ open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }>({
  open: false,
  setOpen: () => {},
})

export const MegaMenuNavigationContextProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false)

  return <MegaMenuNavigationContext.Provider value={{ open, setOpen }}>{children}</MegaMenuNavigationContext.Provider>
}
