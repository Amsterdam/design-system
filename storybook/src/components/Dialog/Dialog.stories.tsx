/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ActionGroup, Button, Paragraph } from '@aram-limpens/design-system-react'
import { Dialog } from '@aram-limpens/design-system-react/src'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Containers/Dialog',
  component: Dialog,
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
  decorators: [
    (Story, { args }) => (
      <>
        <Button
          onClick={() => {
            action('open')()
            Dialog.open(`#${args.id}`)
          }}
        >
          Open
        </Button>
        <Story />
      </>
    ),
  ],
} satisfies Meta<typeof Dialog>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <Paragraph>U ontvangt een bevestiging per e-mail.</Paragraph>,
    footer: (
      <Button
        onClick={(event) => {
          action('close')()
          return Dialog.close(event)
        }}
      >
        Sluiten
      </Button>
    ),
    heading: 'De gegevens zijn opgeslagen',
    id: 'ams-dialog-default',
  },
}

export const Confirmation: Story = {
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
        <Button form="ams-dialog-form" onClick={action('continue')} type="submit" value="submit">
          Doorgaan
        </Button>
        <Button
          onClick={(event) => {
            action('cancel')()
            return Dialog.close(event)
          }}
          variant="tertiary"
        >
          Stoppen
        </Button>
      </ActionGroup>
    ),
    heading: 'Niet alle gegevens zijn opgeslagen',
    id: 'ams-dialog-asking-to-confirm',
  },
}
