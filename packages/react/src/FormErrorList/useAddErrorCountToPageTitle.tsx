import { useEffect, useState } from 'react'

export const useAddErrorCountToPageTitle = (
  /** The list of error messages used to calculate the error count. */
  errors: { id: string; label: string }[],
  /** The text following the error count. */
  suffix = {
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
    document.title = `(${errors.length} ${suffix.singular}) ${documentTitle}`
  } else if (errors.length > 1) {
    document.title = `(${errors.length} ${suffix.plural}) ${documentTitle}`
  } else {
    document.title = documentTitle
  }

  return null
}
