/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

// This array is not used to create the aspect ratio CSS classes.
// If you modify this array, you must also update the
// aspect ratio CSS classes in /packages/css/src/components/aspect-ratio/aspect-ratio.scss.
export const aspectRatioOptions = ['9:16', '3:4', '1:1', '4:3', '16:9', '16:5'] as const
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
