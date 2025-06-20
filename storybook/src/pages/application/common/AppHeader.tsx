/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { PageHeader } from '@amsterdam/design-system-react'

export const AppHeader = () => {
  return (
    <PageHeader
      brandName="Application"
      menuItems={[
        <PageHeader.MenuLink href="#" key="1">
          Dashboard
        </PageHeader.MenuLink>,
        <PageHeader.MenuLink fixed href="#" key="2">
          Inloggen
        </PageHeader.MenuLink>,
      ]}
      noMenuButtonOnWideWindow
    ></PageHeader>
  )
}
