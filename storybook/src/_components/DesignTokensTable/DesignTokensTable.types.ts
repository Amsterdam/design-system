/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/** A dimension expressed as a number and a CSS unit. */
export type DimensionValue = {
  /** The CSS unit, e.g. `'px'`, `'rem'`, or `'%'`. */
  unit: string
  /** The numeric part of the dimension. */
  value: number
}

/** The composite value of a shadow token. */
export type ShadowValue = {
  /** The blur radius of the shadow. */
  blur: DimensionValue | string
  /** The shadow colour as a CSS color string. */
  color: string
  /** Whether the shadow is inset. */
  inset?: boolean
  /** The horizontal offset of the shadow. */
  offsetX: DimensionValue | string
  /** The vertical offset of the shadow. */
  offsetY: DimensionValue | string
  /** The spread radius of the shadow. */
  spread: DimensionValue | string
}

/** A single design token node as produced by Style Dictionary (W3C DTCG format). */
export type Token = {
  /** A deprecation message explaining why this token should no longer be used. */
  $deprecated?: string
  /** A human-readable description of the token's purpose. */
  $description?: string
  /** Vendor-specific extensions following the DTCG `$extensions` convention. */
  $extensions?: {
    /** An Amsterdam-specific subtype that takes precedence over `$type` when resolving the token's visual example. */
    'nl.amsterdam.subtype'?: string
    /** An Amsterdam-specific type used as a fallback when no `$type` or subtype is set. */
    'nl.amsterdam.type'?: string
  }
  /** The DTCG type of the token, e.g. `'color'`, `'dimension'`, or `'shadow'`. */
  $type?: string
  /** The resolved value of the token. */
  $value: DimensionValue | ShadowValue | number | string | string[]
}

/** A nested tree of design tokens, where leaf nodes are `Token` objects. Groups may carry a `$type` that descendants inherit. */
export type Tokens = {
  /** A child node that is either a token, a nested group, or a metadata string. */
  [key: string]: Token | Tokens | string | undefined
  /** The DTCG type inherited by all descendant tokens in this group. */
  $type?: string
}

/** A flattened representation of a single token ready for rendering in the table. */
export type TokenEntry = {
  /** A deprecation message, if the token is deprecated. */
  deprecated?: string
  /** A human-readable description of the token. */
  description?: string
  /** The full CSS custom property name, e.g. `'--ams-color-primary'`. */
  path: string
  /** The resolved token type used to select the visual example component. */
  type?: string
  /** The normalised display value of the token, e.g. `'1rem'` or `'#009de6'`. */
  value: string
}
