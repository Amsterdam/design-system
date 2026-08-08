/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Decorator, Meta, StoryObj } from '@storybook/react-vite'

import { ActionGroup, Button, Heading, Paragraph } from '@amsterdam/design-system-react'
import { AlertDialog } from '@amsterdam/design-system-react/src'
import { useState } from 'react'
import { action } from 'storybook/actions'

import { dialogIdArgType } from '#storybook/_common/argTypes'

/* Opens the dialog non-modally and in the document flow, so the example shows inline in the docs
without a trigger. This lives in a decorator so the code panel shows only the composition. */
const showInlineDecorator: Decorator = (Story) => (
  <div
    ref={(element) => {
      const dialog = element?.querySelector('dialog')

      if (dialog && !dialog.open) {
        dialog.style.position = 'static'
        // Set the open attribute instead of calling show(), which would move focus here and scroll the docs page.
        dialog.open = true
      }
    }}
  >
    <Story />
  </div>
)

const openButtonDecorator: Decorator = (Story, { args }) => (
  <>
    <Button
      onClick={() => {
        action('open')()
        AlertDialog.open(`#${args['id']}`)
      }}
    >
      Open
    </Button>
    <Story />
  </>
)

const meta = {
  title: 'Components/Containers/Alert Dialog',
  component: AlertDialog,
  argTypes: {
    'aria-describedby': {
      description: 'The id of the message in the Body. Announced together with the accessible name.',
    },
    'aria-labelledby': {
      description: 'The id of the heading that labels the dialog. Provides its accessible name.',
    },
    id: dialogIdArgType,
  },
  subcomponents: {
    'AlertDialog.Body': AlertDialog.Body,
    'AlertDialog.Footer': AlertDialog.Footer,
    'AlertDialog.Header': AlertDialog.Header,
  },
} satisfies Meta<typeof AlertDialog>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [showInlineDecorator],
  render: () => (
    <AlertDialog aria-describedby="ams-alert-dialog-default-body" aria-labelledby="ams-alert-dialog-default-heading">
      <AlertDialog.Header>
        <Heading id="ams-alert-dialog-default-heading" level={1} size="level-3">
          Uw sessie is verlopen
        </Heading>
      </AlertDialog.Header>
      <AlertDialog.Body>
        <Paragraph id="ams-alert-dialog-default-body">Log opnieuw in om verder te gaan.</Paragraph>
      </AlertDialog.Body>
      <AlertDialog.Footer>
        <Button onClick={AlertDialog.close}>Opnieuw inloggen</Button>
      </AlertDialog.Footer>
    </AlertDialog>
  ),
}

export const WithSeverity: Story = {
  decorators: [showInlineDecorator],
  render: () => (
    <AlertDialog
      aria-describedby="ams-alert-dialog-with-severity-body"
      aria-labelledby="ams-alert-dialog-with-severity-heading"
    >
      <AlertDialog.Header severity="warning">
        <Heading id="ams-alert-dialog-with-severity-heading" level={1} size="level-3">
          Er zijn niet-opgeslagen wijzigingen
        </Heading>
      </AlertDialog.Header>
      <AlertDialog.Body>
        <Paragraph id="ams-alert-dialog-with-severity-body">
          Als u doorgaat, gaan uw wijzigingen verloren. Wilt u eerst opslaan?
        </Paragraph>
      </AlertDialog.Body>
      <AlertDialog.Footer>
        <ActionGroup>
          <Button onClick={AlertDialog.close}>Opslaan</Button>
          <Button onClick={AlertDialog.close} variant="secondary">
            Doorgaan zonder opslaan
          </Button>
        </ActionGroup>
      </AlertDialog.Footer>
    </AlertDialog>
  ),
}

export const Confirmation: Story = {
  args: {
    id: 'ams-alert-dialog-confirmation',
  },
  decorators: [openButtonDecorator],
  render: (args) => (
    <AlertDialog
      {...args}
      aria-describedby="ams-alert-dialog-confirmation-body"
      aria-labelledby="ams-alert-dialog-confirmation-heading"
    >
      <AlertDialog.Header>
        <Heading id="ams-alert-dialog-confirmation-heading" level={1} size="level-3">
          Wilt u dit bestand verwijderen?
        </Heading>
      </AlertDialog.Header>
      <AlertDialog.Body>
        <form id="ams-alert-dialog-form" method="dialog">
          <Paragraph id="ams-alert-dialog-confirmation-body">
            U kunt het bestand ‘Begroting 2026.pdf’ hierna niet meer terughalen.
          </Paragraph>
        </form>
      </AlertDialog.Body>
      <AlertDialog.Footer>
        <ActionGroup>
          <Button form="ams-alert-dialog-form" type="submit" value="delete">
            Verwijderen
          </Button>
          <Button form="ams-alert-dialog-form" type="submit" value="cancel" variant="secondary">
            Annuleren
          </Button>
        </ActionGroup>
      </AlertDialog.Footer>
    </AlertDialog>
  ),
}

export const SessionExpiring: Story = {
  args: {
    id: 'ams-alert-dialog-session-expiring',
  },
  decorators: [openButtonDecorator],
  render: (args) => (
    <AlertDialog
      {...args}
      aria-describedby="ams-alert-dialog-session-expiring-body"
      aria-labelledby="ams-alert-dialog-session-expiring-heading"
    >
      <AlertDialog.Header>
        <Heading id="ams-alert-dialog-session-expiring-heading" level={1} size="level-3">
          Uw sessie verloopt bijna
        </Heading>
      </AlertDialog.Header>
      <AlertDialog.Body>
        <Paragraph id="ams-alert-dialog-session-expiring-body">
          Zonder activiteit wordt u over 2 minuten automatisch afgemeld.
        </Paragraph>
      </AlertDialog.Body>
      <AlertDialog.Footer>
        <ActionGroup>
          <Button
            onClick={(event) => {
              action('continue')()
              return AlertDialog.close(event)
            }}
          >
            Ingelogd blijven
          </Button>
          <Button
            onClick={(event) => {
              action('sign-out')()
              return AlertDialog.close(event)
            }}
            variant="secondary"
          >
            Nu afmelden
          </Button>
        </ActionGroup>
      </AlertDialog.Footer>
    </AlertDialog>
  ),
}

export const Controlled: Story = {
  parameters: {
    docs: {
      source: {
        code: `const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Open</Button>
<AlertDialog
  aria-describedby="ams-alert-dialog-controlled-body"
  aria-labelledby="ams-alert-dialog-controlled-heading"
  onClose={() => setOpen(false)}
  open={open}
>
  <AlertDialog.Header>
    <Heading id="ams-alert-dialog-controlled-heading" level={1} size="level-3">
      Uw sessie verloopt bijna
    </Heading>
  </AlertDialog.Header>
  <AlertDialog.Body>
    <Paragraph id="ams-alert-dialog-controlled-body">Zonder activiteit wordt u over 2 minuten afgemeld.</Paragraph>
  </AlertDialog.Body>
  <AlertDialog.Footer>
    <Button onClick={() => setOpen(false)}>Doorgaan met mijn sessie</Button>
  </AlertDialog.Footer>
</AlertDialog>`,
        language: 'tsx',
      },
    },
  },
  render: function Controlled() {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <AlertDialog
          aria-describedby="ams-alert-dialog-controlled-body"
          aria-labelledby="ams-alert-dialog-controlled-heading"
          onClose={() => setOpen(false)}
          open={open}
        >
          <AlertDialog.Header>
            <Heading id="ams-alert-dialog-controlled-heading" level={1} size="level-3">
              Uw sessie verloopt bijna
            </Heading>
          </AlertDialog.Header>
          <AlertDialog.Body>
            <Paragraph id="ams-alert-dialog-controlled-body">
              Zonder activiteit wordt u over 2 minuten afgemeld.
            </Paragraph>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button onClick={() => setOpen(false)}>Doorgaan met mijn sessie</Button>
          </AlertDialog.Footer>
        </AlertDialog>
      </>
    )
  },
}
