import { GridCellProps } from './Grid'

export const gridCellClasses = (span?: GridCellProps['span'], start?: GridCellProps['start']): string[] => {
  if (!span && !start) {
    return []
  }

  const classes = [] as string[]

  if (typeof span === 'number') {
    classes.push(`amsterdam-grid__cell--span-${span}`)
  } else if (span) {
    const { narrow, medium, wide } = span
    classes.push(
      `amsterdam-grid__cell--span-${narrow}`,
      `amsterdam-grid__cell--span-${medium}-medium`,
      `amsterdam-grid__cell--span-${wide}-wide`,
    )
  }

  if (typeof start === 'number') {
    classes.push(`amsterdam-grid__cell--start-${start}`)
  } else if (start) {
    const { narrow, medium, wide } = start
    classes.push(
      `amsterdam-grid__cell--start-${narrow}`,
      `amsterdam-grid__cell--start-${medium}-medium`,
      `amsterdam-grid__cell--start-${wide}-wide`,
    )
  }

  return classes
}
