type BaseIconMeta = {
  aliases?: string[]
  category?: string
  directional?: boolean
  name: string
  requireVisibleLabel?: boolean
}

export type IconMetadata =
  | ({
      deprecated?: false
      deprecatedBy?: never
    } & BaseIconMeta)
  | ({
      deprecated: true
      deprecatedBy?: string
    } & BaseIconMeta)
