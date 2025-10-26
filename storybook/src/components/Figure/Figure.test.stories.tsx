/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Figure } from '@amsterdam/design-system-react/src'

import { default as figureMeta } from './Figure.stories'

const meta = {
  ...figureMeta,
  title: 'Components/Media/Figure',
} satisfies Meta<typeof Figure.Caption>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ams-space-s)' }}>
      <Figure {...args}>
        <img
          alt=""
          sizes="(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1440px"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Concertgebouw3x2.jpg/330px-Concertgebouw3x2.jpg"
        />
        <Figure.Caption>
          Een schuin geplaatste fiets tegen een lantaarnpaal, met op de achtergrond een karakteristiek houten bruggetje.
        </Figure.Caption>
      </Figure>
      <Figure {...args} style={{ backgroundColor: 'var(--ams-color-highlight-azure)' }}>
        <img
          alt=""
          sizes="(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1440px"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Concertgebouw3x2.jpg/330px-Concertgebouw3x2.jpg"
        />
        <Figure.Caption color="inverse">
          Een schuin geplaatste fiets tegen een lantaarnpaal, met op de achtergrond een karakteristiek houten bruggetje.
        </Figure.Caption>
      </Figure>
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
