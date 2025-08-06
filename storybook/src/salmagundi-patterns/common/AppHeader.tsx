import { Grid, PageHeader, LinkList } from '@amsterdam/design-system-react'
import styles from './styles.module.css'

export const AppHeader = () => {
  return (
    <PageHeader
      className={styles.Pageheader}
      brandName="Application"
      menuItems={[
        <PageHeader.MenuLink key="1" href="#">
          Dashboard
        </PageHeader.MenuLink>,
        <PageHeader.MenuLink key="2" href="#">
          Category 1
        </PageHeader.MenuLink>,
        <PageHeader.MenuLink key="3" href="#">
          Category 1
        </PageHeader.MenuLink>,
        <PageHeader.MenuLink key="5" href="#">
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
