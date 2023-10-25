import { GridCellProps } from './GridCell'

export const gridColumnClassNames = (span?: GridCellProps['span'], start?: GridCellProps['start']): string[] => {
  if (!span && !start) {
    return []
  }

  const classes = [] as string[]

  if (typeof span === 'number') {
    classes.push(`amsterdam-grid-span-${span}`)
  } else if (span) {
    const { narrow, medium, wide } = span
    classes.push(
      `amsterdam-narrow-grid-span-${narrow}`,
      `amsterdam-medium-grid-span-${medium}`,
      `amsterdam-wide-grid-span-${wide}`,
    )
  }

  if (typeof start === 'number') {
    classes.push(`amsterdam-grid-start-${start}`)
  } else if (start) {
    const { narrow, medium, wide } = start
    classes.push(
      `amsterdam-narrow-grid-start-${narrow}`,
      `amsterdam-medium-grid-start-${medium}`,
      `amsterdam-wide-grid-start-${wide}`,
    )
  }

  return classes
}
