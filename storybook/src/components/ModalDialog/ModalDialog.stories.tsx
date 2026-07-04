/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ModalDialogProps } from '@amsterdam/design-system-react/src'
import type { Decorator, Meta, StoryObj } from '@storybook/react-vite'

import { ActionGroup, Button, Heading, Paragraph } from '@amsterdam/design-system-react'
import { SaintAndrewsCrossesIcon } from '@amsterdam/design-system-react-icons'
import { ModalDialog } from '@amsterdam/design-system-react/src'
import { useState } from 'react'
import { action } from 'storybook/actions'

import { dialogIdArgType } from '#storybook/_common/argTypes'

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
          <Heading id="ams-modal-dialog-default-heading" level={1} size="level-3">
            De gegevens zijn opgeslagen
          </Heading>
        </ModalDialog.Header>
        <ModalDialog.Body>
          <Paragraph>U ontvangt een bevestiging per e-mail.</Paragraph>
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
    id: 'ams-modal-dialog-default',
  },
  decorators: [openButtonDecorator],
}

export const WithSubtitle: Story = {
  args: {
    'aria-labelledby': 'ams-modal-dialog-with-subtitle-heading',
    children: (
      <>
        <ModalDialog.Header>
          <Heading id="ams-modal-dialog-with-subtitle-heading" level={1} size="level-3">
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

export const Confirmation: Story = {
  args: {
    'aria-labelledby': 'ams-modal-dialog-confirmation-heading',
    children: (
      <>
        <ModalDialog.Header>
          <Heading id="ams-modal-dialog-confirmation-heading" level={1} size="level-3">
            Niet alle gegevens zijn opgeslagen
          </Heading>
        </ModalDialog.Header>
        <ModalDialog.Body>
          <form id="ams-modal-dialog-form" method="dialog">
            <Paragraph>
              Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Gegevens die nog niet opgeslagen zijn
              gaan dan verloren.
            </Paragraph>
          </form>
        </ModalDialog.Body>
        <ModalDialog.Footer>
          <ActionGroup>
            <Button form="ams-modal-dialog-form" onClick={action('continue')} type="submit" value="submit">
              Doorgaan
            </Button>
            <Button
              onClick={(event) => {
                action('cancel')()
                return ModalDialog.close(event)
              }}
              variant="secondary"
            >
              Stoppen
            </Button>
          </ActionGroup>
        </ModalDialog.Footer>
      </>
    ),
    id: 'ams-modal-dialog-confirmation',
  },
  decorators: [openButtonDecorator],
}

export const CustomCloseIcon: Story = {
  args: {
    'aria-labelledby': 'ams-modal-dialog-custom-close-icon-heading',
    children: (
      <>
        <ModalDialog.Header closeButtonIcon={SaintAndrewsCrossesIcon}>
          <Heading id="ams-modal-dialog-custom-close-icon-heading" level={1} size="level-3">
            Melding versturen
          </Heading>
        </ModalDialog.Header>
        <ModalDialog.Body>
          <Paragraph>Wij nemen uw melding binnen één werkdag in behandeling.</Paragraph>
        </ModalDialog.Body>
      </>
    ),
    id: 'ams-modal-dialog-custom-close-icon',
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
          <Heading id="ams-modal-dialog-controlled-heading" level={1} size="level-3">
            Uw sessie verloopt bijna
          </Heading>
        </ModalDialog.Header>
        <ModalDialog.Body>
          <Paragraph>Zonder activiteit wordt u over 2 minuten afgemeld.</Paragraph>
        </ModalDialog.Body>
        <ModalDialog.Footer>
          <Button onClick={() => setOpen(false)}>Doorgaan met mijn sessie</Button>
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
