/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'

// `true` keeps the current default behavior for collapsible TOCs: nested lists start collapsed.
export const TableOfContentsListContext = createContext(true)
