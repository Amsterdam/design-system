export const crossAlignOptions: Array<string> = ['start', 'center', 'baseline', 'end'] as const
export type CrossAlign = (typeof crossAlignOptions)[number]

export const mainAlignOptions: Array<string> = ['center', 'end', 'between', 'around', 'evenly'] as const
export type MainAlign = (typeof mainAlignOptions)[number]
