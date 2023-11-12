/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

export type PaddingSize = 'small' | 'medium' | 'large'

export type PaddingProps = {
  paddingBottom?: PaddingSize
  paddingTop?: PaddingSize
  paddingVertical?: PaddingSize
}
