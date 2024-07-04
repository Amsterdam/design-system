import { ArticleBody } from './ArticleBody'
import { ArticleBreadcrumb } from './ArticleBreadcrumb'
import { ArticleHeader } from './ArticleHeader'

export type ArticlePageProps = {
  heading: string
  imageSrc: string
  lead: string
  paragraph1: string
  spotlightHeading: string
  spotlightLinkLabel: string
}

export const ArticlePage = ({
  heading,
  imageSrc,
  lead,
  paragraph1,
  spotlightHeading,
  spotlightLinkLabel,
}: ArticlePageProps) => (
  <>
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
  </>
)
