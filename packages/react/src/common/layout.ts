export const crossAlignOptions: Array<string> = ['baseline', 'center', 'end', 'start'] as const
export type CrossAlign = (typeof crossAlignOptions)[number]

export const mainAlignOptions: Array<string> = ['around', 'between', 'center', 'end', 'evenly'] as const
export type MainAlign = (typeof mainAlignOptions)[number]
