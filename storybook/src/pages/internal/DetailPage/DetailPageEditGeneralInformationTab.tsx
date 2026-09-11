/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { FormEvent } from 'react'

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
import { useRef, useState } from 'react'

import detailPageData from './detailPageData.json'
import { DetailPageEditTable } from './DetailPageEditTable'

type DetailPageEditGeneralInformationTabProps = {
  readonly hidden: boolean
}

type BasicInformationRecord = {
  description: string
  term: string
}

const initialBasicInformation = detailPageData.basicInformation.map(({ description, term }) => ({
  description,
  term,
}))

const emptyBasicInformation: BasicInformationRecord = {
  description: '',
  term: '',
}

export const DetailPageEditGeneralInformationTab = ({ hidden }: DetailPageEditGeneralInformationTabProps) => {
  const [basicInformation, setBasicInformation] = useState(initialBasicInformation)
  const [dialogIndex, setDialogIndex] = useState<number | null>(null)
  const [formState, setFormState] = useState(emptyBasicInformation)

  const dialogRef = useRef<HTMLDialogElement>(null)

  const dialogId = 'detail-page-basic-information-dialog'
  const dialogFormId = 'detail-page-basic-information-form'
  const isEditing = dialogIndex !== null

  const openDialog = (index: number | null) => {
    setDialogIndex(index)
    setFormState(index === null ? emptyBasicInformation : (basicInformation[index] ?? emptyBasicInformation))
    ModalDialog.open(`#${dialogId}`)
  }

  const handleDialogClose = () => {
    setDialogIndex(null)
    setFormState(emptyBasicInformation)
  }

  const handleDialogSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextBasicInformation = {
      description: formState.description,
      term: formState.term.trim() || `Kenmerk ${(dialogIndex ?? basicInformation.length) + 1}`,
    }

    setBasicInformation((currentItems) => {
      if (dialogIndex === null) {
        return [...currentItems, nextBasicInformation]
      }

      return currentItems.map((item, index) => (index === dialogIndex ? nextBasicInformation : item))
    })

    dialogRef.current?.close()
  }

  return (
    <section aria-labelledby="algemene-informatie" hidden={hidden}>
      <Column gap="large">
        <Heading id="algemene-informatie" level={2}>
          Algemene informatie
        </Heading>
        <Paragraph>Werk de introductie bij en beheer de kenmerken in de tabel met één herbruikbare dialoog.</Paragraph>
        <Field>
          <Label htmlFor="detail-page-description">Introductie</Label>
          <TextArea defaultValue={detailPageData.description} id="detail-page-description" rows={4} />
        </Field>
        <DetailPageEditTable
          addButtonLabel="Kenmerk toevoegen"
          caption="Algemene informatie"
          columns={[
            { header: 'Kenmerk', isRowHeader: true, renderCell: ({ term }, index) => term || `Kenmerk ${index + 1}` },
            { header: 'Waarde', renderCell: ({ description }) => description },
          ]}
          getEditLabel={({ term }, index) => `Bewerk ${term || `Kenmerk ${index + 1}`}`}
          getRowKey={({ term }, index) => `${term || `Kenmerk ${index + 1}`}-${index}`}
          onAdd={() => openDialog(null)}
          onEdit={openDialog}
          rows={basicInformation}
        />
        <ModalDialog aria-labelledby={`${dialogId}-heading`} id={dialogId} onClose={handleDialogClose} ref={dialogRef}>
          <ModalDialog.Header>
            <Heading id={`${dialogId}-heading`} level={1} size="level-2">
              {isEditing ? 'Kenmerk bewerken' : 'Kenmerk toevoegen'}
            </Heading>
          </ModalDialog.Header>
          <ModalDialog.Body>
            <form id={dialogFormId} onSubmit={handleDialogSubmit}>
              <Column gap="small">
                <Paragraph>Vul het kenmerk en de bijbehorende waarde in.</Paragraph>
                <Field>
                  <Label htmlFor="basic-information-dialog-term">Kenmerk</Label>
                  <TextInput
                    id="basic-information-dialog-term"
                    onChange={(event) => setFormState({ ...formState, term: event.currentTarget.value })}
                    value={formState.term}
                  />
                </Field>
                <Field>
                  <Label htmlFor="basic-information-dialog-description">Waarde</Label>
                  <TextArea
                    id="basic-information-dialog-description"
                    onChange={(event) => setFormState({ ...formState, description: event.currentTarget.value })}
                    rows={4}
                    value={formState.description}
                  />
                </Field>
              </Column>
            </form>
          </ModalDialog.Body>
          <ModalDialog.Footer>
            <ActionGroup>
              <Button form={dialogFormId} type="submit">
                {isEditing ? 'Opslaan' : 'Kenmerk toevoegen'}
              </Button>
              <Button onClick={ModalDialog.close} variant="secondary">
                Annuleren
              </Button>
            </ActionGroup>
          </ModalDialog.Footer>
        </ModalDialog>
      </Column>
    </section>
  )
}
