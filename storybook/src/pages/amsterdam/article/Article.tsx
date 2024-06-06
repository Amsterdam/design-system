import { Breadcrumb, Footer, Grid, Header, Screen, SkipLink } from '@amsterdam/design-system-react'
import type { BreadcrumbProps, FooterProps } from '@amsterdam/design-system-react'
import { ReactElement } from 'react'
import { ArticleContent } from './ArticleContent'
import { ArticleHeader } from './ArticleHeader'

type ArticleProps = {
  breadcrumb: ReactElement<BreadcrumbProps>
  footer: ReactElement<FooterProps>
  heading: string
  imageAlt: string
  imageSrc: string
}

export const Article = ({ breadcrumb, footer, heading, imageAlt, imageSrc }: ArticleProps) => (
  <>
    <SkipLink href="#main">Direct naar inhoud</SkipLink>
    <Screen maxWidth="wide">
      <Grid>
        <Grid.Cell span="all">
          <Header menu={<button className="ams-header__menu-button">Menu</button>} />
        </Grid.Cell>
      </Grid>
      <Grid paddingTop="medium">
        <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Breadcrumb>{breadcrumb}</Breadcrumb>
        </Grid.Cell>
      </Grid>
      <ArticleHeader imageAlt={imageAlt} imageSrc={imageSrc} heading={heading} />
      <ArticleContent />
      <Footer>{footer}</Footer>
    </Screen>
  </>
)
