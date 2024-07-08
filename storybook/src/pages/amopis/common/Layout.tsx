import { Grid, PageMenu, Screen, SkipLink } from '@amsterdam/design-system-react'
import { HTMLAttributes } from 'react'
import type { PropsWithChildren } from 'react'
import { Sidebar } from './Sidebar'
import { SiteHeader } from './SiteHeader'

type LayoutProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Layout = ({ children }: LayoutProps) => (
  <>
    <SkipLink href="#main">Direct naar inhoud</SkipLink>
    <Screen className="ams-theme ams-theme--compact ams-application-screen" maxWidth="x-wide">
      <div className="ams-application-container">
        <Sidebar />
        <div className="ams-application-content">
          <SiteHeader />
          <div id="main" className="ams-application-body">
            {children}
          </div>
          <Grid paddingVertical="small">
            <Grid.Cell span="all">
              <PageMenu>
                <PageMenu.Link href="#">E-mail je vraag of feedback</PageMenu.Link>
                <PageMenu.Link href="#">Bekijk veelgestelde vragen</PageMenu.Link>
                <PageMenu.Link href="#">Bekijk releasebeschrijving</PageMenu.Link>
              </PageMenu>
            </Grid.Cell>
          </Grid>
        </div>
      </div>
    </Screen>
  </>
)
