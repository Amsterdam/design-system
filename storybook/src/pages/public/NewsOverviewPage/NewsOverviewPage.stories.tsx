/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card, Column, Grid, Heading, Paragraph } from '@amsterdam/design-system-react'

import { commonMeta } from '../common/config'
import { latestNews, moreNews } from './data'

const meta = {
  ...commonMeta,
  title: 'Pages/Public/News Overview Page',
  render: () => (
    <main id="inhoud">
      <Grid paddingBottom="x-large" paddingTop="large">
        <Grid.Cell span="all">
          <Heading level={1}>Nieuws</Heading>
        </Grid.Cell>
        {latestNews.map(({ title, description, image }, index) => (
          <Grid.Cell key={title} span={index === 0 ? { narrow: 4, medium: 8, wide: 4 } : 4}>
            <Card>
              <Card.Image alt="" src={image} />
              <Card.HeadingGroup tagline="Nieuws">
                <Card.Heading level={2}>
                  <Card.Link href="#">{title}</Card.Link>
                </Card.Heading>
              </Card.HeadingGroup>
              <Paragraph>{description}</Paragraph>
            </Card>
          </Grid.Cell>
        ))}
      </Grid>
      <Grid paddingBottom="x-large">
        <Grid.Cell span={11}>
          <Heading level={2}>Meer nieuws</Heading>
        </Grid.Cell>
        {moreNews.map(({ title, date, description, image }) => (
          <Grid.Cell key={title} span={{ narrow: 4, medium: 8, wide: 10 }}>
            <Card>
              <Card.Image alt="" src={image} />
              <Card.HeadingGroup tagline="Nieuws">
                <Card.Heading level={3}>
                  <Card.Link href="#">{title}</Card.Link>
                </Card.Heading>
              </Card.HeadingGroup>
              <Column gap="small">
                <Paragraph>{description}</Paragraph>
                <Paragraph size="small">{date}</Paragraph>
              </Column>
            </Card>
          </Grid.Cell>
        ))}
      </Grid>
    </main>
  ),
} satisfies Meta

export default meta

export const Default: StoryObj = {}
