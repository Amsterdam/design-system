/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/* Demo only: never merge. Tests the close button of the Modal Dialog with buttons of other organisations. */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ElementType, PropsWithChildren } from 'react'

import { Button, Heading, Paragraph } from '@amsterdam/design-system-react'
import { ModalDialog } from '@amsterdam/design-system-react/src'
import { Button as DenHaagButton } from '@gemeente-denhaag/button'
import { Button as UtrechtButton } from '@utrecht/button-react/css'

import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css'
import '@utrecht/design-tokens/dist/index.css'

type HeaderProps = PropsWithChildren<{ readonly closeButtonComponent: ElementType }>

/* The Header as it renders at HEAD, before the contract change: the custom component gets the props of the Icon Button. */
const OldContractHeader = ({ children, closeButtonComponent: CloseButton }: HeaderProps) => (
  <header className="ams-modal-dialog__header">
    {children}
    <CloseButton
      className="ams-modal-dialog__close-button"
      label="Sluiten"
      onClick={ModalDialog.close}
      size="heading-2"
      svg={undefined}
      type="button"
    />
  </header>
)

const meta = {
  title: 'Test/Modal Dialog with NLDS buttons',
  tags: ['!manifest'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const story = (id: string, theme: string, Header: ElementType, closeButtonComponent: ElementType): Story => ({
  render: () => (
    <>
      <Button onClick={() => ModalDialog.open(`#${id}`)}>Open</Button>
      <ModalDialog aria-labelledby={`${id}-heading`} className={theme} id={id}>
        <Header closeButtonComponent={closeButtonComponent}>
          <Heading id={`${id}-heading`} level={1} size="level-2">
            Status van uw aanvraag
          </Heading>
        </Header>
        <ModalDialog.Body>
          <Paragraph>Een medewerker beoordeelt uw aanvraag. U krijgt binnen 8 weken bericht.</Paragraph>
        </ModalDialog.Body>
      </ModalDialog>
    </>
  ),
})

export const UtrechtOldContract = story('utrecht-old', 'utrecht-theme', OldContractHeader, UtrechtButton)
export const UtrechtNewContract = story('utrecht-new', 'utrecht-theme', ModalDialog.Header, UtrechtButton)
export const DenHaagOldContract = story('denhaag-old', 'denhaag-theme', OldContractHeader, DenHaagButton)
export const DenHaagNewContract = story('denhaag-new', 'denhaag-theme', ModalDialog.Header, DenHaagButton)
