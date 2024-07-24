import { HTMLAttributes, PropsWithChildren } from 'react'

export type GapProps = {
  /** The amount of vertical space between items. */
  length: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Gap = ({ children, length }: GapProps) => <span className={`ams-gap--${length}`}>{children}</span>
