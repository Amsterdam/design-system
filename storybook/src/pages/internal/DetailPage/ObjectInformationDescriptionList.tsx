/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { DescriptionList, Paragraph, Skeleton } from '@amsterdam/design-system-react'
import { Fragment, Suspense } from 'react'

import {
  excludedObjectInformationKeys,
  formatObjectInformationValue,
  getObjectInformationResource,
  ObjectInformationErrorBoundary,
} from './objectInformation'

type ObjectInformationDescriptionListProps = {
  readonly url: string
}

const ObjectInformationDescriptionListContent = ({ url }: ObjectInformationDescriptionListProps) => {
  const objectInformation = getObjectInformationResource(url).read()

  return (
    <DescriptionList termsWidth="medium">
      {Object.entries(objectInformation)
        .filter(([key]) => !excludedObjectInformationKeys.has(key))
        .map(([key, value]) => (
          <Fragment key={key}>
            <DescriptionList.Term>{key}</DescriptionList.Term>
            <DescriptionList.Description>{formatObjectInformationValue(value)}</DescriptionList.Description>
          </Fragment>
        ))}
    </DescriptionList>
  )
}

const ObjectInformationDescriptionListFallback = () => (
  <div aria-busy="true">
    <p className="ams-visually-hidden" role="status">
      Objectinformatie wordt geladen
    </p>
    <Skeleton>
      <Skeleton.Table columns={2} rows={15} />
    </Skeleton>
  </div>
)

export const ObjectInformationDescriptionList = ({ url }: ObjectInformationDescriptionListProps) => (
  <ObjectInformationErrorBoundary fallback={<Paragraph>Er is iets mis gegaan</Paragraph>}>
    <Suspense fallback={<ObjectInformationDescriptionListFallback />}>
      <ObjectInformationDescriptionListContent url={url} />
    </Suspense>
  </ObjectInformationErrorBoundary>
)
