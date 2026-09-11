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

type DetailPageEditHistoryTabProps = {
  readonly hidden: boolean
}

type HistoryEventRecord = {
  details: string
  event: string
  year: string
}

const initialHistoryEvents = detailPageData.history.map(({ details, event, year }) => ({
  details,
  event,
  year,
}))

const emptyHistoryEvent: HistoryEventRecord = {
  details: '',
  event: '',
  year: '',
}

export const DetailPageEditHistoryTab = ({ hidden }: DetailPageEditHistoryTabProps) => {
  const [historyEvents, setHistoryEvents] = useState(initialHistoryEvents)
  const [dialogIndex, setDialogIndex] = useState<number | null>(null)
  const [formState, setFormState] = useState(emptyHistoryEvent)

  const dialogRef = useRef<HTMLDialogElement>(null)

  const dialogId = 'detail-page-history-dialog'
  const dialogFormId = 'detail-page-history-form'
  const isEditing = dialogIndex !== null

  const openDialog = (index: number | null) => {
    setDialogIndex(index)
    setFormState(index === null ? emptyHistoryEvent : (historyEvents[index] ?? emptyHistoryEvent))
    ModalDialog.open(`#${dialogId}`)
  }

  const handleDialogClose = () => {
    setDialogIndex(null)
    setFormState(emptyHistoryEvent)
  }

  const handleDialogSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextEvent = {
      details: formState.details,
      event: formState.event.trim() || `Gebeurtenis ${(dialogIndex ?? historyEvents.length) + 1}`,
      year: formState.year,
    }

    setHistoryEvents((currentEvents) => {
      if (dialogIndex === null) {
        return [...currentEvents, nextEvent]
      }

      return currentEvents.map((historyEvent, index) => (index === dialogIndex ? nextEvent : historyEvent))
    })

    dialogRef.current?.close()
  }

  return (
    <section aria-labelledby="historie" hidden={hidden}>
      <Column gap="large">
        <Heading id="historie" level={2}>
          Historie
        </Heading>
        <Paragraph>
          Beheer de chronologie van het object in de tabel en bewerk gebeurtenissen in één herbruikbare dialoog.
        </Paragraph>
        <DetailPageEditTable
          addButtonLabel="Gebeurtenis toevoegen"
          caption="Historische gebeurtenissen"
          columns={[
            { header: 'Jaar', isRowHeader: true, renderCell: ({ year }) => year },
            { header: 'Gebeurtenis', renderCell: ({ event }, index) => event || `Gebeurtenis ${index + 1}` },
            { header: 'Toelichting', renderCell: ({ details }) => details },
          ]}
          getEditLabel={({ event }, index) => `Bewerk ${event || `Gebeurtenis ${index + 1}`}`}
          getRowKey={({ event, year }, index) => `${year}-${event || `Gebeurtenis ${index + 1}`}-${index}`}
          onAdd={() => openDialog(null)}
          onEdit={openDialog}
          rows={historyEvents}
        />
        <ModalDialog aria-labelledby={`${dialogId}-heading`} id={dialogId} onClose={handleDialogClose} ref={dialogRef}>
          <ModalDialog.Header>
            <Heading id={`${dialogId}-heading`} level={1} size="level-2">
              {isEditing ? 'Gebeurtenis bewerken' : 'Gebeurtenis toevoegen'}
            </Heading>
          </ModalDialog.Header>
          <ModalDialog.Body>
            <form id={dialogFormId} onSubmit={handleDialogSubmit}>
              <Column gap="small">
                <Paragraph>Vul het jaar, de gebeurtenis en de toelichting in.</Paragraph>
                <Field>
                  <Label htmlFor="history-dialog-year">Jaar</Label>
                  <TextInput
                    id="history-dialog-year"
                    onChange={(event) => setFormState({ ...formState, year: event.currentTarget.value })}
                    value={formState.year}
                  />
                </Field>
                <Field>
                  <Label htmlFor="history-dialog-event">Gebeurtenis</Label>
                  <TextInput
                    id="history-dialog-event"
                    onChange={(event) => setFormState({ ...formState, event: event.currentTarget.value })}
                    value={formState.event}
                  />
                </Field>
                <Field>
                  <Label htmlFor="history-dialog-details">Toelichting</Label>
                  <TextArea
                    id="history-dialog-details"
                    onChange={(event) => setFormState({ ...formState, details: event.currentTarget.value })}
                    rows={4}
                    value={formState.details}
                  />
                </Field>
              </Column>
            </form>
          </ModalDialog.Body>
          <ModalDialog.Footer>
            <ActionGroup>
              <Button form={dialogFormId} type="submit">
                {isEditing ? 'Opslaan' : 'Gebeurtenis toevoegen'}
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
