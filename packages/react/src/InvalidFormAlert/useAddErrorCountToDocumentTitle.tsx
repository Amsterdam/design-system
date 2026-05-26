/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { useEffect, useRef } from 'react'

export const useAddErrorCountToDocumentTitle = (
  /** The list of error messages used to calculate the error count. */
  errors: { id: string; label: string }[],
  /** The text following the error count. */
  label = {
    plural: 'invoerfouten',
    singular: 'invoerfout',
  },
) => {
  const originalTitleRef = useRef<string | null>(null)

  useEffect(() => {
    originalTitleRef.current ??= document.title

    return () => {
      if (originalTitleRef.current === null) return

      document.title = originalTitleRef.current
    }
  }, [])

  useEffect(() => {
    const originalTitle = originalTitleRef.current ?? document.title
    let nextTitle = originalTitle

    if (errors.length === 1) {
      nextTitle = `(${errors.length} ${label.singular}) ${originalTitle}`
    } else if (errors.length > 1) {
      nextTitle = `(${errors.length} ${label.plural}) ${originalTitle}`
    }

    document.title = nextTitle
  }, [errors.length, label.plural, label.singular])

  return null
}
