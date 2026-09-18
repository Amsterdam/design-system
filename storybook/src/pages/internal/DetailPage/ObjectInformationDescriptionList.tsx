/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { DescriptionList } from '@amsterdam/design-system-react'
import { Fragment } from 'react'

type DescriptionListItem = {
  readonly description: string
  readonly term: string
}

type ObjectInformationDescriptionListProps = {
  readonly items: readonly DescriptionListItem[]
}

// @TODO replace with DataList when it is available in the design system
export const ObjectInformationDescriptionList = ({ items }: ObjectInformationDescriptionListProps) => (
  <DescriptionList termsWidth="medium">
    {items.map(({ description, term }) => (
      <Fragment key={term}>
        <DescriptionList.Term>{term}</DescriptionList.Term>
        <DescriptionList.Description>{description}</DescriptionList.Description>
      </Fragment>
    ))}
  </DescriptionList>
)
