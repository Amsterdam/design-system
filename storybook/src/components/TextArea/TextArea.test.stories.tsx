/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { TextArea } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants'
import { default as textAreaMeta } from './TextArea.stories'

const meta = {
  ...textAreaMeta,
  title: 'Components/Forms/Text Area',
} satisfies Meta<typeof TextArea>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    defaultValue:
      'Het waterrijke achterland van de provincie Holland was een paradijs voor vissers. Maar terwijl de visserij floreerde in Holland, was Amsterdam eigenlijk helemaal geen visserijstad. Toch maakten Amsterdammers naam in de vishandel. Zij speelden namelijk een cruciale rol bij het klaarmaken en vervoeren van haring.',
  },
  render: (args) => renderComponentVariants(TextArea, { args, variants: ['disabled', 'hovered'] }),
  tags: ['!dev', '!autodocs'],
}
