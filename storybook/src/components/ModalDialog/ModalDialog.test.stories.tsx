/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { CSSProperties } from 'react'

import {
  ActionGroup,
  Button,
  Column,
  Field,
  Heading,
  Label,
  Paragraph,
  TextArea,
  TextInput,
} from '@amsterdam/design-system-react'
import { SaintAndrewsCrossesIcon } from '@amsterdam/design-system-react-icons'
import { ModalDialog } from '@amsterdam/design-system-react/src'
import { expect, within } from 'storybook/test'

import { default as modalDialogMeta } from './ModalDialog.stories'

const meta = {
  ...modalDialogMeta,
  title: 'Components/Containers/Modal Dialog',
} satisfies Meta<typeof ModalDialog>

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
  '--ams-modal-dialog-max-block-size': '12rem',
  '--ams-modal-dialog-vi-medium-max-block-size': '12rem',
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

    // Opens as a modal, with initial focus on the close button
    await userEvent.click(openButton)

    const dialog = canvas.getByTestId('interaction-dialog')

    await expect(dialog).toBeVisible()

    const closeButton = within(dialog).getByRole('button', { name: 'Sluiten' })

    await expect(closeButton).toHaveFocus()

    // The close button closes the dialog and returns focus to the trigger
    await userEvent.click(closeButton)
    await expect(dialog).not.toBeVisible()
    await expect(openButton).toHaveFocus()

    // A button in the footer can close the dialog through ModalDialog.close
    await userEvent.click(openButton)
    await userEvent.click(within(dialog).getByRole('button', { name: 'Stoppen' }))
    await expect(dialog).not.toBeVisible()
  },
  render: () => (
    <>
      <div className="_ams-tests-stack">
        <ModalDialog aria-labelledby="test-form-heading" ref={showNonModally} style={inFlow}>
          <ModalDialog.Header>
            <Heading id="test-form-heading" level={1} size="level-3">
              Notitie toevoegen
            </Heading>
          </ModalDialog.Header>
          <ModalDialog.Body>
            <form method="dialog">
              <Column gap="small">
                <Field>
                  <Label htmlFor="test-note-subject">Onderwerp</Label>
                  <TextInput id="test-note-subject" />
                </Field>
                <Field>
                  <Label htmlFor="test-note-text">Notitie</Label>
                  <TextArea id="test-note-text" rows={3} />
                </Field>
              </Column>
            </form>
          </ModalDialog.Body>
          <ModalDialog.Footer>
            <ActionGroup>
              <Button>Opslaan</Button>
              <Button variant="secondary">Annuleren</Button>
            </ActionGroup>
          </ModalDialog.Footer>
        </ModalDialog>
        <ModalDialog aria-labelledby="test-subtitle-heading" ref={showNonModally} style={inFlow}>
          <ModalDialog.Header>
            <Heading id="test-subtitle-heading" level={1} size="level-3">
              Reactie versturen
            </Heading>
            <Paragraph size="small">Plan Nieuw-West, fase 2</Paragraph>
          </ModalDialog.Header>
          <ModalDialog.Body>
            <Paragraph>Controleer uw gegevens voordat u uw reactie verstuurt.</Paragraph>
          </ModalDialog.Body>
          <ModalDialog.Footer>
            <Button>Sluiten</Button>
          </ModalDialog.Footer>
        </ModalDialog>
        <ModalDialog aria-labelledby="test-custom-icon-heading" ref={showNonModally} style={inFlow}>
          <ModalDialog.Header closeButtonIcon={SaintAndrewsCrossesIcon}>
            <Heading id="test-custom-icon-heading" level={1} size="level-3">
              Melding versturen
            </Heading>
          </ModalDialog.Header>
          <ModalDialog.Body>
            <Paragraph>Wij nemen uw melding binnen één werkdag in behandeling.</Paragraph>
          </ModalDialog.Body>
        </ModalDialog>
        <ModalDialog
          aria-labelledby="test-long-heading-heading"
          ref={showNonModally}
          style={{ ...inFlow, maxInlineSize: '24rem' }}
        >
          <ModalDialog.Header>
            <Heading id="test-long-heading-heading" level={1} size="level-3">
              Een lange kop die over meerdere regels doorloopt naast de sluitknop
            </Heading>
          </ModalDialog.Header>
          <ModalDialog.Body>
            <Paragraph>De sluitknop hoort naast de eerste regel van de kop te staan.</Paragraph>
          </ModalDialog.Body>
        </ModalDialog>
        <ModalDialog aria-labelledby="test-short-window-heading" ref={showNonModally} style={shortWindow}>
          <ModalDialog.Header>
            <Heading id="test-short-window-heading" level={1} size="level-3">
              Een dialoogvenster in een verticaal krap venster
            </Heading>
          </ModalDialog.Header>
          <ModalDialog.Body>
            <Paragraph>{longText}</Paragraph>
          </ModalDialog.Body>
          <ModalDialog.Footer>
            <Button>Sluiten</Button>
          </ModalDialog.Footer>
        </ModalDialog>
      </div>
      <Button onClick={() => ModalDialog.open('#test-interactions')}>Open de interactietest</Button>
      <ModalDialog aria-labelledby="test-interactions-heading" data-testid="interaction-dialog" id="test-interactions">
        <ModalDialog.Header>
          <Heading id="test-interactions-heading" level={1} size="level-3">
            De gegevens zijn opgeslagen
          </Heading>
        </ModalDialog.Header>
        <ModalDialog.Body>
          <Paragraph>U ontvangt een bevestiging per e-mail.</Paragraph>
        </ModalDialog.Body>
        <ModalDialog.Footer>
          <Button onClick={ModalDialog.close}>Stoppen</Button>
        </ModalDialog.Footer>
      </ModalDialog>
    </>
  ),
  tags: ['!dev', '!autodocs'],
}
