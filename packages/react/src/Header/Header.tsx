/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, ReactNode } from 'react'
import { Heading } from '../Heading'
import { Logo } from '../Logo'
import type { LogoBrand } from '../Logo'
import { VisuallyHidden } from '../VisuallyHidden'

export type HeaderProps = {
  logoBrand?: LogoBrand
  logoLink?: string
  logoLinkTitle?: string
  title?: string
  links?: ReactNode
  menu?: ReactNode
} & HTMLAttributes<HTMLElement>

export const Header = forwardRef(
  (
    {
      className,
      logoBrand = 'amsterdam',
      logoLink = '/',
      logoLinkTitle = 'Ga naar de homepage',
      title,
      links,
      menu,
      ...restProps
    }: HeaderProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    return (
      <>
        <header {...restProps} ref={ref} className={clsx('amsterdam-header', className)}>
          <a href={logoLink} className="amsterdam-header__logo-link">
            <VisuallyHidden>{logoLinkTitle}</VisuallyHidden>
            <Logo brand={logoBrand} />
          </a>
          {links && <div className="amsterdam-header__links">{links}</div>}
          {menu && <div className="amsterdam-header__menu">{menu}</div>}
          {title && (
            <div className="amsterdam-header__title">
              <Heading level={1} size="level-3" className="amsterdam-header__title-heading">
                {title}
              </Heading>
            </div>
          )}
        </header>
      </>
    )
  },
)

Header.displayName = 'Header'
