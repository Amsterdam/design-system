/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { MegaMenuListCategory } from './MegaMenuListCategory'

export type MegaMenuProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const MegaMenuRoot = forwardRef(
  ({ children, className, ...restProps }: MegaMenuProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('ams-mega-menu', className)}>
      {children}
    </div>
  ),
)

MegaMenuRoot.displayName = 'MegaMenu'

/** @deprecated Use child components in Header instead. */
export const MegaMenu = Object.assign(MegaMenuRoot, { ListCategory: MegaMenuListCategory })
