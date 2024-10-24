/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { MegaMenuListCategory } from './MegaMenuListCategory'

export type MegaMenuProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

const MegaMenuRoot = forwardRef(
  ({ children, className, ...restProps }: MegaMenuProps, ref: ForwardedRef<HTMLElement>) => (
    <nav {...restProps} ref={ref} className={clsx('ams-mega-menu', className)}>
      {children}
    </nav>
  ),
)

MegaMenuRoot.displayName = 'MegaMenu'

/** @deprecated Use Grid, Heading, and LinkList instead, and probably an upcoming Columns component. */
export const MegaMenu = Object.assign(MegaMenuRoot, { ListCategory: MegaMenuListCategory })
