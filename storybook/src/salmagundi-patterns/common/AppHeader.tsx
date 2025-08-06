import { Grid, LinkList, PageHeader } from '@amsterdam/design-system-react'
import styles from './styles.module.css'

export const AppHeader = () => {
  return (
    <PageHeader
      brandName="Application"
      className={styles.Pageheader}
      menuItems={[
        <PageHeader.MenuLink href="#" key="1">
          Dashboard
        </PageHeader.MenuLink>,
        <PageHeader.MenuLink href="#" key="2">
          Category 1
        </PageHeader.MenuLink>,
        <PageHeader.MenuLink href="#" key="3">
          Category 1
        </PageHeader.MenuLink>,
        <PageHeader.MenuLink href="#" key="5">
          Settings
        </PageHeader.MenuLink>,
      ]}
      noMenuButtonOnWideWindow
    >
      <Grid paddingVertical="large">
        <PageHeader.GridCellNarrowWindowOnly span="all">
          <LinkList>
            <LinkList.Link href="#">Dashboard</LinkList.Link>
            <LinkList.Link href="#">Category 1</LinkList.Link>
            <LinkList.Link href="#">Category 2</LinkList.Link>
            <LinkList.Link href="#">Settings</LinkList.Link>
          </LinkList>
        </PageHeader.GridCellNarrowWindowOnly>
      </Grid>
    </PageHeader>
  )
}
