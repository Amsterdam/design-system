/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { DataList } from '@amsterdam/design-system-react'

type DataListItem = {
  readonly description: string
  readonly term: string
}

type ObjectInformationDataListProps = {
  readonly items: readonly DataListItem[]
}

export const ObjectInformationDataList = ({ items }: ObjectInformationDataListProps) => {
  return (
    <DataList>
      {items.map(({ description, term }) => (
        <DataList.Item key={term}>
          <DataList.Key>{term}</DataList.Key>
          <DataList.Value>{description}</DataList.Value>
        </DataList.Item>
      ))}
    </DataList>
  )
}
