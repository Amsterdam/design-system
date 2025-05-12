/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { PageFooterMenu } from './PageFooterMenu'
import { PageFooterMenuLink } from './PageFooterMenuLink'
import { PageFooterSpotlight } from './PageFooterSpotlight'

export type PageFooterProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

const PageFooterRoot = forwardRef(
  ({ children, className, ...restProps }: PageFooterProps, ref: ForwardedRef<HTMLElement>) => (
    <footer {...restProps} className={clsx('ams-page-footer', className)} ref={ref}>
      {children}
    </footer>
  ),
)

PageFooterRoot.displayName = 'PageFooter'

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-page-footer--docs PageFooter docs at Amsterdam Design System}
 */
export const PageFooter = Object.assign(PageFooterRoot, {
  Menu: PageFooterMenu,
  MenuLink: PageFooterMenuLink,
  Spotlight: PageFooterSpotlight,
})
