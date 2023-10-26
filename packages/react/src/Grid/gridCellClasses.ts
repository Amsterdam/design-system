import { GridCellProps } from './GridCell'

export const gridCellClasses = (span?: GridCellProps['span'], start?: GridCellProps['start']): string[] => {
  if (!span && !start) {
    return []
  }

  const classes = [] as string[]

  if (typeof span === 'number') {
    classes.push(`amsterdam-grid-cell-span-${span}`)
  } else if (span) {
    const { narrow, medium, wide } = span
    classes.push(
      `amsterdam-grid-cell-span-${narrow}`,
      `amsterdam-grid-cell-span-${medium}-medium`,
      `amsterdam-grid-cell-span-${wide}-wide`,
    )
  }

  if (typeof start === 'number') {
    classes.push(`amsterdam-grid-cell-start-${start}`)
  } else if (start) {
    const { narrow, medium, wide } = start
    classes.push(
      `amsterdam-grid-cell-start-${narrow}`,
      `amsterdam-grid-cell-start-${medium}-medium`,
      `amsterdam-grid-cell-start-${wide}-wide`,
    )
  }

  return classes
}
