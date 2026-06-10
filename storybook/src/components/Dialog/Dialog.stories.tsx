/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ActionGroup, Button, Heading, Paragraph } from '@amsterdam/design-system-react'
import { Dialog } from '@amsterdam/design-system-react/src'
import { action } from 'storybook/actions'

const meta = {
  title: 'Components/Containers/Dialog',
  component: Dialog,
  argTypes: {
    closeButtonLabel: {
      table: { disable: true },
    },
    footer: {
      table: { disable: true },
    },
    heading: {
      table: { disable: true },
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
    'aria-labelledby': 'ams-dialog-example-heading',
    children: (
      <>
        <Dialog.Header>
          <Heading id="ams-dialog-example-heading" level={1} size="level-3">
            De gegevens zijn opgeslagen
          </Heading>
          <Dialog.CloseButton
            onClick={(event) => {
              action('close')()
              return Dialog.close(event)
            }}
          />
        </Dialog.Header>
        <Dialog.Body>
          <Paragraph>U ontvangt een bevestiging per e-mail.</Paragraph>
        </Dialog.Body>
        <Dialog.Footer>
          <Button
            onClick={(event) => {
              action('close')()
              return Dialog.close(event)
            }}
          >
            Sluiten
          </Button>
        </Dialog.Footer>
      </>
    ),
    id: 'ams-dialog-example',
  },
}

export const Confirmation: Story = {
  args: {
    'aria-labelledby': 'ams-dialog-confirmation-heading',
    children: (
      <>
        <Dialog.Header>
          <Heading id="ams-dialog-confirmation-heading" level={1} size="level-3">
            Niet alle gegevens zijn opgeslagen
          </Heading>
          <Dialog.CloseButton
            onClick={(event) => {
              action('cancel')()
              return Dialog.close(event)
            }}
          />
        </Dialog.Header>
        <Dialog.Body>
          <form id="ams-dialog-form" method="dialog">
            <Paragraph>
              Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Gegevens die nog niet opgeslagen zijn
              gaan dan verloren.
            </Paragraph>
          </form>
        </Dialog.Body>
        <Dialog.Footer>
          <ActionGroup>
            <Button form="ams-dialog-form" onClick={action('continue')} type="submit" value="submit">
              Doorgaan
            </Button>
            <Button
              onClick={(event) => {
                action('cancel')()
                return Dialog.close(event)
              }}
              variant="secondary"
            >
              Stoppen
            </Button>
          </ActionGroup>
        </Dialog.Footer>
      </>
    ),
    id: 'ams-dialog-confirmation',
  },
}

/**
 * The `heading`, `footer`, and `closeButtonLabel` props are deprecated.
 * They will be removed on or after 2026-11-06.
 * Use the composable `Dialog.Header`, `Dialog.Body`, `Dialog.Footer`, and `Dialog.CloseButton` subcomponents instead.
 */
export const LegacyProps: Story = {
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
    id: 'ams-dialog-legacy',
  },
  argTypes: {
    closeButtonLabel: {
      table: { disable: false },
    },
    footer: {
      table: { disable: false },
    },
    heading: {
      table: { disable: false },
    },
  },
}
