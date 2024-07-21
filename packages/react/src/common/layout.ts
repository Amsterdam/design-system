export const crossAlignOptions = ['start', 'center', 'baseline', 'end'] as const
export type CrossAlign = (typeof crossAlignOptions)[number]

export const mainAlignOptions = ['center', 'end', 'between', 'around', 'evenly'] as const
export type MainAlign = (typeof mainAlignOptions)[number]
