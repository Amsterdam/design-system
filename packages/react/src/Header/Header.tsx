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

        // let headerMenuColWidth = headerMenuCol ? headerMenuCol.getBoundingClientRect().width : 0
        // // let headerMenuWidth = headerMenu ? headerMenu.getBoundingClientRect().width : 0
        // let headerMenuItems = headerMenu ? headerMenu.querySelectorAll('.amsterdam-page-menu__item') : []

        // let headerMenuWidth = Array.from(headerMenuItems).reduce((totalWidth, item) => {
        //   return totalWidth + item.getBoundingClientRect().width
        // }, 0)

        // if (headerMenu) {
        //   const children = Array.from(headerMenu.children) as HTMLElement[]

        //   children.forEach((child) => {
        //     const childWidth = child.getBoundingClientRect().width
        //     headerMenuWidth += childWidth
        //   })
        // }

        // console.log(headerMenuColWidth, headerMenuWidth)

        // if (headerMenuColWidth < headerMenuWidth) {
        //   const headerMenuVisibleItems = getComputedStyle(headerMenu as HTMLElement).getPropertyValue(
        //     '--amsterdam-page-menu-visible-items',
        //   )
        if (headerMenu) (headerMenu as HTMLElement).style.setProperty('--amsterdam-page-menu-visible-items', `4`)
        // }

        console.log(getComputedStyle(headerMenu as HTMLElement).getPropertyValue('--amsterdam-page-menu-visible-items'))
      }
      window.addEventListener('resize', handleResize)
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
        {menu && <div className="amsterdam-header__column amsterdam-header__column--menu">{menu}</div>}
      </header>
    )
  },
)

Header.displayName = 'Header'
