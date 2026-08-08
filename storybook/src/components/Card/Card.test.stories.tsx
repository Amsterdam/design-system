/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card, Metadata } from '@amsterdam/design-system-react/src'

import { default as cardMeta } from './Card.stories'

const meta = {
  ...cardMeta,
  title: 'Components/Navigation/Card',
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

const NewsCard = () => (
  <Card>
    <Card.Image alt="" aspectRatio="4:3" src="https://picsum.photos/id/122/1280/720" />
    <Card.Content>
      <Card.HeadingGroup>
        <Card.Heading level={3}>
          <Card.Link href="/">Nederlands eerste houten woonwijk komt in Zuidoost</Card.Link>
          <Card.Link className="hover" href="/">
            Nederlands eerste houten woonwijk komt in Zuidoost
          </Card.Link>
        </Card.Heading>
        <Metadata size="small">Nieuws</Metadata>
      </Card.HeadingGroup>
      <div>
        <p>We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.</p>
      </div>
    </Card.Content>
  </Card>
)

/*
 * Both sides of the 36rem container width at which a Card with an image and a Content switches to a
 * horizontal layout. Each Card sits in its own query container, so one snapshot covers both layouts.
 */
export const Test: Story = {
  render: () => (
    <div className="_ams-tests-stack">
      <div className="ams-query-container-inline-size" style={{ inlineSize: '24rem' }}>
        <NewsCard />
      </div>
      <div className="ams-query-container-inline-size" style={{ inlineSize: '35.9375rem' }}>
        <NewsCard />
      </div>
      <div className="ams-query-container-inline-size" style={{ inlineSize: '48rem' }}>
        <NewsCard />
      </div>
    </div>
  ),
  tags: ['!dev', '!autodocs', '!manifest'],
}
