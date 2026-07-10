/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { CSSProperties } from 'react'

import { ActionGroup, Button, Paragraph } from '@amsterdam/design-system-react'
import { Dialog } from '@amsterdam/design-system-react/src'
import { expect, within } from 'storybook/test'

const meta = {
  title: 'Components/Containers/Dialog',
  component: Dialog,
  args: { heading: 'Dialoogvenster' },
} satisfies Meta<typeof Dialog>

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

    // A button in the footer can close the dialog through Dialog.close
    await userEvent.click(openButton)
    await userEvent.click(within(dialog).getByRole('button', { name: 'Stoppen' }))
    await expect(dialog).not.toBeVisible()
  },
  render: () => (
    <>
      <div className="_ams-tests-stack">
        <Dialog
          footer={<Button>Sluiten</Button>}
          heading="De gegevens zijn opgeslagen"
          ref={showNonModally}
          style={inFlow}
        >
          <Paragraph>U ontvangt een bevestiging per e-mail.</Paragraph>
        </Dialog>
        <Dialog
          footer={
            <ActionGroup>
              <Button>Doorgaan</Button>
              <Button variant="secondary">Stoppen</Button>
            </ActionGroup>
          }
          heading="Niet alle gegevens zijn opgeslagen"
          ref={showNonModally}
          style={inFlow}
        >
          <Paragraph>
            Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Gegevens die nog niet opgeslagen zijn
            gaan dan verloren.
          </Paragraph>
        </Dialog>
        <Dialog
          footer={
            <ActionGroup>
              <Button>Ingelogd blijven</Button>
              <Button variant="secondary">Nu afmelden</Button>
            </ActionGroup>
          }
          heading="Uw sessie verloopt bijna"
          ref={showNonModally}
          style={inFlow}
        >
          <Paragraph>Zonder activiteit wordt u over 2 minuten automatisch afgemeld.</Paragraph>
        </Dialog>
        <Dialog
          heading="Een lange kop die over meerdere regels doorloopt naast de sluitknop"
          ref={showNonModally}
          style={{ ...inFlow, maxInlineSize: '24rem' }}
        >
          <Paragraph>De sluitknop hoort naast de eerste regel van de kop te staan.</Paragraph>
        </Dialog>
      </div>
      <Button onClick={() => Dialog.open('#dialog-interactions')}>Open de interactietest</Button>
      <Dialog
        data-testid="interaction-dialog"
        footer={<Button onClick={Dialog.close}>Stoppen</Button>}
        heading="De gegevens zijn opgeslagen"
        id="dialog-interactions"
      >
        <Paragraph>U ontvangt een bevestiging per e-mail.</Paragraph>
      </Dialog>
    </>
  ),
  tags: ['!dev', '!autodocs'],
}
