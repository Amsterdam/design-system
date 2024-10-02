/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

export type Ratio = 'x-tall' | 'tall' | 'square' | 'wide' | 'x-wide' | '2x-wide'

export type AspectRatioProps = {
  /** The dimensions. */
  aspectRatio?: Ratio
}
