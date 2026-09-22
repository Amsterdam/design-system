/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import {
  Button,
  Column,
  DescriptionList,
  Field,
  Heading,
  IconButton,
  Label,
  Row,
  TextArea,
} from '@amsterdam/design-system-react'
import { SpeechBalloonIcon } from '@amsterdam/design-system-react-icons'
import { ModalDialog } from '@amsterdam/design-system-react/src'
import { Fragment, useState } from 'react'

type DescriptionListItem = {
  readonly description: string
  readonly term: string
}

type ObjectInformationDescriptionListProps = {
  readonly items: readonly DescriptionListItem[]
  readonly review?: boolean
}

type RemarkItem = {
  readonly id: string
  readonly label: string
}

export const ObjectInformationDescriptionList = ({ items, review }: ObjectInformationDescriptionListProps) => {
  const [currentRemarkItem, setCurrentRemarkItem] = useState<RemarkItem | null>(null)
  const [remarks, setRemarks] = useState<Record<string, string>>({})

  const dialogId = 'detail-page-description-list-review-remark-dialog'
  const currentRemarkItemLabel = currentRemarkItem?.label ?? ''

  const openRemarkDialog = (id: string, label: string) => {
    setCurrentRemarkItem({ id, label })
    ModalDialog.open(`#${dialogId}`)
  }

  return (
    <>
      <DescriptionList termsWidth="medium">
        {items.map(({ description, term }, index) => {
          const descriptionId = `${term.toLowerCase()}-${index}`

          return (
            <Fragment key={`${term}-${index}`}>
              <DescriptionList.Term>{term}</DescriptionList.Term>
              <DescriptionList.Description id={descriptionId}>
                <Row align="between">
                  {description}
                  {review && (
                    <IconButton
                      label={`Plaats opmerking bij ${term}`}
                      onClick={() => openRemarkDialog(descriptionId, term)}
                      svg={SpeechBalloonIcon}
                    />
                  )}
                </Row>
              </DescriptionList.Description>
            </Fragment>
          )
        })}
      </DescriptionList>

      {review && (
        <ModalDialog
          aria-labelledby={`${dialogId}-heading`}
          id={dialogId}
          onClose={() => setCurrentRemarkItem(null)}
          style={{ margin: 'auto' }}
        >
          <ModalDialog.Header>
            <Heading id={`${dialogId}-heading`} level={1} size="level-2">
              {currentRemarkItemLabel ? `Opmerking toevoegen bij ${currentRemarkItemLabel}` : 'Opmerking toevoegen'}
            </Heading>
          </ModalDialog.Header>
          <ModalDialog.Body>
            <Column gap="small">
              <Field>
                <Label htmlFor="detail-page-review-description-list-remarks">Opmerkingen</Label>
                <TextArea
                  id="detail-page-review-description-list-remarks"
                  onChange={(event) => {
                    if (!currentRemarkItem) {
                      return
                    }

                    const value = event.currentTarget.value

                    setRemarks((currentRemarks) => ({
                      ...currentRemarks,
                      [currentRemarkItem.id]: value,
                    }))
                  }}
                  rows={4}
                  value={currentRemarkItem ? (remarks[currentRemarkItem.id] ?? '') : ''}
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
