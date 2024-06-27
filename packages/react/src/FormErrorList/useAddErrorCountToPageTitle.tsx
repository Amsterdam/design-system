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

  if (documentTitle) {
    if (errors.length > 0) {
      document.title = `(${errors.length} ${errors.length === 1 ? suffix.singular : suffix.plural}) ${documentTitle}`
    } else {
      document.title = documentTitle
    }
  }

  return null
}
