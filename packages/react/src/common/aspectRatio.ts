type Ratio = 'x-tall' | 'tall' | 'square' | 'wide' | 'x-wide' | '2x-wide'

export type AspectRatioProps = {
  /** The ratio of the horizontal and vertical dimensions. */
  aspectRatio?: Ratio
}
