/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { PageHeader } from '@amsterdam/design-system-react/src'

export const AppHeader = () => {
  return (
    <PageHeader
      appnavigation
      brandName="Application"
      menuItems={[
        <PageHeader.MenuLink href="#" key="1">
          Inloggen
        </PageHeader.MenuLink>,
      ]}
      noMenuButtonOnWideWindow
    ></PageHeader>
  )
}
