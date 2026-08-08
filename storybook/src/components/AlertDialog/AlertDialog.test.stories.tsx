/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { CSSProperties } from 'react'

import { ActionGroup, Button, Heading, Paragraph } from '@amsterdam/design-system-react'
import { AlertDialog } from '@amsterdam/design-system-react/src'
import { expect, within } from 'storybook/test'

import { default as alertDialogMeta } from './AlertDialog.stories'

const meta = {
  ...alertDialogMeta,
  title: 'Components/Containers/Alert Dialog',
} satisfies Meta<typeof AlertDialog>

export default meta

type Story = StoryObj<typeof meta>

/* Opens the dialogs non-modally, so that multiple variants can be shown and snapshotted together. */
const showNonModally = (dialog: HTMLDialogElement | null) => {
  if (dialog && !dialog.open) {
    dialog.show()
  }
}

/* Keeps a non-modal dialog in the document flow instead of overlaying its container. */
const inFlow: CSSProperties = { position: 'static' }

/* Simulates a vertically short window to test the scrolling of dialog and body. */
const shortWindow: CSSProperties = {
  ...inFlow,
  '--ams-alert-dialog-max-block-size': '12rem',
  '--ams-alert-dialog-vi-medium-max-block-size': '12rem',
} as CSSProperties

const longText =
  'Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen, ' +
  'bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen in ' +
  'de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’ meteen ' +
  'weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo makkelijker ' +
  'om weer een nieuwe baan te zoeken.'

export const Test: Story = {
  play: async ({ canvas, userEvent }) => {
    const openButton = canvas.getByRole('button', { name: 'Open de interactietest' })

    // Opens as a modal, with initial focus on the first action button (there is no close button)
    await userEvent.click(openButton)

    const dialog = canvas.getByTestId('interaction-dialog')

    await expect(dialog).toBeVisible()

    const confirmButton = within(dialog).getByRole('button', { name: 'Opnieuw inloggen' })

    await expect(confirmButton).toHaveFocus()

    // An action in the footer closes the dialog through AlertDialog.close and returns focus to the trigger
    await userEvent.click(confirmButton)
    await expect(dialog).not.toBeVisible()
    await expect(openButton).toHaveFocus()
  },
  render: () => (
    <>
      <div className="_ams-tests-stack">
        <AlertDialog aria-labelledby="test-default-heading" ref={showNonModally} style={inFlow}>
          <AlertDialog.Header>
            <Heading id="test-default-heading" level={1} size="level-3">
              Uw sessie is verlopen
            </Heading>
          </AlertDialog.Header>
          <AlertDialog.Body>
            <Paragraph>Log opnieuw in om verder te gaan.</Paragraph>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button>Opnieuw inloggen</Button>
          </AlertDialog.Footer>
        </AlertDialog>
        <AlertDialog aria-labelledby="test-warning-heading" ref={showNonModally} style={inFlow}>
          <AlertDialog.Header severity="warning">
            <Heading id="test-warning-heading" level={1} size="level-3">
              Er zijn niet-opgeslagen wijzigingen
            </Heading>
          </AlertDialog.Header>
          <AlertDialog.Body>
            <Paragraph>Als u doorgaat, gaan uw wijzigingen verloren.</Paragraph>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <ActionGroup>
              <Button>Opslaan</Button>
              <Button variant="secondary">Doorgaan zonder opslaan</Button>
            </ActionGroup>
          </AlertDialog.Footer>
        </AlertDialog>
        <AlertDialog aria-labelledby="test-error-heading" ref={showNonModally} style={inFlow}>
          <AlertDialog.Header severity="error">
            <Heading id="test-error-heading" level={1} size="level-3">
              Het bestand kon niet worden geüpload
            </Heading>
          </AlertDialog.Header>
          <AlertDialog.Body>
            <Paragraph>Probeer het later opnieuw.</Paragraph>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button>Oké</Button>
          </AlertDialog.Footer>
        </AlertDialog>
        <AlertDialog aria-labelledby="test-success-heading" ref={showNonModally} style={inFlow}>
          <AlertDialog.Header severity="success">
            <Heading id="test-success-heading" level={1} size="level-3">
              Uw aanvraag is verstuurd
            </Heading>
          </AlertDialog.Header>
          <AlertDialog.Body>
            <Paragraph>U ontvangt een bevestiging per e-mail.</Paragraph>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button>Oké</Button>
          </AlertDialog.Footer>
        </AlertDialog>
        <AlertDialog
          aria-labelledby="test-long-heading-heading"
          ref={showNonModally}
          style={{ ...inFlow, maxInlineSize: '24rem' }}
        >
          <AlertDialog.Header severity="warning">
            <Heading id="test-long-heading-heading" level={1} size="level-3">
              Een lange kop die over meerdere regels doorloopt naast het pictogram
            </Heading>
          </AlertDialog.Header>
          <AlertDialog.Body>
            <Paragraph>Het pictogram hoort naast de eerste regel van de kop te staan.</Paragraph>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button>Oké</Button>
          </AlertDialog.Footer>
        </AlertDialog>
        <AlertDialog aria-labelledby="test-short-window-heading" ref={showNonModally} style={shortWindow}>
          <AlertDialog.Header>
            <Heading id="test-short-window-heading" level={1} size="level-3">
              Een dialoogvenster in een verticaal krap venster
            </Heading>
          </AlertDialog.Header>
          <AlertDialog.Body>
            <Paragraph>{longText}</Paragraph>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button>Oké</Button>
          </AlertDialog.Footer>
        </AlertDialog>
      </div>
      <Button onClick={() => AlertDialog.open('#test-interactions')}>Open de interactietest</Button>
      <AlertDialog
        aria-describedby="test-interactions-body"
        aria-labelledby="test-interactions-heading"
        data-testid="interaction-dialog"
        id="test-interactions"
      >
        <AlertDialog.Header>
          <Heading id="test-interactions-heading" level={1} size="level-3">
            Uw sessie is verlopen
          </Heading>
        </AlertDialog.Header>
        <AlertDialog.Body>
          <Paragraph id="test-interactions-body">Log opnieuw in om verder te gaan.</Paragraph>
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <Button onClick={AlertDialog.close}>Opnieuw inloggen</Button>
        </AlertDialog.Footer>
      </AlertDialog>
    </>
  ),
  tags: ['!dev', '!autodocs', '!manifest'],
}
