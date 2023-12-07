/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, ReactNode, useEffect } from 'react'
import { Heading } from '../Heading'
import { Logo, LogoBrand } from '../Logo'
import { VisuallyHidden } from '../VisuallyHidden'

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  logoBrand?: LogoBrand
  logoLink?: string
  logoLinkTitle?: string
  title?: string
  menu?: ReactNode
}

export const Header = forwardRef(
  (
    {
      className,
      logoBrand = 'amsterdam',
      logoLink = '/',
      logoLinkTitle = 'Ga naar de homepage',
      title,
      menu,
      ...restProps
    }: HeaderProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    useEffect(() => {
      const handleResize = () => {
        const headerMenuCol = document.querySelector('.amsterdam-header__column--menu')
        const headerMenu = headerMenuCol?.querySelector('.amsterdam-page-menu')

        const headerMenuElement = headerMenu as HTMLElement

        let headerMenuColLeft = headerMenuCol ? headerMenuCol.getBoundingClientRect().left : 0
        let headerMenuFirstItem = Array.from(headerMenuElement.children).find((child) => child.clientWidth > 0)
        let headerMenuFirstItemLeft = headerMenuFirstItem?.getBoundingClientRect().left
        // let headerMenuFirstHiddenItem = Array.from(headerMenuElement.children).find((child) => child.clientWidth === 0)

        if (headerMenuFirstItemLeft && headerMenu) {
          if (headerMenuColLeft > headerMenuFirstItemLeft - 20) {
            headerMenuFirstItem?.classList.add('amsterdam-page-menu__item--hide')
            headerMenuElement.style.setProperty(
              '--amsterdam-page-menu-visible-items',
              (headerMenu.childElementCount - 1).toString(),
            )
          }
        }

        // console.log(getComputedStyle(headerMenu as HTMLElement).getPropertyValue('--amsterdam-page-menu-visible-items'))
      }
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])

    return (
      <header
        {...restProps}
        ref={ref}
        className={clsx(
          'amsterdam-header',
          title && 'amsterdam-header--has-title',
          menu && 'amsterdam-header--has-menu',
          className,
        )}
      >
        <div className="amsterdam-header__column amsterdam-header__column--logo">
          <a href={logoLink} className="amsterdam-header__logo-link">
            <VisuallyHidden>{logoLinkTitle}</VisuallyHidden>
            <Logo brand={logoBrand} />
          </a>
        </div>
        {title && (
          <div className="amsterdam-header__column amsterdam-header__column--title">
            <Heading level={3} size="level-3">
              {title}
            </Heading>
          </div>
        )}
        {menu && (
          <div className="amsterdam-header__column amsterdam-header__column--menu">
            <div className="amsterdam-header__menu-wrapper">{menu}</div>
          </div>
        )}
      </header>
    )
  },
)

Header.displayName = 'Header'
