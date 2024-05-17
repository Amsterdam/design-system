import {
  Breadcrumb,
  BreadcrumbProps,
  Footer,
  FooterProps,
  Grid,
  Header,
  Screen,
  SkipLink,
} from '@amsterdam/design-system-react'
import { ReactElement } from 'react'
import { AmsterdamArticleContent } from './AmsterdamArticleContent'
import { AmsterdamArticleHeader } from './AmsterdamArticleHeader'

export type AmsterdamArticlePageProps = {
  articleImage?: string
  articleImageAlt?: string
  breadcrumbs?: ReactElement<BreadcrumbProps>
  footer?: ReactElement<FooterProps>
}

export const AmsterdamArticlePage = ({
  articleImage = '',
  articleImageAlt = '',
  breadcrumbs,
  footer,
}: AmsterdamArticlePageProps) => {
  return (
    <>
      <SkipLink href="#main">Direct naar inhoud</SkipLink>
      <Screen maxWidth="wide">
        <Grid>
          <Grid.Cell span="all">
            <Header menu={<button className="ams-header__menu-button">Menu</button>} />
          </Grid.Cell>
        </Grid>

        {breadcrumbs && (
          <Grid paddingTop="medium">
            <Grid.Cell span="all">
              <Breadcrumb>{breadcrumbs}</Breadcrumb>
            </Grid.Cell>
          </Grid>
        )}

        <AmsterdamArticleHeader src={articleImage} alt={articleImageAlt} />

        <AmsterdamArticleContent />

        <Footer>{footer}</Footer>
      </Screen>
    </>
  )
}
