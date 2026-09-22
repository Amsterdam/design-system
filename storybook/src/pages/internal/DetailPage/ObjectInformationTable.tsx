/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Button, Column, Field, Heading, IconButton, Label, Table, TextArea } from '@amsterdam/design-system-react'
import { SpeechBalloonIcon } from '@amsterdam/design-system-react-icons'
import { ModalDialog } from '@amsterdam/design-system-react/src'
import { useState } from 'react'

type ObjectInformationTableProps = {
  readonly events: readonly HistoryEvent[]
  readonly review?: boolean
}

type HistoryEvent = {
  readonly details: string
  readonly event: string
  readonly year: string
}

type RemarkEvent = {
  readonly id: string
  readonly label: string
}

export const ObjectInformationTable = ({ events, review }: ObjectInformationTableProps) => {
  const [currentRemarkEvent, setCurrentRemarkEvent] = useState<RemarkEvent | null>(null)
  const [remarks, setRemarks] = useState<Record<string, string>>({})

  const dialogId = 'detail-page-history-event-review-remark-dialog'
  const currentRemarkEventLabel = currentRemarkEvent?.label ?? ''

  const openRemarkDialog = (id: string, label: string) => {
    setCurrentRemarkEvent({ id, label })
    ModalDialog.open(`#${dialogId}`)
  }

  return (
    <>
      <Table>
        <Table.Caption>
          <Heading level={3}>Historische mijlpalen</Heading>
        </Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">Jaar</Table.HeaderCell>
            <Table.HeaderCell scope="col">Gebeurtenis</Table.HeaderCell>
            <Table.HeaderCell scope="col">Toelichting</Table.HeaderCell>
            {review && <Table.HeaderCell scope="col"></Table.HeaderCell>}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {events.map(({ details, event, year }, index) => {
            const rowId = `row-${index}`

            return (
              <Table.Row id={rowId} key={`${year}-${event}`}>
                <Table.HeaderCell scope="row">{year}</Table.HeaderCell>
                <Table.Cell>{event}</Table.Cell>
                <Table.Cell>{details}</Table.Cell>
                {review && (
                  <Table.Cell>
                    <IconButton
                      label={`Plaats opmerking bij ${event}`}
                      onClick={() => openRemarkDialog(rowId, event)}
                      svg={SpeechBalloonIcon}
                    />
                  </Table.Cell>
                )}
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>

      {review && (
        <ModalDialog
          aria-labelledby={`${dialogId}-heading`}
          id={dialogId}
          onClose={() => setCurrentRemarkEvent(null)}
          style={{ margin: 'auto' }}
        >
          <ModalDialog.Header>
            <Heading id={`${dialogId}-heading`} level={1} size="level-2">
              {currentRemarkEventLabel ? `Opmerking toevoegen bij ${currentRemarkEventLabel}` : 'Opmerking toevoegen'}
            </Heading>
          </ModalDialog.Header>
          <ModalDialog.Body>
            <Column gap="small">
              <Field>
                <Label htmlFor="detail-page-review-remarks">Opmerkingen</Label>
                <TextArea
                  id="detail-page-review-remarks"
                  onChange={(event) => {
                    if (!currentRemarkEvent) {
                      return
                    }

                    const value = event.currentTarget.value

                    setRemarks((currentRemarks) => ({
                      ...currentRemarks,
                      [currentRemarkEvent.id]: value,
                    }))
                  }}
                  rows={4}
                  value={currentRemarkEvent ? (remarks[currentRemarkEvent.id] ?? '') : ''}
                />
              </Field>
            </Column>
          </ModalDialog.Body>
          <ModalDialog.Footer>
            <Button onClick={ModalDialog.close}>Sluiten</Button>
          </ModalDialog.Footer>
        </ModalDialog>
      )}
    </>
  )
}
