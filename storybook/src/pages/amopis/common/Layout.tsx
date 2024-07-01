import { Grid, PageMenu, Screen, SkipLink } from '@amsterdam/design-system-react'
import { HTMLAttributes } from 'react'
import type { PropsWithChildren } from 'react'
import { Sidebar } from './SideBar'
import { SiteHeader } from './SiteHeader'

type LayoutProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Layout = ({ children }: LayoutProps) => (
  <>
    <SkipLink href="#main">Direct naar inhoud</SkipLink>
    <Screen className="ams-theme ams-theme--compact" maxWidth="x-wide">
      <div className="ams-docs-amopis-app-grid">
        <Sidebar />
        <div className="ams-docs-amopis-app-content">
          <SiteHeader />
          <div id="main" className="ams-docs-amopis-main-background">
            {children}
          </div>
          <Grid paddingVertical="small">
            <Grid.Cell span="all">
              <PageMenu>
                <PageMenu.Link href="#">Kerngegevens</PageMenu.Link>
                <PageMenu.Link href="#">Ramingen</PageMenu.Link>
                <PageMenu.Link href="#">E-mail je vraag of feedback</PageMenu.Link>
                <PageMenu.Link href="#">Bekijk veelgestelde vragen</PageMenu.Link>
                <PageMenu.Link href="#">Bekijk releasebeschrijving</PageMenu.Link>
                <PageMenu.Link href="#">Prototypes</PageMenu.Link>
              </PageMenu>
            </Grid.Cell>
          </Grid>
        </div>
      </div>
    </Screen>
  </>
)
