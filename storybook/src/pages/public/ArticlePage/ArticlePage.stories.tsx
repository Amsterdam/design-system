/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Breadcrumb,
  Card,
  Grid,
  Heading,
  Image,
  LinkList,
  Paragraph,
  Spotlight,
  StandaloneLink,
} from '@amsterdam/design-system-react'
import parse from 'html-react-parser'
import { Fragment } from 'react'

import type { NewsArticle } from './news-articles'

import { formatDate } from '../../../common'
import { commonMeta } from '../common/config'
import { newsSection } from '../HomePage/data'
import { newsArticles } from './news-articles'
import { parserOptions } from './parser.config'

const meta = {
  ...commonMeta,
  title: 'Pages/Public/Article Page',

  render: (args) => (
    <>
      <Grid paddingTop="large">
        <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Nieuws</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      <Grid as="main" id="inhoud" paddingBottom="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Heading className="ams-mb-s" level={1}>
            {args.heading}
          </Heading>
          <Paragraph className="ams-mb-xl">{formatDate(args.published)}</Paragraph>
          <Paragraph size="large">{args.lead}</Paragraph>
        </Grid.Cell>
      </Grid>
      <Image
        alt={args.image.alt ?? ''}
        aspectRatio="16:5"
        loading="lazy"
        src={args.image.src}
        srcSet={args.image.srcSet}
      />
      <Grid paddingVertical="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          {args.sections.map(({ body, heading, id }) => (
            <Fragment key={id}>
              <Heading className="ams-mb-s" level={2}>
                {heading}
              </Heading>
              {parse(body, parserOptions)}
            </Fragment>
          ))}
          <Heading className="ams-mb-s" level={2}>
            Lees ook
          </Heading>
          <LinkList>
            {args.relatedArticles?.map(({ heading, url }) => (
              <LinkList.Link href={url} key={url}>
                {heading}
              </LinkList.Link>
            ))}
          </LinkList>
        </Grid.Cell>
      </Grid>
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
        <Grid gapVertical="large" paddingVertical="x-large">
          <Grid.Cell span="all">
            <Heading level={2} size="level-1">
              Meer nieuws
            </Heading>
          </Grid.Cell>
          {newsSection.items.map((item, index) => (
            <Grid.Cell key={index} span={4}>
              <Card>
                <Card.Image alt="" src={item.image} />
                <Card.HeadingGroup tagline="Nieuws">
                  <Card.Heading level={3}>
                    <Card.Link href="#">{item.title}</Card.Link>
                  </Card.Heading>
                </Card.HeadingGroup>
                <Paragraph>{item.description}</Paragraph>
              </Card>
            </Grid.Cell>
          ))}
        </Grid>
      </aside>
    </>
  ),
} satisfies Meta<NewsArticle>

export default meta

const getArgsFromNewsArticle = (id: number): NewsArticle | undefined => {
  return newsArticles.find((article) => article.id === id)
}

export const Default: StoryObj = {
  args: getArgsFromNewsArticle(1),
}
