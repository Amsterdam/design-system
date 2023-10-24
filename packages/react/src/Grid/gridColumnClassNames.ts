import { PageGridColumnValue } from './GridCell'

export const gridColumnClassNames = (start?: PageGridColumnValue, span?: PageGridColumnValue) => {
  let classes = []

  if (start) {
    if (typeof start === 'number') {
      classes.push(`amsterdam-grid-start-${start}`)
    } else {
      const [narrow, medium, wide] = start

      classes.push(
        `amsterdam-narrow-grid-start-${narrow}`,
        `amsterdam-medium-grid-start-${medium}`,
        `amsterdam-wide-grid-start-${wide}`,
      )
    }
  }

  if (span) {
    if (typeof span === 'number') {
      classes.push(`amsterdam-grid-span-${span}`)
    } else {
      const [narrow, medium, wide] = span

      classes.push(
        `amsterdam-narrow-grid-span-${narrow}`,
        `amsterdam-medium-grid-span-${medium}`,
        `amsterdam-wide-grid-span-${wide}`,
      )
    }
  }

  return classes
}
