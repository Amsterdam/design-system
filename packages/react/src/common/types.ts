export const aspectRatioOptions = ['x-tall', 'tall', 'square', 'wide', 'x-wide', '2x-wide'] as const
export type AspectRatioProps = {
  /** The aspect ratio to display media content in. */
  aspectRatio?: (typeof aspectRatioOptions)[number]
}

export const crossAlignOptions = ['start', 'center', 'baseline', 'end'] as const
export type CrossAlign = (typeof crossAlignOptions)[number]

// Baseline alignment doesn’t make much sense in a column.
// This separate type for it clarifies its appearance in Storybook.
export const crossAlignOptionsForColumn = crossAlignOptions.filter((option) => option !== 'baseline')
export type CrossAlignForColumn = (typeof crossAlignOptionsForColumn)[number]

export const mainAlignOptions = ['center', 'end', 'between', 'around', 'evenly'] as const
export type MainAlign = (typeof mainAlignOptions)[number]
