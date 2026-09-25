/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { DescriptionList, Row } from '@amsterdam/design-system-react'
import { Fragment } from 'react'

type DescriptionListItem = {
  readonly description: string
  readonly term: string
}

type ObjectInformationDescriptionListProps = {
  readonly items: readonly DescriptionListItem[]
}

export const ObjectInformationDescriptionList = ({ items }: ObjectInformationDescriptionListProps) => {
  return (
    <>
      <DescriptionList termsWidth="medium">
        {items.map(({ description, term }) => (
          <Fragment key={`${term}`}>
            <DescriptionList.Term>{term}</DescriptionList.Term>
            <DescriptionList.Description>
              <Row align="between">{description}</Row>
            </DescriptionList.Description>
          </Fragment>
        ))}
      </DescriptionList>
    </>
  )
}
