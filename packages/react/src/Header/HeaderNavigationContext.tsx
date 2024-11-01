import { createContext, useState } from 'react'
import type { Dispatch, ReactNode, SetStateAction } from 'react'

export const HeaderNavigationContext = createContext<{ open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }>({
  open: false,
  setOpen: () => {},
})

export const HeaderNavigationContextProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false)

  return <HeaderNavigationContext.Provider value={{ open, setOpen }}>{children}</HeaderNavigationContext.Provider>
}
