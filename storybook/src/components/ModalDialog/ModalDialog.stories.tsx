/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ModalDialogProps } from '@amsterdam/design-system-react/src'
import type { Decorator, Meta, StoryObj } from '@storybook/react-vite'

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
import { ModalDialog } from '@amsterdam/design-system-react/src'
import { useState } from 'react'
import { action } from 'storybook/actions'

import { dialogIdArgType } from '#storybook/_common/argTypes'

const longObjection =
  'Op 3 maart 2024 ontving ik uw besluit over de aanvraag voor een omgevingsvergunning aan de Voorbeeldstraat 12. ' +
  'Ik maak bezwaar tegen dit besluit en licht hieronder toe waarom ik het er niet mee eens ben.'

const openButtonDecorator: Decorator = (Story, { args }) => (
  <>
    <Button
      onClick={() => {
        action('open')()
        ModalDialog.open(`#${args['id']}`)
      }}
    >
      Open
    </Button>
    <Story />
  </>
)

/* Opens the dialog as a modal on mount, so the story shows it with its backdrop right away. */
const openModally = (dialog: HTMLDialogElement | null) => {
  if (dialog && !dialog.open) {
    dialog.showModal()
  }
}

const meta = {
  title: 'Components/Containers/Modal Dialog',
  component: ModalDialog,
  argTypes: {
    id: dialogIdArgType,
  },
} satisfies Meta<typeof ModalDialog>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    'aria-labelledby': 'ams-modal-dialog-default-heading',
    children: (
      <>
        <ModalDialog.Header>
          <Heading id="ams-modal-dialog-default-heading" level={1} size="level-2">
            Notitie toevoegen
          </Heading>
        </ModalDialog.Header>
        <ModalDialog.Body>
          <form id="ams-modal-dialog-note-form" method="dialog">
            <Column gap="small">
              <Field>
                <Label htmlFor="ams-modal-dialog-note-subject">Onderwerp</Label>
                <TextInput id="ams-modal-dialog-note-subject" name="subject" />
              </Field>
              <Field>
                <Label htmlFor="ams-modal-dialog-note-text">Notitie</Label>
                <TextArea id="ams-modal-dialog-note-text" name="note" rows={4} />
              </Field>
            </Column>
          </form>
        </ModalDialog.Body>
        <ModalDialog.Footer>
          <ActionGroup>
            <Button form="ams-modal-dialog-note-form" onClick={action('save')} type="submit" value="save">
              Opslaan
            </Button>
            <Button
              onClick={(event) => {
                action('cancel')()
                return ModalDialog.close(event)
              }}
              variant="secondary"
            >
              Annuleren
            </Button>
          </ActionGroup>
        </ModalDialog.Footer>
      </>
    ),
    id: 'ams-modal-dialog-default',
  },
  decorators: [openButtonDecorator],
  parameters: {
    docs: {
      story: {
        // Render this story in its own iframe, so the modal’s top-layer backdrop covers only the example, not the whole docs page.
        iframeHeight: '40rem',
        inline: false,
      },
    },
  },
  render: (args) => <ModalDialog {...args} ref={openModally} />,
}

export const WithSubtitle: Story = {
  args: {
    'aria-labelledby': 'ams-modal-dialog-with-subtitle-heading',
    children: (
      <>
        <ModalDialog.Header>
          <Heading id="ams-modal-dialog-with-subtitle-heading" level={1} size="level-2">
            Reactie versturen
          </Heading>
          <Paragraph size="small">Plan Nieuw-West, fase 2</Paragraph>
        </ModalDialog.Header>
        <ModalDialog.Body>
          <Paragraph>Controleer uw gegevens voordat u uw reactie verstuurt.</Paragraph>
        </ModalDialog.Body>
        <ModalDialog.Footer>
          <Button
            onClick={(event) => {
              action('close')()
              return ModalDialog.close(event)
            }}
          >
            Sluiten
          </Button>
        </ModalDialog.Footer>
      </>
    ),
    id: 'ams-modal-dialog-with-subtitle',
  },
  decorators: [openButtonDecorator],
}

export const WithScrollingBody: Story = {
  args: {
    'aria-labelledby': 'ams-modal-dialog-scrolling-heading',
    children: (
      <>
        <ModalDialog.Header>
          <Heading id="ams-modal-dialog-scrolling-heading" level={1} size="level-2">
            Bezwaar beoordelen
          </Heading>
          <Paragraph size="small">Bezwaar 2024-00842</Paragraph>
        </ModalDialog.Header>
        <ModalDialog.Body>
          <Column gap="small">
            <Paragraph>{longObjection}</Paragraph>
            <Paragraph>
              De onderbouwing gaat niet in op de gevolgen voor de parkeerdruk in de straat. In de huidige situatie is er
              overdag al nauwelijks plek. Naar mijn idee is niet onderzocht wat het extra verkeer betekent voor de
              bewoners die hier al jaren wonen.
            </Paragraph>
            <Paragraph>
              Ik verzoek u het besluit te heroverwegen en de aanvraag opnieuw te beoordelen, met aandacht voor de punten
              die ik noem. Graag ontvang ik binnen de wettelijke termijn een reactie. Mocht u vragen hebben, dan licht
              ik mijn bezwaar uiteraard graag mondeling toe.
            </Paragraph>
          </Column>
        </ModalDialog.Body>
        <ModalDialog.Footer>
          <ActionGroup>
            <Button
              onClick={(event) => {
                action('grant')()
                return ModalDialog.close(event)
              }}
            >
              Toewijzen
            </Button>
            <Button
              onClick={(event) => {
                action('reject')()
                return ModalDialog.close(event)
              }}
              variant="secondary"
            >
              Afwijzen
            </Button>
          </ActionGroup>
        </ModalDialog.Footer>
      </>
    ),
    id: 'ams-modal-dialog-scrolling',
  },
  decorators: [openButtonDecorator],
}

const ControlledExample = (args: ModalDialogProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <ModalDialog {...args} onClose={() => setOpen(false)} open={open}>
        <ModalDialog.Header>
          <Heading id="ams-modal-dialog-controlled-heading" level={1} size="level-2">
            Weergavenaam wijzigen
          </Heading>
        </ModalDialog.Header>
        <ModalDialog.Body>
          <Field>
            <Label htmlFor="ams-modal-dialog-controlled-name">Weergavenaam</Label>
            <TextInput defaultValue="A. de Vries" id="ams-modal-dialog-controlled-name" name="display-name" />
          </Field>
        </ModalDialog.Body>
        <ModalDialog.Footer>
          <ActionGroup>
            <Button onClick={() => setOpen(false)}>Opslaan</Button>
            <Button onClick={() => setOpen(false)} variant="secondary">
              Annuleren
            </Button>
          </ActionGroup>
        </ModalDialog.Footer>
      </ModalDialog>
    </>
  )
}

export const Controlled: Story = {
  args: {
    'aria-labelledby': 'ams-modal-dialog-controlled-heading',
    id: 'ams-modal-dialog-controlled',
  },
  render: (args) => <ControlledExample {...args} />,
}
