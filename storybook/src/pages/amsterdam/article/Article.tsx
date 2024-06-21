import { Footer, Screen, SkipLink } from '@amsterdam/design-system-react'
import type { FooterProps } from '@amsterdam/design-system-react'
import { ReactElement } from 'react'
import { ArticleBody } from './ArticleBody'
import { ArticleBreadcrumb } from './ArticleBreadcrumb'
import { ArticleHeader } from './ArticleHeader'
import { AppHeader } from '../common/AppHeader'

export type ArticleProps = {
  footer: ReactElement<FooterProps>
  heading: string
  imageSrc: string
  lead: string
  paragraph1: string
  spotlightHeading: string
  spotlightLinkLabel: string
}

export const Article = ({
  footer,
  heading,
  imageSrc,
  lead,
  paragraph1,
  spotlightHeading,
  spotlightLinkLabel,
}: ArticleProps) => (
  <>
    <SkipLink href="#main">Direct naar inhoud</SkipLink>
    <Screen maxWidth="wide">
      <AppHeader />
      <ArticleBreadcrumb />
      <main id="main">
        <ArticleHeader heading={heading} imageSrc={imageSrc} />
        <ArticleBody
          lead={lead}
          paragraph1={paragraph1}
          spotlightHeading={spotlightHeading}
          spotlightLinkLabel={spotlightLinkLabel}
        />
      </main>
      <Footer>{footer}</Footer>
    </Screen>
  </>
)
