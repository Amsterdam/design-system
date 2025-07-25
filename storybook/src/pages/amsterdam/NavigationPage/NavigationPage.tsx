/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Breadcrumb, Grid } from '@aram-limpens/design-system-react'
import type { PropsWithChildren } from 'react'

type NavigationPageProps = PropsWithChildren<{}>

export const NavigationPage = ({ children }: NavigationPageProps) => (
  <>
    <Grid>
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }}>
        <Breadcrumb>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        </Breadcrumb>
      </Grid.Cell>
    </Grid>
    {children}
  </>
)
