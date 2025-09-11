/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import {
  Breadcrumb,
  Grid,
  Heading,
  Image,
  LinkList,
  Paragraph,
  Spotlight,
  StandaloneLink,
} from '@amsterdam/design-system-react'
import parse from 'html-react-parser'
import type { NewsArticle, NewsArticleSection } from './news-articles'
import { parserOptions } from './parser.config'
import { formatDate } from '../../../common'
import { HomeNews } from '../HomePage/HomeNews'

export type ArticlePageProps = NewsArticle

const Section = ({ body, heading }: NewsArticleSection) => (
  <>
    <Heading className="ams-mb-s" level={2}>
      {heading}
    </Heading>
    {parse(body, parserOptions)}
  </>
)

export const ArticlePage = ({
  heading,
  image: { alt = '', src, srcSet },
  lead,
  published,
  relatedArticles,
  sections,
}: ArticlePageProps) => (
  <>
    <Grid paddingTop="large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Breadcrumb>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          <Breadcrumb.Link href="#">Nieuws</Breadcrumb.Link>
        </Breadcrumb>
      </Grid.Cell>
    </Grid>
    <main id="inhoud">
      <Grid paddingBottom="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Heading className="ams-mb-s" level={1}>
            {heading}
          </Heading>
          <Paragraph className="ams-mb-xl">{formatDate(published)}</Paragraph>
          <Paragraph size="large">{lead}</Paragraph>
        </Grid.Cell>
      </Grid>
      <Image alt={alt} aspectRatio="16:5" loading="lazy" src={src} srcSet={srcSet} />
      <Grid paddingVertical="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          {sections.map((props) => (
            <Section key={props.id} {...props} />
          ))}
          <Heading className="ams-mb-s" level={2}>
            Lees ook
          </Heading>
          <LinkList>
            {relatedArticles?.map(({ heading, url }) => (
              <LinkList.Link href={url} key={url}>
                {heading}
              </LinkList.Link>
            ))}
          </LinkList>
        </Grid.Cell>
      </Grid>
    </main>
    <Spotlight as="aside" color="green">
      <Grid paddingVertical="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
            Blijf op de hoogte!
          </Heading>
          <Paragraph className="ams-mb-m" color="inverse">
            Schrijf u nu in voor de Nieuwsbrief Amsterdam en ontvang wekelijks nieuws, tips en mooie verhalen over de
            stad en uw stadsdeel.
          </Paragraph>
          <StandaloneLink color="inverse" href="#">
            Ik wil de nieuwsbrief
          </StandaloneLink>
        </Grid.Cell>
      </Grid>
    </Spotlight>
    <aside>
      <HomeNews heading="Meer nieuws" />
    </aside>
  </>
)
