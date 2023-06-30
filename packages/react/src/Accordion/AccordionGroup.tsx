/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import type { ReactNode } from 'react'
import { useRef } from 'react'
import useFocusWithArrows from './useFocusWithArrows'

interface Props {
  children?: ReactNode
}

export const AccordionGroup = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const { keyDown } = useFocusWithArrows(ref, true)
  return (
    <div role="button" tabIndex={-1} onKeyDown={keyDown} ref={ref}>
      {children}
    </div>
  )
}
