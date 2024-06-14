import { Breadcrumb, Footer, Grid, Screen, SkipLink } from '@amsterdam/design-system-react'
import type { FooterProps } from '@amsterdam/design-system-react'
import { ReactElement } from 'react'
import { ArticleBody } from './ArticleBody'
import { ArticleHeader } from './ArticleHeader'
import { AppHeader } from '../common/AppHeader'

type ArticleProps = {
  footer: ReactElement<FooterProps>
  heading: string
  imageAlt: string
  imageSrc: string
}

export const Article = ({ footer, heading, imageAlt, imageSrc }: ArticleProps) => (
  <>
    <SkipLink href="#main">Direct naar inhoud</SkipLink>
    <Screen maxWidth="wide">
      <AppHeader />
      <Grid paddingTop="medium">
        <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Nieuws</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      <ArticleHeader imageAlt={imageAlt} imageSrc={imageSrc} heading={heading} />
      <ArticleBody />
      <Footer>{footer}</Footer>
    </Screen>
  </>
)
