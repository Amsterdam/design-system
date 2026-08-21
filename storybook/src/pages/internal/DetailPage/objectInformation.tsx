/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ReactNode } from 'react'

import { Component } from 'react'

export type ObjectInformation = Record<string, unknown>

type ObjectInformationErrorBoundaryProps = {
  readonly children: ReactNode
  readonly fallback: ReactNode
}

type ObjectInformationErrorBoundaryState = {
  readonly hasError: boolean
}

type Resource<T> = {
  read: () => T
}

const objectInformationResourceCache = new Map<string, Resource<ObjectInformation>>()

const createObjectInformationResource = (url: string): Resource<ObjectInformation> => {
  let result: Error | ObjectInformation | undefined
  let status: 'pending' | 'success' | 'error' = 'pending'

  const suspender = fetch(url)
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      const data: unknown = await response.json()

      if (data === null || typeof data !== 'object' || Array.isArray(data)) {
        throw new Error('Unexpected response shape')
      }

      return data as ObjectInformation
    })
    .then(
      (data) => {
        result = data
        status = 'success'
      },
      (error: unknown) => {
        result = error instanceof Error ? error : new Error('Unknown error')
        status = 'error'
      },
    )

  return {
    read() {
      if (status === 'pending') {
        throw suspender
      }

      if (status === 'error') {
        throw result
      }

      return result as ObjectInformation
    },
  }
}

export const getObjectInformationResource = (url: string) => {
  const resource = objectInformationResourceCache.get(url)

  if (resource) {
    return resource
  }

  const nextResource = createObjectInformationResource(url)

  objectInformationResourceCache.set(url, nextResource)

  return nextResource
}

export const formatObjectInformationValue = (value: unknown) => {
  if (value === null) {
    return 'null'
  }

  if (value === undefined) {
    return 'undefined'
  }

  if (typeof value === 'bigint') {
    return value.toString()
  }

  if (typeof value === 'boolean' || typeof value === 'number' || typeof value === 'string') {
    return value
  }

  return <pre>{JSON.stringify(value, null, 2)}</pre>
}

export class ObjectInformationErrorBoundary extends Component<
  ObjectInformationErrorBoundaryProps,
  ObjectInformationErrorBoundaryState
> {
  public override state: ObjectInformationErrorBoundaryState = {
    hasError: false,
  }

  public static getDerivedStateFromError(): ObjectInformationErrorBoundaryState {
    return { hasError: true }
  }

  public override render() {
    return this.state.hasError ? this.props.fallback : this.props.children
  }
}

export const excludedObjectInformationKeys = new Set(['_links', 'geometrie', 'geometry'])
