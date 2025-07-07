/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ReactNode } from 'react'
import { useAppContext } from './AppContext'
import { Icon } from '../Icon'
import { PageHeader } from '../PageHeader/PageHeader'
import { PageHeaderMenuIcon } from '../PageHeader/PageHeaderMenuIcon'

type AppHeaderProps = {
  appName: string
  appNavigation?: ReactNode
  menuButtonText?: string
}

export const AppHeader = ({ appName, appNavigation, menuButtonText = 'Menu' }: AppHeaderProps) => {
  const { appNavigationOpen, setAppNavigationOpen } = useAppContext()

  const NavigationToggle = () => {
    return (
      <li className="ams-app-header__menu-toggle">
        <button
          aria-controls="ams-app-navigation-menu"
          aria-expanded={appNavigationOpen}
          className="ams-page-header__mega-menu-button"
          onClick={() => {
            setAppNavigationOpen(!appNavigationOpen)
            console.log('Navigation toggle clicked', appNavigationOpen)
          }}
          type="button"
        >
          <span className="ams-page-header__mega-menu-button-label">{menuButtonText}</span>
          <span aria-hidden="true" className="ams-page-header__mega-menu-button-hidden-label">
            {menuButtonText}
          </span>
          <Icon
            svg={
              <PageHeaderMenuIcon
                className={clsx('ams-page-header__menu-icon', appNavigationOpen && 'ams-page-header__menu-icon--open')}
              />
            }
          />
        </button>
      </li>
    )
  }

  return (
    <PageHeader
      appNavigation={
        <>
          {appNavigation}
          <NavigationToggle />
        </>
      }
      brandName={appName}
      className="ams-app-header"
      menuItems={false}
      noMenuButtonOnWideWindow
    />
  )
}

AppHeader.displayName = 'App.Header'
