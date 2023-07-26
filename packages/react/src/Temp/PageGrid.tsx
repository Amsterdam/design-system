/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { PropsWithChildren } from 'react'

export type PageGridColumnNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type PageGridProps = PropsWithChildren<{}>

export const PageGrid = ({ children }: PageGridProps) => <div className="amsterdam-page-grid">{children}</div>

PageGrid.displayName = 'PageGrid'
