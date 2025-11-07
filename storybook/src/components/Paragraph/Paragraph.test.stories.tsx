/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { default as paragraphMeta } from './Paragraph.stories'

const meta = {
  ...paragraphMeta,
  title: 'Components/Text/Paragraph',
} satisfies Meta<typeof Paragraph>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    children:
      'Het waterrijke achterland van de provincie Holland was een paradijs voor vissers. Maar terwijl de visserij floreerde in Holland, was Amsterdam eigenlijk helemaal geen visserijstad. Toch maakten Amsterdammers naam in de vishandel. Zij speelden namelijk een cruciale rol bij het klaarmaken en vervoeren van haring.',
  },
  render: (args) => renderComponentVariants(Paragraph, { args }),
  tags: ['!dev', '!autodocs'],
}
