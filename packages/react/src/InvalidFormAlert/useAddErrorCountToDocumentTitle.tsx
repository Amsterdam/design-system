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
    // Capture the title we found on mount so we can restore it on unmount.
    originalTitleRef.current ??= document.title
    const originalTitle = originalTitleRef.current

    if (errors.length === 1) {
      document.title = `(${errors.length} ${label.singular}) ${originalTitle}`
    } else if (errors.length > 1) {
      document.title = `(${errors.length} ${label.plural}) ${originalTitle}`
    } else {
      document.title = originalTitle
    }

    return () => {
      document.title = originalTitle
    }
  }, [errors.length, label.plural, label.singular])

  return null
}
