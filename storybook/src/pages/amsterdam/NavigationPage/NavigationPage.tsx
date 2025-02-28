/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Breadcrumb, Grid } from '@amsterdam/design-system-react'
import type { PropsWithChildren } from 'react'

type NavigationPageProps = PropsWithChildren<{}>

export const NavigationPage = ({ children }: NavigationPageProps) => (
  <>
    <Grid paddingTop="small">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }}>
        <Breadcrumb>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        </Breadcrumb>
      </Grid.Cell>
    </Grid>
    <main id="main">{children}</main>
  </>
)
