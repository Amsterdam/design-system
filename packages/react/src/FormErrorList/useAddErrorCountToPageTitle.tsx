import { useEffect, useState } from 'react'

export const useAddErrorCountToPageTitle = (
  /** The list of error messages used to calculate the error count. */
  errors: { id: string; label: string }[],
  /** The text following the error count. */
  label = {
    plural: 'invoerfouten',
    singular: 'invoerfout',
  },
) => {
  const [documentTitle, setDocumentTitle] = useState<string>()

  useEffect(() => {
    setDocumentTitle(document.title)
  }, [])

  if (!documentTitle) return null

  if (errors.length === 1) {
    document.title = `(${errors.length} ${label.singular}) ${documentTitle}`
  } else if (errors.length > 1) {
    document.title = `(${errors.length} ${label.plural}) ${documentTitle}`
  } else {
    document.title = documentTitle
  }

  return null
}
