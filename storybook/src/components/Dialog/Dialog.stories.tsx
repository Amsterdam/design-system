/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ActionGroup, Button, Column, Heading, Paragraph } from '@amsterdam/design-system-react'
import { Dialog } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { exampleHeading, exampleParagraph } from '../shared/exampleContent'

const heading = exampleHeading()
const paragraph = exampleParagraph()

const meta = {
  title: 'Components/Containers/Dialog',
  component: Dialog,
  args: {
    children: (
      <form id="ams-dialog-form" method="dialog">
        <Paragraph>
          Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Gegevens die nog niet opgeslagen zijn gaan
          dan verloren.
        </Paragraph>
      </form>
    ),
    footer: (
      <ActionGroup>
        <Button form="ams-dialog-form" type="submit" value="submit">
          Doorgaan
        </Button>
        <Button onClick={Dialog.close} variant="tertiary">
          Stoppen
        </Button>
      </ActionGroup>
    ),
    heading: 'Niet alle gegevens zijn opgeslagen',
  },
  argTypes: {
    footer: {
      table: { disable: true },
    },
    heading: {
      description: 'The text for the heading.',
    },
    open: {
      description: 'Whether the dialog box is active and available for interaction.',
    },
  },
} satisfies Meta<typeof Dialog>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'ams-dialog',
  },
  decorators: [
    (Story) => (
      <Column alignHorizontal="start">
        <Heading level={1}>{heading}</Heading>
        <Paragraph>{paragraph}</Paragraph>
        <Button onClick={() => Dialog.open('#ams-dialog')}>Open dialoog</Button>
        <Story />
      </Column>
    ),
  ],
}
