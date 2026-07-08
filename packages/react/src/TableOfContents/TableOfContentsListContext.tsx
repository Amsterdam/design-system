/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createContext } from 'react'

// `false` keeps the current default behavior for collapsible TOCs: nested lists start collapsed (not expanded).
export const TableOfContentsListContext = createContext(false)
